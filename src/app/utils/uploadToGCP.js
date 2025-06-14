import { bucket } from "@/lib/gcp";
import { randomUUID } from "crypto";

export async function uploadToGCP(file, folder = "", isPublic = true) {
  if (!file || typeof file.arrayBuffer !== "function") {
    throw new Error("Invalid file or missing arrayBuffer method");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const timestamp = Date.now();

  const originalName =
    typeof file.name === "string" ? file.name : `file-${randomUUID()}.bin`;
  const sanitizedFilename = originalName.replace(/\s+/g, "_");
  const filePath = `${folder}/${timestamp}-${sanitizedFilename}`;
  const gcsFile = bucket.file(filePath);

  await gcsFile.save(buffer, {
    resumable: false,
    contentType: file.type || "application/octet-stream",
    metadata: {
      cacheControl: "public, max-age=31536000",
    },
  });

  if (isPublic) {
    const [url] = await gcsFile.getSignedUrl({
      action: "read",
      expires: Date.now() + 10 * 365 * 24 * 60 * 60 * 1000, // 10 years
    });
    return url;
  }

  return gcsFile.name;
}
