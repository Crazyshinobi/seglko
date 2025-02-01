import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function DELETE(request, {params}) {
  await connectDb();
  const { id } = await params;
  return NextResponse.json({
    success: true,
    id,
  });
}

export async function PATCH(request, {params}) {
  await connectDb();
  const { id } = await params;
  return NextResponse.json({
    success: true,
    id,
  });
}
