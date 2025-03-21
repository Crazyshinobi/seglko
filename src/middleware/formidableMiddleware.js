import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function uploadFile(formData) {
  try {
    const file = formData.get('image');
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const filename = `image-${uniqueSuffix}.${file.type.split('/')[1]}`;
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    const path = join(uploadDir, filename);

    await writeFile(path, buffer);
    return `/uploads/${filename}`;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}