import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Notice from "@/models/Notice";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req) {
  try {
    await connectDb();
    const notice = await Notice.find();
    return NextResponse.json(
      {
        success: true,
        message: "Notice fetched successfully",
        data: notice,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching notice:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    await connectDb();

    const formData = await req.formData();
    const title = formData.get("title");
    const image = formData.get("image");

    console.log("===== Incoming Request =====");
    console.log("Title:", title);
    console.log("Image Object Type:", typeof image);
    console.log("Image instanceof Blob:", image instanceof Blob);
    console.log("Image instanceof File:", image instanceof File);
    if (image) {
      console.log("image.name:", image.name);
      console.log("image.type:", image.type);
      console.log("image.size:", image.size);
      console.log("image.constructor.name:", image.constructor?.name);
      console.log("Object.keys(image):", Object.keys(image));
    }

    if (!title || !image) {
      return NextResponse.json({ error: "Title and image are required" }, { status: 400 });
    }

    const { uploadToGCP } = await import("@/app/utils/uploadToGCP");

    const imageUrl = await uploadToGCP(image, "notice", true);

    const newNotice = await Notice.create({
      title,
      image: imageUrl,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Notice created successfully",
        data: newNotice,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("===== Error creating notice =====");
    console.error("Error:", error);
    console.error("Error stringified:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create notice",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
