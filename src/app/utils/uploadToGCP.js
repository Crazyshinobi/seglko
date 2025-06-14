import { bucket } from "@/lib/gcp";

export async function uploadToGCP(file, folder = "", isPublic = false) {
  if (!file || typeof file.arrayBuffer !== "function") {
    throw new Error("Invalid file format or missing file");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const timestamp = Date.now();
  const sanitizedFilename = file.name.replace(/\s+/g, "_");
  const filePath = `${folder}/${timestamp}-${sanitizedFilename}`;
  const blob = bucket.file(filePath);

  const blobStream = blob.createWriteStream({
    resumable: false,
    contentType: file.type,
    metadata: {
      cacheControl: "public, max-age=31536000",
    },
  });

  return new Promise((resolve, reject) => {
    blobStream.on("error", reject);
    blobStream.on("finish", async () => {
      try {
        if (isPublic) {
          // Generate signed URL that lasts 10 years
          const [url] = await blob.getSignedUrl({
            action: "read",
            expires: Date.now() + 10 * 365 * 24 * 60 * 60 * 1000, // 10 years
          });
          resolve(url);
        } else {
          resolve(blob.name); // for private use (admin only)
        }
      } catch (err) {
        reject(new Error("Upload succeeded but getting URL failed: " + err.message));
      }
    });

    blobStream.end(buffer);
  });
}
