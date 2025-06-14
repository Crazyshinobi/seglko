import { Storage } from "@google-cloud/storage";

let storage;
if (process.env.NODE_ENV === 'production') {
  // For production 
  storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID,
    credentials: {
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
  });
} else {
  // For local development
  storage = new Storage({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  });
}

const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);

export { storage, bucket };