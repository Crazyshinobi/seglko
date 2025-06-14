// lib/gcp.js
import { Storage } from "@google-cloud/storage";
import path from "path";

const storage = new Storage({
  keyFilename: path.join(process.cwd(), process.env.GOOGLE_APPLICATION_CREDENTIALS),
});

const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);

export { storage, bucket };
