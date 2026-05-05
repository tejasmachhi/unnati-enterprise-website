import '@fortawesome/fontawesome-free/css/all.min.css';
import { Analytics } from '@vercel/analytics/next';
import './globals.scss';

export const metadata = {
  metadataBase: new URL('https://unnatienterprise.com'),
  title: {
    default: 'Unnati Enterprise | Industrial Safety Equipment Supplier Ahmedabad',
    template: '%s | Unnati Enterprise'
  },
  description: 'Premium industrial safety equipment supplier in Ahmedabad. We provide ISI & CE certified PPE, fire safety gear, road safety products, and factory safety solutions across Gujarat.',
  keywords: [
    'industrial safety equipment Ahmedabad',
    'PPE supplier Gujarat',
    'safety helmet manufacturers',
    'industrial safety gloves bulk',
    'fire safety equipment Ahmedabad',
    'road safety products supplier',
    'Unnati Enterprise safety',
    'workplace safety gear India',
    'safety shoes wholesaler Ahmedabad',
    'industrial respiratory protection',
    'fall protection equipment Gujarat',
    'eye protection goggles supplier'
  ],
  authors: [{ name: 'Unnati Enterprise' }],
  creator: 'Unnati Enterprise',
  publisher: 'Unnati Enterprise',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Unnati Enterprise | Industrial Safety Excellence',
    description: 'Leading supplier of certified industrial safety equipment in Ahmedabad and Gujarat. Quality PPE for every industry.',
    url: 'https://unnatienterprise.com',
    siteName: 'Unnati Enterprise',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Unnati Enterprise Industrial Safety Equipment',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unnati Enterprise | Industrial Safety Equipment',
    description: 'Premium industrial safety equipment supplier in Ahmedabad. Certified PPE and safety solutions.',
    images: ['/images/og-image.jpg'],
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
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png' },
    ],
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  alternates: {
    canonical: 'https://unnatienterprise.com',
  },
};

// JSON-LD Schema for Local Business & Organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://unnatienterprise.com/#organization',
      'name': 'Unnati Enterprise',
      'url': 'https://unnatienterprise.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://unnatienterprise.com/images/logos/logo.png',
        'width': 512,
        'height': 512
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91 99797 38858',
        'contactType': 'sales',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi', 'gu']
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://unnatienterprise.com/#website',
      'url': 'https://unnatienterprise.com',
      'name': 'Unnati Enterprise',
      'publisher': { '@id': 'https://unnatienterprise.com/#organization' },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://unnatienterprise.com/products?search={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'LocalBusiness',
      'name': 'Unnati Enterprise',
      'image': 'https://unnatienterprise.com/images/logos/logo.png',
      'description': 'Leading supplier of industrial safety equipment, PPE, and fire safety products in Ahmedabad, Gujarat.',
      '@id': 'https://unnatienterprise.com/#localbusiness',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'D-412, Gokulam Apartment, Nr. Ujala Circle',
        'addressLocality': 'Ahmedabad',
        'addressRegion': 'Gujarat',
        'postalCode': '382210',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 22.9751,
        'longitude': 72.4937
      },
      'url': 'https://unnatienterprise.com',
      'telephone': '+91 99797 38858',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '10:00',
          'closes': '16:00'
        }
      ]
    }
  ]
};

import ChatBot from './components/ChatBot';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="color-scheme" content="only light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <ChatBot />
        <Analytics />
      </body>
    </html>
  );
}
