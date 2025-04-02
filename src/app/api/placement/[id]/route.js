import connectDb from "@/lib/dbConnect";
import Placement from "@/models/Placement";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { join } from "path";
import { unlink } from "fs/promises";
import { uploadFile } from "@/middleware/formidableMiddleware";

export async function DELETE(request, { params }) {
  try {
    await connectDb();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { error: "You are not authorized to delete student placement" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const placement = await Placement.findById(id);
    if (!placement) {
      return NextResponse.json(
        {
          success: false,
          message: "Placement not found",
        },
        { status: 404 }
      );
    }

    if (placement.image) {
      try {
        const relativePath = placement.image.replace(/^\//, "");
        const filePath = join(process.cwd(), "public", relativePath);
        await unlink(filePath);
      } catch (error) {
        console.error("Error deleting image file:", error);
      }
    }

    const deletePlacement = await Placement.findByIdAndDelete(id);

    if (deletePlacement) {
      return NextResponse.json(
        {
          success: true,
          message: "Student Placement deleted successfully",
          data: deletePlacement,
        },
        { status: 200 }
      );
    }

    throw new Error("Failed to delete Student Placement");

  } catch (error) {
    console.error("Error deleting Student Placement:", error);
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
    
        const session = await getServerSession(authOptions);
    
        if (!session) {
          return NextResponse.json(
            { error: "Unauthorized access" },
            { status: 401 }
          );
        }
    
        if (session.user.role !== "admin") {
          return NextResponse.json(
            { error: "You are not authorized to update placement" },
            { status: 403 }
          );
        }
    
        const { id } = await params;
        const formData = await request.formData();
        const name = formData.get("name");
        const course = formData.get("course");
        const company = formData.get("company");
        const designation = formData.get("designation");
        const compensation = formData.get("compensation");
        const newImage = formData.get("image");
    
        const existingPlacement = await Placement.findById(id);
        if (!existingPlacement) {
          return NextResponse.json(
            { success: false, message: "Student Placement not found" },
            { status: 404 }
          );
        }
    
        if (newImage && newImage.size > 0) {
          if (existingPlacement.image) {
            try {
              const oldPath = existingPlacement.image.replace(/^\//, "");
              const fullOldPath = join(process.cwd(), "public", oldPath);
              await unlink(fullOldPath);
            } catch (error) {
              console.error("Error deleting old image:", error);
            }
          }
        }
    
        // Upload new file and get path
        const imagePath = newImage
          ? await uploadFile(formData)
          : existingPlacement.image;
    
        const updatedPlacement = await Placement.findByIdAndUpdate(
          id,
          {
            name,
            course,
            company,
            designation,
            compensation,
            image: imagePath,
          },
          { new: true }
        );
    
        return NextResponse.json(
          {
            success: true,
            message: "Student Placement updated successfully",
            data: updatedPlacement,
          },
          { status: 200 }
        );
      } catch (error) {
        console.error("Error updating Student Placement:", error);
        return NextResponse.json(
          {
            success: false,
            message: "Internal server error",
            error: error.message,
          },
          { status: 500 }
        );
      }
}