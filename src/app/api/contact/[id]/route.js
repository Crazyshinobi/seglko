import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Contact from "@/models/Contact";

export async function DELETE(request, { params }) {
  await connectDb();
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
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
