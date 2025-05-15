"use client";

import { Smartphone, Star, User, MapPin, Clock, Calendar, ShieldCheck, CreditCard, AlertCircle, Phone, MessageSquare, ChevronLeft, Check, X, Wrench } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OrderPage({ params }) {
  const { id } = params;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchOrder = async () => {
      if (!id) return;

      try {
        console.log("Fetching order with ID:", id);
        const response = await fetch(`/api/orders/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch order');
        }
        const data = await response.json();
        setOrder(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
          <p className="mt-4 text-gray-600">{error || "Order not found"}</p>
          <button 
            onClick={() => router.push('/dashboard')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <button onClick={() => router.back()} className="mr-4 text-gray-600 hover:text-blue-600">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Order #{order.id}</h1>
          <span className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
            order.status === 'Completed' ? 'bg-green-100 text-green-800' :
            order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {order.status || "Unknown Status"}
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
                  <div className="w-2/3 font-medium">{order.service || "N/A"}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Device:</div>
                  <div className="w-2/3 font-medium">{order.device || "N/A"}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Issue:</div>
                  <div className="w-2/3 font-medium">{order.issue || "N/A"}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-gray-600">Warranty:</div>
                  <div className="w-2/3 font-medium flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1 text-green-500" />
                    {order.warranty || "No Warranty"}
                  </div>
                </div>
              </div>
            </div>

            {/* Technician Details */}
            {order.technician && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Technician Details
                </h2>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                    {order.technician.name?.charAt(0) || "?"}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{order.technician.name || "Unknown Technician"}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                      {order.technician.rating || "N/A"} • {order.technician.experience || "Unknown"} experience
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Progress Tracking */}
            {order.steps && order.steps.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Service Progress
                </h2>
                <div className="space-y-4">
                  {order.steps.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.status === 'complete' ? 'bg-green-100 text-green-600' :
                          step.status === 'current' ? 'bg-blue-100 text-blue-600' :
                          'bg-gray-100 text-gray-400'
                        }`}>
                          {step.status === 'complete' ? <Check className="w-4 h-4" /> : <span>{index + 1}</span>}
                        </div>
                      </div>
                      <div className="pt-1 pb-6">
                        <h3 className={`font-medium ${step.status === 'current' ? 'text-blue-600' : 'text-gray-800'}`}>
                          {step.name || "Unknown Step"}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
