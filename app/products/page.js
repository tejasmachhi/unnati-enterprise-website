import { Suspense } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsClient from './ProductsClient'

export const metadata = {
  title: 'Safety Equipment Catalogue',
  description: 'Explore our extensive catalogue of industrial safety equipment. From PPE and fire safety to road safety and head protection, Unnati Enterprise provides certified gear in Ahmedabad.',
  keywords: ['safety equipment catalogue', 'PPE products Ahmedabad', 'industrial safety gear list', 'safety products Gujarat'],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Explore Our Safety Equipment Catalogue | Unnati Enterprise',
    description: 'Find premium, certified industrial safety equipment including PPE, fire safety, and head protection in Ahmedabad.',
    url: '/products',
    images: [{ url: '/images/hero-product.png', width: 1200, height: 630, alt: 'Unnati Enterprise Product Catalogue' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Our Safety Equipment Catalogue | Unnati Enterprise',
    description: 'Find premium, certified industrial safety equipment including PPE, fire safety, and head protection in Ahmedabad.',
    images: ['/images/hero-product.png'],
  },
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsClient />
      </Suspense>
      <Footer />
    </>
  )
}
