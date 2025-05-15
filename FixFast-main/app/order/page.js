"use client"
import { Smartphone,Star , User, MapPin, Clock, Calendar, ShieldCheck, CreditCard, AlertCircle, Phone, MessageSquare, ChevronLeft, Check, X, Wrench } from 'lucide-react';
import { useState } from 'react';

export default function OrderPage() {
  // Sample order data - in a real app this would come from your backend
  const [order, setOrder] = useState({
    id: 'FX-784592',
    service: 'Smartphone Screen Replacement',
    device: 'iPhone 13 Pro',
    issue: 'Cracked screen',
    status: 'In Progress',
    price: 3499,
    paid: true,
    date: '2023-11-15',
    timeSlot: '10:00 AM - 12:00 PM',
    address: '123 Tech Park, Bangalore, Karnataka 560001',
    warranty: '90 days on parts and labor',
    technician: {
      name: 'Rajesh Kumar',
      rating: 4.8,
      experience: '5 years',
      phone: '+91 9876543210',
      eta: '15 min', // Estimated time of arrival
      profileImg: '', // URL to technician's image
    },
    steps: [
      { id: 1, name: 'Booking Confirmed', status: 'complete', time: '10:00 AM' },
      { id: 2, name: 'Technician Assigned', status: 'complete', time: '10:05 AM' },
      { id: 3, name: 'Technician En Route', status: 'current', time: '10:20 AM' },
      { id: 4, name: 'Service Started', status: 'upcoming' },
      { id: 5, name: 'Service Completed', status: 'upcoming' },
    ]
  });

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState('');

  const handleCancel = () => {
    // API call to cancel order
    setOrder({...order, status: 'Cancelled'});
    setShowCancelModal(false);
  };

  const handleReport = () => {
    // API call to report technician
    console.log('Report submitted:', reportReason);
    setShowReportModal(false);
    setReportReason('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <button className="mr-4 text-gray-600 hover:text-blue-600">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Order #{order.id}</h1>
          <span className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
            order.status === 'Completed' ? 'bg-green-100 text-green-800' :
            order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {order.status}
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Order Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Service Details */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-blue-600" />
                Service Details
              </h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Service:</div>
                  <div className="w-2/3 font-medium">{order.service}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Device:</div>
                  <div className="w-2/3 font-medium">{order.device}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Issue:</div>
                  <div className="w-2/3 font-medium">{order.issue}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Warranty:</div>
                  <div className="w-2/3 font-medium flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1 text-green-500" />
                    {order.warranty}
                  </div>
                </div>
              </div>
            </div>

            {/* Technician Details */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Technician Details
              </h2>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  {order.technician.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{order.technician.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                    {order.technician.rating} • {order.technician.experience} experience
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:${order.technician.phone}`} className="hover:text-blue-600">
                    {order.technician.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>ETA: {order.technician.eta}</span>
                </div>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Service Progress
              </h2>
              <div className="space-y-4">
                {order.steps.map((step) => (
                  <div key={step.id} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.status === 'complete' ? 'bg-green-100 text-green-600' :
                        step.status === 'current' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {step.status === 'complete' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <span>{step.id}</span>
                        )}
                      </div>
                      {step.id < order.steps.length && (
                        <div className={`w-0.5 h-10 ${
                          step.status === 'complete' ? 'bg-green-100' : 'bg-gray-100'
                        }`}></div>
                      )}
                    </div>
                    <div className="pt-1 pb-6">
                      <h3 className={`font-medium ${
                        step.status === 'current' ? 'text-blue-600' : 'text-gray-800'
                      }`}>
                        {step.name}
                      </h3>
                      {step.time && <p className="text-sm text-gray-500">{step.time}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Actions and Payment */}
          <div className="space-y-6">
            {/* Service Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Service Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Charge</span>
                  <span>₹{order.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (18%)</span>
                  <span>₹{(order.price * 0.18).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{(order.price * 1.18).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center p-3 bg-blue-50 rounded-lg text-blue-700">
                <CreditCard className="w-5 h-5 mr-2" />
                <span>{order.paid ? 'Payment Completed' : 'Payment Pending'}</span>
              </div>
            </div>

            {/* Service Address */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Service Address
              </h2>
              <p className="text-gray-700 mb-2">{order.address}</p>
              <p className="text-gray-600 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {order.date} • {order.timeSlot}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {order.status === 'In Progress' && (
                <>
                  <button
                    onClick={() => setShowCancelModal(true)}
                    className="w-full py-3 bg-white border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-50 flex items-center justify-center"
                  >
                    <X className="w-5 h-5 mr-2" />
                    Cancel Service
                  </button>
                  <button
                    onClick={() => setShowReportModal(true)}
                    className="w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center"
                  >
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Report Technician
                  </button>
                </>
              )}
              <button className="w-full py-3 bg-white border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-50 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat with Technician
              </button>
              <button className="w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Technician
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Cancel Service Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Cancel Service</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to cancel this service? A cancellation fee may apply.</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Go Back
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Report Technician Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Report Technician</h3>
            <p className="text-gray-600 mb-2">Please describe the issue:</p>
            <textarea
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Example: Technician arrived late, was rude, didn't have proper tools..."
            ></textarea>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowReportModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleReport}
                disabled={!reportReason.trim()}
                className={`px-4 py-2 rounded-lg text-white ${
                  !reportReason.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}