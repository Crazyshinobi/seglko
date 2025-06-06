// import connectDb from "@/lib/dbConnect";
// import { NextResponse } from "next/server";
// import JobApplication from "@/models/JobApplication";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../../auth/[...nextauth]/route";

// export async function DELETE(request, { params }) {
//   try {
//     await connectDb();
//     const session = await getServerSession(authOptions);

//     if (!session) {
//       return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
//     }

//     if (session.user.role !== "admin") {
//       return NextResponse.json({ error: "Forbidden" }, { status: 403 });
//     }

//     const { id } = params;

//     const application = await JobApplication.findByIdAndDelete(id);

//     if (!application) {
//       return NextResponse.json({ error: "Application not found" }, { status: 404 });
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Application deleted successfully",
//       data: application,
//     });
//   } catch (error) {
//     console.error("Error deleting application:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }
// export async function PATCH(request, { params }) {
//     try {
//       await connectDb();
//       const session = await getServerSession(authOptions);
  
//       if (!session || session.user.role !== "admin") {
//         return NextResponse.json({ error: "Forbidden" }, { status: 403 });
//       }
  
//       const { id } = params;
//       const formData = await request.formData();
  
//       const updatedFields = {
//         name: formData.get("name"),
//         email: formData.get("email"),
//         phone: formData.get("phone"),
//         qualification: formData.get("qualification"),
//         // add more as needed
//       };
  
//       const updatedApp = await JobApplication.findByIdAndUpdate(id, updatedFields, {
//         new: true,
//         runValidators: true,
//       });
  
//       if (!updatedApp) {
//         return NextResponse.json({ error: "Application not found" }, { status: 404 });
//       }
  
//       return NextResponse.json({
//         success: true,
//         message: "Application updated successfully",
//         data: updatedApp,
//       });
//     } catch (error) {
//       console.error("Error updating application:", error);
//       return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//     }
//   }
  