
import connectDb from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import Job from "@/models/Job";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();

    const totalContacts = await Contact.countDocuments();
    const totalJobs = await Job.countDocuments();

    return NextResponse.json({
      totalContacts,
      totalJobs,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
