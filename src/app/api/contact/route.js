import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import { verifyToken } from "@/lib/verifyToken";

export async function GET(req, res) {
  await connectDb();
  const { valid, decoded, message } = verifyToken(req);

  if (!valid) {
    return NextResponse.json({ error: message }, { status: 401 });
  } 

  if (decoded.role !== "admin") {
    return NextResponse.json(
      { error: "You are not authorized to view this data" },
      { status: 403 }
    );
  }

  try {
    const contacts = await Contact.find();
    return NextResponse.json(
      {
        success: true,
        message: "Data fetched successfully",
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching contacts:", error);
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
