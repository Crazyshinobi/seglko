import jwt from "jsonwebtoken";

export function verifyToken(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return { valid: false, message: "No token provided" };
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, message: "Invalid or expired token" };
  }
}
