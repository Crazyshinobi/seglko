import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
  try {
    await connectDb();
    const role = "admin";
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Please fill all the fields" },
        { status: 400 }
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      role,
    });
    return NextResponse.json(
      {
        message: "User created successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating User:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the User" },
      { status: 500 }
    );
  }
}
