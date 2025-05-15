// File: /app/api/Book-repair/route.js
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
// import { authOptions } from '@/lib/auth'
export const config = {
    runtime: "nodejs",
  };
export async function POST(request) {
  try {
    const session = await getServerSession()
    const data = await request.json()

    // Validate required fields
    if (!data.device || !data.customerDetails || !data.finalPrice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if user is authenticated
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Find or create the service based on device type
    let service = await prisma.service.findFirst({
      where: {
        name: `${data.device} Repair`,
        category: data.device
      }
    })

    if (!service) {
      service = await prisma.service.create({
        data: {
          name: `${data.device} Repair`,
          description: `Repair service for ${data.device}`,
          price: data.finalPrice,
          category: data.device,
          estimatedTime: '1-2 hours'
        }
      })
    }

    // Get customer user record
    const customer = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!customer) {
      return NextResponse.json(
        { error: 'Customer not found' },
        { status: 404 }
      )
    }

    // Create the booking
    const booking = await prisma.booking.create({
      data: {
        customerId: customer.id,
        serviceId: service.id,
        status: 'Pending',
        paymentStatus: 'Pending',
        paymentMethod: 'Online',
        customerLat: 0, // You'll need to get these from the customer's address
        customerLng: 0, // You'll need to get these from the customer's address
      }
    })

    // Create payment record
    const payment = await prisma.payment.create({
      data: {
        bookingId: booking.id,
        customerId: customer.id,
        amount: data.finalPrice,
        status: 'Paid',
        method: 'Online'
      }
    })

    // Update booking with payment status
    await prisma.booking.update({
      where: { id: booking.id },
      data: { paymentStatus: 'Paid' }
    })

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      paymentId: payment.id,
      message: 'Booking created successfully'
    })

  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

