import { Storage } from '@google-cloud/storage';
import path from 'path';
import { randomUUID } from 'crypto';
import { Readable } from 'stream';
import { fileTypeFromBuffer } from 'file-type';
import fs from 'fs/promises';

const keyFilename = path.join(process.cwd(), process.env.GOOGLE_APPLICATION_CREDENTIALS);
const bucketName = process.env.GCP_BUCKET_NAME;

const storage = new Storage({ keyFilename });
const bucket = storage.bucket(bucketName);

export async function uploadToGCS(file, folder = 'uploads') {
  if (!file) throw new Error('No file provided');

  const buffer = await fs.readFile(file.path);

  const type = await fileTypeFromBuffer(buffer);
  const ext = type?.ext || file.mimetype?.split('/')[1] || 'bin';

  const filename = `${folder}/${randomUUID()}.${ext}`;
  const blob = bucket.file(filename);

  const stream = blob.createWriteStream({
    resumable: false,
    contentType: file.mimetype,
    predefinedAcl: 'publicRead',
  });

  return new Promise((resolve, reject) => {
    stream.on('error', reject);
    stream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;
      resolve(publicUrl);
    });

    Readable.from(buffer).pipe(stream);
  });
}
