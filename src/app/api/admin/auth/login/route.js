import User from "@/models/User";
import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDb();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please fill all the fields" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return NextResponse.json({ error: "User not Found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 500 }
      );
    }

    // Check role
    const isAdmin = existingUser.role === "admin" ? true : false;
    if (!isAdmin) {
      return NextResponse.json(
        { error: "Not allowed to access this portal" },
        { status: 500 }
      );
    }

    // Generate Access Token
    const accessToken = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15m" }
    );

    // Generate Refresh Token
    const refreshToken = jwt.sign(
      { id: existingUser._id, email: existingUser.email, role: existingUser.role, },
      process.env.JWT_REFRESH_SECRET_KEY,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json(
      {
        message: "Login Successfully",
        accessToken,
        name: existingUser.name,
      },
      { status: 200 }
    );

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.error("Error creating while Login:", error);
    return NextResponse.json(
      { error: "An error occurred while Logging the User" },
      { status: 500 }
    );
  }
}
