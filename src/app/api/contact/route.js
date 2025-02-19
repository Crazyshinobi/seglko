import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Contact from "@/models/Contact";

export async function GET(req, res) {
  await connectDb();
  const response = await Contact.find();
  if (response) {
    return NextResponse.json(
      {
        success: true,
        message: "Data fetched successfully",
        data: response,
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

export async function POST(req, res) {
  try {
    await connectDb();
    const { name, email, mobile, message } = await req.json();
    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { error: "Please fill all the fields" },
        { status: 400 }
      );
    }
    const newContact = await Contact.create({
      name,
      email,
      mobile,
      message,
    });
    return NextResponse.json(
      {
        message: "Contact created successfully",
        contact: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the contact" },
      { status: 500 }
    );
  }
}
