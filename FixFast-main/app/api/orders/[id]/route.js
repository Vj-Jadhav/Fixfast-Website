// File: /app/api/orders/[id]/route.js
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request, { params }) {
  try {

    const orderId = await params?.id;
    console.log(orderId)

    // Fetch order details from database
    const order = await prisma.booking.findUnique({
      where: { id: orderId },
      include: {
        service: true,
        technician: true,
        customer: true
      }
    })

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      )
    }

    // Map to expected frontend format
    const responseData = {
      id: order.id,
      service: order.service.name,
      device: order.deviceModel || 'Not specified',
      issue: order.issueDescription,
      status: order.status,
      price: order.service.price,
      paid: order.paymentStatus === 'Paid',
      timeSlot: order.preferredTime === 'ASAP' ? 'As soon as possible' : order.preferredTime,
      address: order.customer.address,
      warranty: '90 days on parts and labor', // Could come from service
      technician: order.technician ? {
        name: order.technician.name,
        rating: order.technician.rating || 4.5,
        experience: `${order.technician.experienceYears || 3} years`,
        phone: order.technician.phone,
        eta: calculateETA(order.assignedAt), // Implement this function
      } : null,
      steps: getOrderSteps(order) // Implement this function
    }

    return NextResponse.json(responseData)

  } catch (error) {
    console.error('Error fetching order:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to calculate ETA
function calculateETA(assignedAt) {
  if (!assignedAt) return 'Not assigned yet'
  const now = new Date()
  const assignedTime = new Date(assignedAt)
  const diffMinutes = Math.floor((now - assignedTime) / (1000 * 60))
  return `${Math.max(15, 45 - diffMinutes)} min` // Example calculation
}

// Helper function to determine order steps
function getOrderSteps(order) {
  const baseSteps = [
    { id: 1, name: 'Booking Confirmed', status: 'complete' },
    { id: 2, name: 'Technician Assigned', status: order.technicianId ? 'complete' : 'upcoming' },
    { id: 3, name: 'Technician En Route', status: order.status === 'In Progress' ? 'current' : 'upcoming' },
    { id: 4, name: 'Service Started', status: order.status === 'In Progress' ? 'upcoming' : 'upcoming' },
    { id: 5, name: 'Service Completed', status: order.status === 'Completed' ? 'complete' : 'upcoming' }
  ]

  // Add timestamps where available
  if (order.createdAt) baseSteps[0].time = new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  if (order.assignedAt) baseSteps[1].time = new Date(order.assignedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  
  return baseSteps
}