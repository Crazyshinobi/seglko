import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Notice from "@/models/Notice";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { uploadFile } from "@/middleware/formidableMiddleware";

export async function GET(req, res) {
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
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    await connectDb();
    const formData = await req.formData();

    // Get form fields
    const title = formData.get("title");

    // Validate fields
    if (!title) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Upload file and get path
    const imagePath = await uploadFile(formData);

    // Create placement
    const newNotice = await Notice.create({
      title,
      image: imagePath,
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
    console.error("Error creating notice:", error);
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
