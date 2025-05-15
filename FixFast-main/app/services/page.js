// app/services/page.jsx
import Link from 'next/link';
import Image from 'next/image';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'Smartphone Repairs',
      services: [
        'Screen replacement',
        'Battery replacement',
        'Water damage repair',
        'Charging port repair',
        'Software issues'
      ],
      icon: '/img/phone.jpeg'
    },
    {
      title: 'Laptop & Computer Repairs',
      services: [
        'Screen replacement',
        'Keyboard repair',
        'Virus removal',
        'Hardware upgrades',
        'Software installation'
      ],
      icon: '/img/laptop.jpeg'
    },
    {
      title: 'Home Appliance Repairs',
      services: [
        'AC repair & servicing',
        'Refrigerator repair',
        'Washing machine repair',
        'Microwave repair',
        'Television repair'
      ],
      icon: '/img/appliance.jpeg'
    },
    {
      title: 'Other Services',
      services: [
        'Smart home device setup',
        'Network troubleshooting',
        'Data recovery',
        'Device optimization',
        'Preventive maintenance'
      ],
      icon: '/img/other.jpeg'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Certified Technicians',
      description: 'All our technicians are certified and background-checked professionals.',
      icon: '/img/certificate.jpeg'
    },
    {
      title: '90-Day Warranty',
      description: 'All repairs come with a 90-day warranty for your peace of mind.',
      icon: '/img/warranty.jpeg'
    },
    {
      title: 'Fast Response',
      description: 'Average response time of just 10 minutes for urgent repairs.',
      icon: '/img/fast.jpeg'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees. Get upfront pricing before any work begins.',
      icon: '/img/trans.jpeg'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Repair Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Fast, reliable repairs for all your electronics and appliances with a 90-day warranty.
          </p>
          <Link href="/auth/login/" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 inline-block">
            Book a Technician Now
          </Link>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Can We Fix For You?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <Image 
                  src={category.icon} 
                  alt={category.title} 
                  width={40} 
                  height={40} 
                  className="mr-3"
                />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
              <Link href={`/book-now?service=${encodeURIComponent(category.title)}`} className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                Book this service →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Why Choose FixFast?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {whyChooseUs.map((item, index) => (
        <div key={index} className="text-center p-6">
          <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 overflow-hidden">
            <Image 
              src={item.icon} 
              alt={item.title}
              width={64}  // Container size (16 = 64px)
              height={64}
              className="object-cover p-2"  // Add padding if needed
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Book Your Service</h3>
            <p className="text-gray-600">Tell us what needs fixing and book a technician online or by phone.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Technician Arrives</h3>
            <p className="text-gray-600">Our certified technician arrives at your location within the scheduled time.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Get It Fixed</h3>
            <p className="text-gray-600">We fix it on the spot with a 90-day warranty on all repairs.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/how-it-works" className="text-blue-600 font-medium hover:underline">
            Learn more about our process →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our technicians are standing by to help you with all your repair needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book-now" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 inline-block">
              Book a Technician Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;