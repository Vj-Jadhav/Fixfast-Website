"use client"

import { Smartphone, Laptop, Tablet, Watch, AirVent, Tv, Camera, Gamepad2, Headphones, Printer, Check, ChevronRight, Zap, Clock, ShieldCheck, Star, Wand2 } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link'; // Added missing import


export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [issueType, setIssueType] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [useAIDiagnosis, setUseAIDiagnosis] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(false);
  const [bookingId, setBookingId] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredTime: 'ASAP',
  });
let resul;
  const devices = [
    { name: 'Smartphone', icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Laptop', icon: <Laptop className="w-6 h-6" /> },
    { name: 'Tablet', icon: <Tablet className="w-6 h-6" /> },
    { name: 'Smart Watch', icon: <Watch className="w-6 h-6" /> },
    { name: 'Air Conditioner', icon: <AirVent className="w-6 h-6" /> },
    { name: 'Television', icon: <Tv className="w-6 h-6" /> },
    { name: 'Camera', icon: <Camera className="w-6 h-6" /> },
    { name: 'Gaming Console', icon: <Gamepad2 className="w-6 h-6" /> },
    { name: 'Headphones', icon: <Headphones className="w-6 h-6" /> },
    { name: 'Printer', icon: <Printer className="w-6 h-6" /> },

  ];

  const commonIssues = {
    'Smartphone': ['Screen cracked', 'Battery draining fast', 'Not charging', 'Water damage', 'Software issues'],
    'Laptop': ['Keyboard not working', 'Overheating', 'Slow performance', 'Screen issues', 'Won\'t turn on'],
    'Air Conditioner': ['Not cooling', 'Water leakage', 'Strange noises', 'Remote not working', 'Bad odor'],
  };

  const promoCodes = [
    { code: 'FASTFIX20', discount: 20, description: 'Get 20% off your first repair' },
    { code: 'SUMMER15', discount: 15, description: 'Summer special - 15% off AC services' },
    { code: 'QUICK10', discount: 10, description: '10% off for urgent repairs' },
  ];

  const basePrice = 200;
  const [finalPrice, setFinalPrice] = useState(basePrice);
  const [bookingResult, setBookingResult] = useState(null); // Changed from bookingId to bookingResult

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    setStep(2);
  };

  const handleIssueSelect = (issue) => {
    setIssueType(issue);
    setStep(3);
  };

  const applyPromoCode = () => {
    const promo = promoCodes.find(p => p.code === promoCode);
    if (promo) {
      setFinalPrice(basePrice - (basePrice * promo.discount / 100));
      setAppliedPromo(true);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    const bookingData = {
      device: selectedDevice,
      issue: issueType || userDescription,
      promoCode: appliedPromo ? promoCode : null,
      finalPrice,
      customerDetails: bookingDetails,
    };
    window.open("https://rzp.io/rzp/PnP9AiZ", "_blank", "noopener,noreferrer,width=800,height=600");

    try {
      const response = await fetch('/api/Book-repair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
  
      const result = await response.json();
      setBookingResult(result); // Store the entire result
      console.log(resul)
      if (response.ok) {
        console.log('Booking successful:', result);
        // setBookingId(result.bookingId); // Store the booking ID from API response
        setStep(5); // Move to success step
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="bg-white shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-8">
  <div className="flex items-center justify-between relative">
    {/* Background track line */}
    <div className="absolute top-5 left-0 right-0 h-2 bg-gray-200 -z-10 rounded-full"
         style={{ left: '10%', right: '10%' }}></div>
    
    {/* Animated arrow progress line */}
    <div className="absolute top-5 h-2 bg-blue-600 -z-10 transition-all duration-500 ease-out rounded-full"
         style={{ 
           left: '10%',
           width: step === 1 ? '0%' : 
                  step === 2 ? '33%' :
                  step === 3 ? '66%' : '100%',
           clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)'
         }}>
      <div className="absolute right-0 top-1/2 w-3 h-3 bg-blue-600 transform rotate-45 -translate-y-1/2"></div>
    </div>

    {[1, 2, 3, 4].map((stepNumber) => (
      <div key={stepNumber} className="flex flex-col items-center relative z-10">
        {/* Step circle */}
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center
          border-4 ${step >= stepNumber ? 'border-blue-600' : 'border-gray-200'}
          ${step === stepNumber ? 'scale-110 ring-4 ring-blue-200' : ''}
          transition-all duration-300
          ${step > stepNumber ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}
          font-semibold
          shadow-sm
        `}>
          {stepNumber}
        </div>
        
        {/* Step label */}
        <span className={`
          text-xs mt-2 font-medium text-center
          ${step >= stepNumber ? 'text-blue-600' : 'text-gray-500'}
          ${step === stepNumber ? 'font-bold' : ''}
        `}>
          {['Device', 'Issue', 'Details', 'Confirm'][stepNumber - 1]}
        </span>
      </div>
    ))}
  </div>
</div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Step 1: Select Device */}
        {step === 1 && (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What device needs repair?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {devices.map((device) => (
                <button
                  key={device.name}
                  onClick={() => handleDeviceSelect(device.name)}
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  <div className="bg-blue-100 p-3 rounded-full mb-2 text-blue-600">
                    {device.icon}
                  </div>
                  <span className="font-medium">{device.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Issue */}
        {step === 2 && (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
            <div className="flex items-center mb-6">
              <button onClick={() => setStep(1)} className="mr-4 text-gray-500 hover:text-blue-600">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <h2 className="text-2xl font-bold text-gray-800">What's the issue with your {selectedDevice}?</h2>
            </div>

            <div className="mb-8">
              <h3 className="font-medium text-gray-700 mb-3">Common issues</h3>
              <div className="space-y-2">
                {(commonIssues[selectedDevice] || []).map((issue) => (
                  <button
                    key={issue}
                    onClick={() => handleIssueSelect(issue)}
                    className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                  >
                    {issue}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-3">Or describe the issue yourself</h3>
              <textarea
                placeholder="Describe the problem in detail..."
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                value={userDescription}
                onChange={(e) => setUserDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setUseAIDiagnosis(true)}
                className="flex items-center text-blue-600 font-medium"
              >
                <Wand2 className="w-5 h-5 mr-2" />
                Try AI Diagnosis
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!issueType && !userDescription}
                className={`px-6 py-3 rounded-lg font-medium ${issueType || userDescription ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Booking Details */}
        {step === 3 && (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
            <div className="flex items-center mb-6">
              <button onClick={() => setStep(2)} className="mr-4 text-gray-500 hover:text-blue-600">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <h2 className="text-2xl font-bold text-gray-800">Enter your details</h2>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setStep(4); }}>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={bookingDetails.name}
                    onChange={(e) => setBookingDetails({...bookingDetails, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={bookingDetails.email}
                    onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={bookingDetails.phone}
                    onChange={(e) => setBookingDetails({...bookingDetails, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Address</label>
                  <textarea
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    value={bookingDetails.address}
                    onChange={(e) => setBookingDetails({...bookingDetails, address: e.target.value})}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Preferred Time</label>
                  <select
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={bookingDetails.preferredTime}
                    onChange={(e) => setBookingDetails({...bookingDetails, preferredTime: e.target.value})}
                  >
                    <option value="ASAP">As soon as possible</option>
                    <option value="MORNING">Morning (9AM-12PM)</option>
                    <option value="AFTERNOON">Afternoon (12PM-4PM)</option>
                    <option value="EVENING">Evening (4PM-8PM)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <label className="block text-gray-700 mb-1">Promo Code (Optional)</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="p-3 border border-gray-200 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={applyPromoCode}
                      className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="text-green-600 text-sm mt-1">Promo code applied successfully!</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 4: Confirmation and Payment */}
        {step === 4 && (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center mb-6">
                <button onClick={() => setStep(3)} className="mr-4 text-gray-500 hover:text-blue-600">
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                <h2 className="text-2xl font-bold text-gray-800">Confirm your booking</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-medium text-gray-800 mb-2">Service Details</h3>
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">{selectedDevice} Repair</p>
                        <p className="text-sm text-gray-600">{issueType || 'Custom issue'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-medium text-gray-800 mb-2">Customer Details</h3>
                    <div className="space-y-2">
                      <p><span className="text-gray-600">Name:</span> {bookingDetails.name}</p>
                      <p><span className="text-gray-600">Phone:</span> {bookingDetails.phone}</p>
                      <p><span className="text-gray-600">Email:</span> {bookingDetails.email}</p>
                      <p><span className="text-gray-600">Address:</span> {bookingDetails.address}</p>
                      <p><span className="text-gray-600">Time:</span> {bookingDetails.preferredTime === 'ASAP' ? 'As soon as possible' : bookingDetails.preferredTime}</p>
                    </div>
                  </div>

                  {useAIDiagnosis && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                      <div className="flex items-start">
                        <Wand2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-blue-800 mb-1">AI Diagnosis Enabled</h3>
                          <p className="text-sm text-blue-700">Our technician will use AI-assisted tools to accurately diagnose your device issue.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="md:col-span-1">
                  <div className="bg-gray-50 p-4 rounded-lg sticky top-4">
                    <h3 className="font-medium text-gray-800 mb-3">Payment Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service Charge</span>
                        <span>₹499</span>
                      </div>
                      {appliedPromo && (
                        <div className="flex justify-between text-green-600">
                          <span>Promo Discount ({promoCodes.find(p => p.code === promoCode).discount}%)</span>
                          <span>-₹{basePrice * promoCodes.find(p => p.code === promoCode).discount / 100}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-medium">
                        <span>Total</span>
                        <span>₹{finalPrice}</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <ShieldCheck className="w-4 h-4 mr-2 text-green-500" />
                        <span>90-day warranty included</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        <span>10-minute average response time</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        <span>4.9/5 rated technicians</span>
                      </div>
                    </div>
                        
                    <button
                      onClick={handleBookingSubmit}
                      className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Confirm & Pay ₹{finalPrice}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


{step === 5 && (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-10 h-10 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Booking Confirmed!</h2>
      <p className="text-gray-600 mb-6">
        Your technician will arrive within 10 minutes. We've sent the details to {bookingDetails.email}.
      </p>
      {bookingResult?.bookingId && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="font-medium">Booking Reference: {bookingResult.bookingId}</p>
        </div>
      )}
      {bookingResult?.bookingId && (
        <Link href={`/order/${bookingResult.bookingId}`} className="block">
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
            Track Order
          </button>
        </Link>
      )}
    </div>
  )}    {/* Features Section */}
        {step !== 5 && (
          <div className="max-w-4xl mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
              <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Verified Experts</h3>
                <p className="text-sm text-gray-600">All technicians are background-checked and certified</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
              <Clock className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">10-Minute Response</h3>
                <p className="text-sm text-gray-600">Average technician arrival time in your area</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
              <Check className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">90-Day Warranty</h3>
                <p className="text-sm text-gray-600">On all parts and labor for your peace of mind</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}