import { bucket } from "@/lib/gcp";
import { randomUUID } from "crypto";

export async function uploadToGCP(file, folder = "uploads", isPublic = true) {
  if (!file || typeof file.arrayBuffer !== "function") {
    throw new Error("Invalid file or missing arrayBuffer method");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const timestamp = Date.now();

  const originalName =
    typeof file.name === "string" && file.name.trim().length > 0
      ? file.name
      : `file-${randomUUID()}.bin`;

  const sanitizedFilename = originalName.replace(/\s+/g, "_");
  const filePath = `${folder}/${timestamp}-${sanitizedFilename}`;
  const blob = bucket.file(filePath);

  const blobStream = blob.createWriteStream({
    resumable: false,
    contentType: file.type || "application/octet-stream",
    metadata: {
      cacheControl: "public, max-age=31536000",
    },
  });

  return new Promise((resolve, reject) => {
    blobStream.on("error", (err) => {
      reject(new Error(`Failed to upload to GCP: ${err.message}`));
    });

    blobStream.on("finish", async () => {
      try {
        if (isPublic) {
          const [url] = await blob.getSignedUrl({
            action: "read",
            expires: Date.now() + 10 * 365 * 24 * 60 * 60 * 1000, // 10 years
          });
          resolve(url);
        } else {
          resolve(`gs://${bucket.name}/${filePath}`);
        }
      } catch (err) {
        reject(new Error("Upload succeeded but getting URL failed: " + err.message));
      }
    });

    blobStream.end(buffer);
  });
}
