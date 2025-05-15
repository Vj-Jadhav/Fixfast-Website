"use client"

import { Search, Wrench, ShieldCheck, Clock, Star, ChevronRight, Check, Smartphone, Laptop, AirVent } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const popularServices = [
    { 
      name: 'Smartphone Repair', 
      icon: <Smartphone className="w-8 h-8 text-blue-600" />, 
      issues: ['Screen replacement', 'Battery change', 'Water damage'],
      color: 'bg-blue-50'
    },
    { 
      name: 'Laptop Repair', 
      icon: <Laptop className="w-8 h-8 text-green-600" />, 
      issues: ['Keyboard replacement', 'Software issues', 'Overheating'],
      color: 'bg-green-50'
    },
    { 
      name: 'AC Service', 
      icon: <AirVent className="w-8 h-8 text-orange-600" />, 
      issues: ['Gas refill', 'Not cooling', 'Noise'],
      color: 'bg-orange-50'
    },
  ];

  const testimonials = [
    { 
      name: 'Rahul Sharma', 
      rating: 5, 
      comment: 'Technician arrived in just 8 minutes and fixed my phone on the spot!',
      location: 'Mumbai'
    },
    { 
      name: 'Priya Patel', 
      rating: 4, 
      comment: 'Great service at reasonable prices. Will definitely use again.',
      location: 'Delhi'
    },
    { 
      name: 'Vikram Singh', 
      rating: 5, 
      comment: 'The AI diagnosis was surprisingly accurate. Saved me money!',
      location: 'Bangalore'
    },
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Verified Technicians",
      description: "Background-checked and certified professionals"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "10-Minute Response",
      description: "Average technician arrival time in your area"
    },
    {
      icon: <Check className="w-6 h-6 text-blue-600" />,
      title: "90-Day Warranty",
      description: "On all parts and labor for your peace of mind"
    },
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "5-Star Service",
      description: "Rated 4.9/5 by thousands of customers"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-60 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get a Technician <span className="text-orange-400">in 10 Minutes</span>!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            On-demand repair services for all your electronics and appliances with a 90-day warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href='/Book'>
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
              Book a Technician Now
            </button>
            </a>
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              How It Works <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-5xl mx-auto border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex-grow relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="What's broken? E.g., 'iPhone screen crack', 'AC not cooling'"
                className="w-full p-4 pl-12 outline-none border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center w-full md:w-auto transition-all transform hover:scale-105 shadow-md">
              <Search className="mr-2" />
              Find Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">10K+</div>
            <div className="text-gray-600">Repairs Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">4.9★</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">10min</div>
            <div className="text-gray-600">Avg. Response</div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">How FixFast Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get your devices fixed in just 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Select Your Device</h3>
              <p className="text-gray-600 text-center">Choose from smartphones, laptops, appliances, and more</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Describe the Issue</h3>
              <p className="text-gray-600 text-center">Use our AI diagnosis or manually select the problem</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Get a Technician</h3>
              <p className="text-gray-600 text-center">Track your assigned expert in real-time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Popular Repair Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Fast, reliable solutions for your most common device issues</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <div key={index} className={`${service.color} p-6 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1`}>
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                </div>
                <ul className="space-y-2">
                  {service.issues.map((issue, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
                
                <a href='/Book'>
                  <button className="mt-6 text-blue-600 font-medium flex items-center group">
                  Book now <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
                </a>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">The FixFast Difference</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're redefining what it means to get repair service</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Trusted by Thousands</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear what our satisfied customers have to say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Download our app for faster bookings, real-time tracking, and exclusive offers</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black hover:bg-gray-900 px-8 py-4 rounded-xl font-medium flex items-center justify-center transition-all transform hover:scale-105 shadow-lg">
              <div className="text-left mr-3">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </button>
            <button className="bg-black hover:bg-gray-900 px-8 py-4 rounded-xl font-medium flex items-center justify-center transition-all transform hover:scale-105 shadow-lg">
              <div className="text-left mr-3">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.68.59 1.19s-.25.92-.59 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.32zm-7.94-2.23l-2.27 2.27-8.49-8.49 11.76 6.22z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}