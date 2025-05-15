// app/pricing/page.jsx
import Link from 'next/link';

const PricingPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">FixFast Pricing</h1>
        <p className="text-lg text-gray-600">Transparent pricing for all your repair needs</p>
      </header>

      {/* Service Packages */}
      <div className="bg-gray-50 p-8 rounded-lg mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pre-Order Service Packages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Package */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Basic Package</h3>
            <div className="text-3xl font-bold text-gray-800 mb-4">₹150</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>1 repair service</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Standard parts included</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>90-day warranty</span>
              </li>
            </ul>
            <Link 
              href="/book-now" 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded font-bold transition-colors"
            >
              Buy
            </Link>
          </div>

          {/* Premium Package */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-600 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded text-sm">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Package</h3>
            <div className="text-3xl font-bold text-gray-800 mb-4">₹350</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>2 free onsite-Inspection / Month</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Priority scheduling</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>120-day warranty</span>
              </li>
            </ul>
            <Link 
              href="/book-now" 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded font-bold transition-colors"
            >
              Buy
            </Link>
          </div>

          {/* Elite Package */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Elite Package</h3>
            <div className="text-3xl font-bold text-gray-800 mb-4">₹450</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>3 onsite Inspection / Month</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>free Replacement parts included upto 1000 Rs</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>VIP scheduling</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>180-day warranty</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>1 Free annual maintenance</span>
              </li>
            </ul>
            <Link 
              href="/book-now" 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded font-bold transition-colors"
            >
              Buy           </Link>
          </div>
        </div>
      </div>

      {/* How Pricing Works */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How Our Pricing Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Device Assessment</h3>
            <p className="text-gray-600">Our technicians first evaluate your device to determine the exact issue and required parts.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💵</div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Transparent Quote</h3>
            <p className="text-gray-600">You'll receive a fixed-price quote with no hidden fees before we begin any work.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🛠</div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Quality Repair</h3>
            <p className="text-gray-600">We use high-quality parts and provide warranty coverage for all repairs.</p>
          </div>
        </div>
      </div>

      {/* Common Repair Prices */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Common Repair Prices</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">Standard Price</th>
                <th className="p-3 text-left">Premium Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3">Smartphone Screen Replacement</td>
                <td className="p-3">₹99-₹199</td>
                <td className="p-3">₹149-₹299</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">Laptop Keyboard Repair</td>
                <td className="p-3">₹79-₹149</td>
                <td className="p-3">₹129-₹199</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">AC Unit Repair</td>
                <td className="p-3">₹129-₹249</td>
                <td className="p-3">₹199-₹349</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">Washing Machine Repair</td>
                <td className="p-3">₹89-₹179</td>
                <td className="p-3">₹139-₹229</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center mt-5 text-gray-500">*Prices may vary based on device model and parts availability</p>
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 py-6 text-gray-500">
        <p>© 2025 FixFast. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PricingPage;