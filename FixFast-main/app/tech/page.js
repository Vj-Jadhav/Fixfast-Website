"use client"
import { useState } from 'react'
import { Wrench, Clock, MapPin, Smartphone, Check, X, Star, ChevronRight, ChevronLeft } from 'lucide-react'

export default function TechnicianDashboard() {
  const [currentOrder, setCurrentOrder] = useState({
    id: 'FX-784592',
    customer: 'Rahul Sharma',
    device: 'iPhone 13 Pro',
    issue: 'Cracked screen replacement',
    address: '123 Tech Park, Bangalore, 560001',
    distance: '2.5 km away',
    serviceFee: 150, // Technician's cut (80% of price)
    platformFee: 700, // Platform's cut (20% of price)
    estimatedTime: '45 minutes',
    preferredTime: 'ASAP',
    status: 'pending' // pending, accepted, completed
  })

  const [slideAccepted, setSlideAccepted] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleAccept = () => {
    setSlideAccepted(true)
    setTimeout(() => {
      setCurrentOrder(prev => ({ ...prev, status: 'accepted' }))
    }, 1000)
  }

  const handleComplete = () => {
    setCurrentOrder(prev => ({ ...prev, status: 'completed' }))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex items-center">
          <h1 className="text-xl font-bold text-gray-800 flex items-center">
            <Wrench className="w-5 h-5 mr-2 text-blue-600" />
            Technician Dashboard
          </h1>
          <div className="ml-auto flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Available
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {/* Current Order Card */}
        {currentOrder.status === 'pending' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">New Service Request</h2>
              
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">{currentOrder.device}</h3>
                  <p className="text-gray-600">{currentOrder.issue}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{currentOrder.address} ({currentOrder.distance})</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Preferred time: {currentOrder.preferredTime === 'ASAP' ? 'Immediately' : currentOrder.preferredTime}</span>
                </div>
              </div>

              {/* Slide to Accept Button */}
              <div className="relative bg-gray-200 rounded-full h-12 mb-6">
                <div 
                  className={`absolute top-0 left-0 h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                    slideAccepted ? 'bg-green-500 w-full' : 'bg-blue-600 w-1/4'
                  }`}
                  style={{
                    width: slideAccepted ? '100%' : '100%',
                    left: slideAccepted ? '0' : '0'
                  }}
                >
                  <button
                    className={`absolute left-0 top-0 h-full aspect-square rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${
                      slideAccepted ? 'transform translate-x-full' : ''
                    }`}
                    style={{
                      transform: slideAccepted ? 'translateX(calc(100% - 3rem))' : 'translateX(0)',
                      pointerEvents: slideAccepted ? 'none' : 'auto'
                    }}
                    onMouseDown={handleAccept}
                    onTouchStart={handleAccept}
                  >
                    {slideAccepted ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-blue-600" />
                    )}
                  </button>
                  <span className="text-white font-medium ml-4">
                    {slideAccepted ? 'Order Accepted!' : 'Slide to Accept'}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="text-blue-600 font-medium flex items-center"
              >
                {showDetails ? 'Hide Details' : 'View Full Details'}
                {showDetails ? (
                  <ChevronLeft className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-1" />
                )}
              </button>

              {showDetails && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Service Details</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Customer:</span>
                      <span>{currentOrder.customer}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Estimated Time:</span>
                      <span>{currentOrder.estimatedTime}</span>
                    </li>
                    <li className="flex justify-between">
                     
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Your Earnings:</span>
                      <span className="font-medium">₹{currentOrder.serviceFee}</span>
                    </li>
                    <li className="flex justify-between text-gray-500 text-xs">
                      <span>Platform Fee (20%):</span>
                      <span>₹{currentOrder.platformFee}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Accepted Order Display */}
        {currentOrder.status === 'accepted' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Current Service</h2>
                  <p className="text-green-600 font-medium">Order Accepted</p>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  In Progress
                </div>
              </div>

              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">{currentOrder.device}</h3>
                  <p className="text-gray-600">{currentOrder.issue}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Customer</p>
                  <p className="font-medium">{currentOrder.customer}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Earnings</p>
                  <p className="font-medium">₹{currentOrder.serviceFee}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Distance</p>
                  <p className="font-medium">{currentOrder.distance}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-medium">{currentOrder.estimatedTime}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span>{currentOrder.address}</span>
                </div>
              </div>

              <button 
                onClick={handleComplete}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
              >
                Mark as Completed
              </button>
            </div>
          </div>
        )}

        {/* Completed Order Display */}
        {currentOrder.status === 'completed' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Service Completed</h2>
                  <p className="text-green-600 font-medium">₹{currentOrder.serviceFee} earned</p>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Completed
                </div>
              </div>

              <div className="flex items-center justify-center bg-green-50 rounded-full w-16 h-16 mx-auto mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>

              <div className="text-center mb-6">
                <h3 className="font-bold text-lg mb-1">{currentOrder.device}</h3>
                <p className="text-gray-600 mb-4">{currentOrder.issue}</p>
                <p className="text-gray-800">You helped {currentOrder.customer} today!</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-3">Payment Summary</h4>
                <ul className="space-y-2">
                
                  <li className="flex justify-between">
                    <span className="text-gray-600">Your Earnings (80%):</span>
                    <span className="font-medium">₹{currentOrder.serviceFee}</span>
                  </li>
                  <li className="flex justify-between text-gray-500 text-sm">
                    <span>Platform Fee (20%):</span>
                    <span>₹{currentOrder.platformFee}</span>
                  </li>
                </ul>
              </div>

              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                Find Next Service
              </button>
            </div>
          </div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-600 text-sm">Today's Earnings</p>
            <p className="text-2xl font-bold">₹150</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-600 text-sm">Completed Today</p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>

        {/* Rating Display */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-2 rounded-full mr-3">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <div>
              <p className="font-medium">Your Rating</p>
              <p className="text-gray-600 flex items-center">
                <span className="text-xl font-bold mr-1">4.8</span>/5
                <span className="text-gray-400 text-sm ml-2">(128 reviews)</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}