import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Notice from "@/models/Notice";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { unlink } from "fs/promises";
import { join } from "path";
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
        { error: "You are not authorized to delete notices" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const notice = await Notice.findById(id);
    if (!notice) {
      return NextResponse.json(
        {
          success: false,
          message: "Notice not found",
        },
        { status: 404 }
      );
    }

    if (notice.image) {
      try {
        // Remove the leading slash and get the relative path
        const relativePath = notice.image.replace(/^\//, "");
        const filePath = join(process.cwd(), "public", relativePath);
        await unlink(filePath);
      } catch (error) {
        console.error("Error deleting image file:", error);
      }
    }

    const deleteNotice = await Notice.findByIdAndDelete(id);

    if (deleteNotice) {
      return NextResponse.json(
        {
          success: true,
          message: "Notice deleted successfully",
          data: deleteNotice,
        },
        { status: 200 }
      );
    }

    throw new Error("Failed to delete notice");
  } catch (error) {
    console.error("Error deleting notice:", error);
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
        { error: "You are not authorized to update notices" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const formData = await request.formData();
    const title = formData.get("title");
    const newImage = formData.get("image");

    const existingNotice = await Notice.findById(id);
    if (!existingNotice) {
      return NextResponse.json(
        { success: false, message: "Notice not found" },
        { status: 404 }
      );
    }

    if (newImage && newImage.size > 0) {
      if (existingNotice.image) {
        try {
          const oldPath = existingNotice.image.replace(/^\//, "");
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
      : existingNotice.image;

    const updatedNotice = await Notice.findByIdAndUpdate(
      id,
      {
        title,
        image: imagePath,
      },
      { new: true }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Notice updated successfully",
        data: updatedNotice,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating notice:", error);
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
