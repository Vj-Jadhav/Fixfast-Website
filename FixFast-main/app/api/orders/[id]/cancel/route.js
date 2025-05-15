// File: /app/api/orders/[id]/cancel/route.js
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request, { params }) {
  try {
    const orderId = params.id

    // Update order status to cancelled
    const updatedOrder = await prisma.booking.update({
      where: { id: orderId },
      data: { 
        status: 'Cancelled',
        cancelledAt: new Date()
      },
      include: {
        service: true,
        technician: true
      }
    })

    // Notify technician if assigned
    if (updatedOrder.technicianId) {
      // Add notification logic here
    }

    // Return updated order
    return NextResponse.json({
      id: updatedOrder.id,
      status: updatedOrder.status,
      // Include other fields as needed
    })

  } catch (error) {
    console.error('Error cancelling order:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}