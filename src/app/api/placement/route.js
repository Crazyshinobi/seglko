import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Placement from "@/models/Placement";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { uploadFile } from "@/middleware/formidableMiddleware";

export async function GET(req, res) {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  // }

  try {
    await connectDb();
    const placements = await Placement.find();
    return NextResponse.json(
      {
        success: true,
        message: "Placements fetched successfully",
        data: placements,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching placements:", error);
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
    const name = formData.get("name");
    const course = formData.get("course");
    const company = formData.get("company");
    const designation = formData.get("designation");
    const compensation = formData.get("compensation");

    // Validate fields
    if (!name || !course || !company || !designation || !compensation) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Upload file and get path
    const imagePath = await uploadFile(formData);

    // Create placement
    const newPlacement = await Placement.create({
      name,
      course,
      company,
      designation,
      compensation: parseFloat(compensation),
      image: imagePath,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Placement created successfully",
        data: newPlacement,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating placement:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create placement",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
