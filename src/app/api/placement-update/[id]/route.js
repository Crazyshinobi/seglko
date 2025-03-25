import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import PlacementUpdate from "@/models/PlacementUpdate";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function DELETE(request, { params }) {
  try {
    await connectDb();

    // Get the session using NextAuth
    const session = await getServerSession(authOptions);

    // Check if user is authenticated
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    // Check if user is admin
    if (session.user.role !== "admin") {
      return NextResponse.json(
        { error: "You are not authorized to delete contacts" },
        { status: 403 }
      );
    }

    const { id } = await params;

    const placementUpdate = await PlacementUpdate.findById(id);

    if (!placementUpdate) {
      return NextResponse.json(
        {
          success: false,
          message: "Placement Update not found",
        },
        { status: 404 }
      );
    }

    const deletePlacementUpdate = await PlacementUpdate.findByIdAndDelete(id);

    if (deletePlacementUpdate) {
      return NextResponse.json(
        {
          success: true,
          message: "Placement update deleted successfully",
          data: deletePlacementUpdate,
        },
        { status: 200 }
      );
    }

    throw new Error("Failed to delete placement update");
  } catch (error) {
    console.error("Error deleting placement update:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDb();

    // Get the session using NextAuth
    const session = await getServerSession(authOptions);

    // Check if user is authenticated
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    // Check if user is admin
    if (session.user.role !== "admin") {
      return NextResponse.json(
        { error: "You are not authorized to delete contacts" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const formData = await request.formData();

    const company = formData.get("company");
    const course = formData.get("course");

    const existingPlacement = await PlacementUpdate.findById(id);

    if (!existingPlacement) {
      return NextResponse.json(
        {
          success: false,
          message: "Placement Update not found",
        },
        { status: 404 }
      );
    }

    // Update the placement
    const updatedPlacement = await PlacementUpdate.findByIdAndUpdate(
      id,
       {
        company,
        course,
      },
      { new: true, runValidators: true }
    );

    if (updatedPlacement) {
      return NextResponse.json(
        {
          success: true,
          message: "Placement update updated successfully",
          data: updatedPlacement,
        },
        { status: 200 }
      );
    }

    throw new Error("Failed to update placement update");
  } catch (error) {
    console.error("Error deleting placement update:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
