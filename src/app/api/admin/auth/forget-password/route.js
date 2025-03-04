import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const existingUser = await User.find({ email });

    return NextResponse({ existingUser }, { status: 200 });
  } catch (error) {
    return NextResponse({ error }, { status: 500 });
  }
}
