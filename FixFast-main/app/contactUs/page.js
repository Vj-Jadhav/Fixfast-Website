// app/contact/page.js
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="font-sans max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12 text-center rounded-t-lg">
        <h1 className="text-4xl font-bold mb-2">Contact FixFast</h1>
        <p className="text-xl">We're here to help 7 days a week</p>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-b-lg">
        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 inline-block">
            Get in Touch
          </h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 inline-block">
            Contact Info
          </h2>
          <div className="mt-6 space-y-5">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                📞
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (800) 555-3499</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                ✉️
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">support@fixfast.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                🏢
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Headquarters</h3>
                <p className="text-gray-600">123 Tech Street<br />San Francisco, CA 94107</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 inline-block mt-10">
              Business Hours
            </h2>
            <div className="mt-4 bg-white p-5 rounded-lg shadow-sm">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="font-medium">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-700">Saturday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-700">Sunday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 mt-12 rounded-lg">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8">
            Our support team is available 24/7 for urgent repair requests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-now"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 inline-block"
            >
              Book Emergency Repair
            </Link>
            <Link
              href="/help-center"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 inline-block"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 py-6 text-gray-500">
        <p>© 2025 FixFast. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;