import connectDb from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
 try {
     await connectDb();
  const { name, email, password } = await req.json();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password , 12);
  const newUser = await User.create({
    name,
    email,
    password : hashedPassword,
    role : "admin"
  })

  return NextResponse.json(
    {success : "true",
        message: "User Created Successfully",
        data : newUser
    },
    {status : 201}
  )
 } catch (error) {
   console.error("Error creating user") 
   return NextResponse.json(
    {error : "An error occured while creating the user"},
    {status : 500}
   );
 }
}
