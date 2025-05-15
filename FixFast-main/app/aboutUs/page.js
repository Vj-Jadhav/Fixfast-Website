// app/about/page.jsx
import Link from 'next/link';
import StatsCard from '@/components/StatsCard';

const AboutPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Banner - Matches Homepage */}
      <div className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FixFast</h1>
          <p className="text-xl md:text-2xl mb-8">
            Fast, reliable repair services since 2020
          </p>
          <Link 
            href="/book-now" 
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 inline-block"
          >
            Book a Technician Now
          </Link>
        </div>
      </div>

      {/* Stats Section - Matches Homepage */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <StatsCard number="10K+" label="Repairs Completed" />
          <StatsCard number="4.9" label="Customer Rating" />
          <StatsCard number="98%" label="Success Rate" />
          <StatsCard number="10min" label="Avg. Response" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Our Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Story
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              FixFast was founded with a simple mission: to make appliance and electronics repairs as convenient as ordering food delivery. 
              Since our launch in 2025, we've grown to become the most trusted on-demand repair service, completing over 10,000 repairs 
              with a 98% success rate and maintaining a 4.9 customer rating.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose FixFast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-2xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Average technician response time of just 10 minutes</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-2xl mb-3">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">All our technicians are certified and background-checked</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-2xl mb-3">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">90-Day Warranty</h3>
              <p className="text-gray-600">All repairs come with our industry-leading warranty</p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Team
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The FixFast team consists of passionate professionals dedicated to changing the repair industry. From our customer service 
              representatives to our field technicians, every team member shares our commitment to quality, speed, and customer satisfaction.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/team" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section - Matches Homepage */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl mb-8">
            Our technicians are standing by to help you with all your repair needs.
          </p>
          <Link 
            href="/book-now" 
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 inline-block mx-2"
          >
            Book Now
          </Link>
          <Link 
            href="/contact" 
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 inline-block mx-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;