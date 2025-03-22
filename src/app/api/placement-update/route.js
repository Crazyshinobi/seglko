import connectDb from "@/lib/dbConnect";
import PlacementUpdate from "@/models/PlacementUpdate";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req, res) {
  try {
    await connectDb();
    const placementupdates = await PlacementUpdate.find();
    return NextResponse.json(
      {
        success: true,
        message: "Placements Update fetched successfully",
        data: placementupdates,
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
    const { company, course } = await req.json();

    // Validate fields
    if (!company || !course) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create placement
    const newPlacementUpdate = await PlacementUpdate.create({
      course,
      company,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Placement Update created successfully",
        data: newPlacementUpdate,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating placement update:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create placement update",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
