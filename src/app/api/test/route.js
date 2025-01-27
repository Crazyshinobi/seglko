import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await connectDb();
  return NextResponse.json({
    success: true,
    message: "hello",
  });
}

export async function POST(request) {
  const { name, email, message } = await request.json();
  return NextResponse.json({
    success: true,
    name,
    email,
    message,
  });
}