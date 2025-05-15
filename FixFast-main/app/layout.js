import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SessionProvider from "@/components/SessionProvider";

import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'FixFast - On-Demand Electronics Repair Services',
    template: '%s | FixFast'
  },
  description: 'Book certified technicians for smartphone, laptop, and appliance repairs in minutes. 10-minute response time with 90-day warranty.',
  keywords: ['electronics repair', 'phone repair', 'laptop repair', 'appliance service', 'technician booking', 'fast repair'],
  openGraph: {
    title: 'FixFast - On-Demand Electronics Repair Services',
    description: 'Book certified technicians for smartphone, laptop, and appliance repairs in minutes.',
    url: '/',
    siteName: 'FixFast',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FixFast Repair Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FixFast - On-Demand Electronics Repair Services',
    description: 'Book certified technicians for smartphone, laptop, and appliance repairs in minutes.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} min-h-screen flex flex-col`}>
      <SessionProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        </SessionProvider>
        <script
  src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
  async
  defer
></script>
      </body>
    </html>
  );
}