import { NextResponse } from 'next/server';
import formidable from 'formidable-serverless';
import { Readable } from 'stream';
import { uploadToGCS } from '@/lib/uploadToGCS';
import JobApplication from '@/models/JobApplication';
import dbConnect from '@/lib/dbConnect';

export const config = {
  api: {
    bodyParser: false,
  },
};

async function toNodeReadable(req) {
  const buffer = Buffer.from(await req.arrayBuffer());
  const stream = Readable.from(buffer);
  // Add minimal required properties for formidable to work
  stream.headers = Object.fromEntries(req.headers.entries());
  stream.method = req.method;
  return stream;
}

export async function POST(req) {
  try {
    await dbConnect();

    const stream = await toNodeReadable(req);

    const form = new formidable.IncomingForm({ multiples: false });

    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(stream, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });
    console.log('Files:', files);


    // normalize files
    const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;

    const imageUrl = imageFile ? await uploadToGCS(imageFile) : null;
    const resumeUrl = resumeFile ? await uploadToGCS(resumeFile) : null;

    const application = await JobApplication.create({
      job: fields.job,
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      qualification: fields.qualification,
      expected_salary: fields.expected_salary,
      last_organization: fields.last_organization,
      last_salary: fields.last_salary,
      experience: fields.experience,
      address: fields.address,
      image: imageUrl,
      resume: resumeUrl,
    });

    return NextResponse.json({ success: true, application }, { status: 201 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
