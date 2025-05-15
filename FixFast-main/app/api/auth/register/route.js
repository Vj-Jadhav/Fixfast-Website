import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      phone,
      userType = 'customer'
    } = await req.json();

    // Validate required fields
    if (!firstname || !lastname || !email || !password || !phone) {
      return NextResponse.json(
        { 
          success: false, 
          message: "First name, last name, email, password and phone are required",
          missingFields: {
            firstname: !firstname,
            lastname: !lastname,
            email: !email,
            password: !password,
            phone: !phone
          }
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 8) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    // Validate userType
    if (!['customer', 'technician'].includes(userType)) {
      return NextResponse.json(
        { success: false, message: "Invalid user type" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true }
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user data
    const userData = {
      firstname,
      lastname,
      email,
      password: hashedPassword,
      phone,
      role: userType,
      address: "",
      lat: 0.0,
      lng: 0.0,
      rating: userType === 'technician' ? 0 : null
    };

    // Create user
    const user = await prisma.user.create({
      data: userData,
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true
      }
    });

    // Return response
    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        data: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          phone: user.phone,
          role: user.role,
          createdAt: user.createdAt
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Registration failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}