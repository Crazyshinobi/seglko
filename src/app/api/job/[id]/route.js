import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Job from "@/models/Job";
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

    const job = await Job.findById(id);

    if (!job) {
      return NextResponse.json(
        {
          success: false,
          message: "Job not found",
        },
        { status: 404 }
      );
    }

    const deleteJob = await Job.findByIdAndDelete(id);

    if (deleteJob) {
      return NextResponse.json(
        {
          success: true,
          message: "Job deleted successfully",
          data: deleteJob,
        },
        { status: 200 }
      );
    }

    throw new Error("Failed to delete job");
  } catch (error) {
    console.error("Error deleting job:", error);
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

    const name = formData.get("name");
    const subject = formData.get("subject");

    const existingJob = await Job.findById(id);

    if (!existingJob) {
      return NextResponse.json(
        {
          success: false,
          message: "Job not found",
        },
        { status: 404 }
      );
    }

    // Update the placement
    const updatedJob = await Job.findByIdAndUpdate(
      id,
       {
        name,
        subject,
      },
      { new: true, runValidators: true }
    );

    if (updatedJob) {
      return NextResponse.json(
        {
          success: true,
          message: "Job updated successfully",
          data: updatedJob,
        },
        { status: 200 }
      );
    }

    throw new Error("Failed to update placement update");
  } catch (error) {
    console.error("Error updating placement update:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}