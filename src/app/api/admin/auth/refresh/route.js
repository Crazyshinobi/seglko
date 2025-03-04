import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
      return NextResponse.json(
        { error: "Refresh token is required" },
        { status: 400 }
      );
    }

    // Verify refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET_KEY
    );

    // Generate new access token
    const newAccessToken = jwt.sign(
      { id: decoded.id, email: decoded.email, role: decoded.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15m" }
    );

    return NextResponse.json({ accessToken: newAccessToken }, { status: 200 });
  } catch (error) {
    console.error("Error refreshing token:", error);
    return NextResponse.json(
      { error: "Invalid refresh token" },
      { status: 403 }
    );
  }
}
