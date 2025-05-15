import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.headers.set("user-id", decoded.id);
    req.headers.set("user-role", decoded.role);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}

// Apply middleware only to protected routes
export const config = {
  matcher: "/api/protected/:path*",
};
