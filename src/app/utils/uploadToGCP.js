import { bucket } from "@/lib/gcp";
import { randomUUID } from "crypto";

export async function uploadToGCP(file, folder = "", isPublic = true) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!file || typeof file.arrayBuffer !== "function") {
          throw new Error("Invalid file or missing arrayBuffer method");
        }
  
        const buffer = Buffer.from(await file.arrayBuffer());
        const timestamp = Date.now();
        const originalName = typeof file.name === "string" ? file.name : `file-${randomUUID()}.bin`;
        const sanitizedFilename = originalName.replace(/\s+/g, "_");
        const filePath = `${folder}/${timestamp}-${sanitizedFilename}`;
        
        const blob = bucket.file(filePath);
        const blobStream = blob.createWriteStream({
          metadata: {
            contentType: file.type || "application/octet-stream",
            cacheControl: "public, max-age=31536000",
          },
          resumable: false
        });
  
        blobStream.on('error', (err) => {
          console.error('Stream error:', err);
          reject(err);
        });
  
        blobStream.on('finish', async () => {
          try {
            if (isPublic) {
              const [url] = await blob.getSignedUrl({
                action: "read",
                expires: Date.now() + 10 * 365 * 24 * 60 * 60 * 1000,
              });
              resolve(url);
            } else {
              resolve(blob.name);
            }
          } catch (err) {
            reject(err);
          }
        });
  
        blobStream.end(buffer);
      } catch (err) {
        reject(err);
      }
    });
  }