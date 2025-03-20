import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
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

    const contact = await Contact.findById(id);

    if (!contact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact not found",
        },
        { status: 404 }
      );
    }

    const deleteContact = await Contact.findByIdAndDelete(id);

    if (deleteContact) {
      return NextResponse.json(
        {
          success: true,
          message: "Contact deleted successfully",
          data: deleteContact,
        },
        { status: 200 }
      );
    }

    throw new Error("Failed to delete contact");

  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}