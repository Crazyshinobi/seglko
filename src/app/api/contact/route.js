import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req, res) {
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
