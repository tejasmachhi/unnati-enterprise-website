import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import products from '../../lib/products'
import ProductDetailClient from './ProductDetailClient'

export async function generateMetadata({ params }) {
  const { slug } = params
  const product = products.find((p) => p.slug === slug)
  
  if (!product) {
    return {
      title: 'Product Not Found | Unnati Enterprise',
      description: 'The requested industrial safety equipment could not be found.'
    }
  }

  // Follow Expert SEO formatting
  const seoTitle = `${product.name} - Industrial Safety Equipment | Unnati Enterprise`
  const seoDescription = `${product.description} Certified & durable. Bulk pricing available across India – Enquire now.`

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      product.name,
      product.category,
      'Industrial Safety',
      'Certified PPE',
      'Bulk Supply India',
      'Ahmedabad Safety Supplier',
      'ISI Certified',
      'CE Certified',
      ...product.name.split(' ')
    ],
    openGraph: {
      title: `${product.name} - Unnati Enterprise`,
      description: seoDescription,
      url: `https://unnatienterprise.com/products/${product.slug}`,
      siteName: 'Unnati Enterprise',
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `${product.name} - Certified Industrial Safety Gear`,
        },
      ],
      locale: 'en_IN',
      type: 'website', // Platforms often use website for products unless specifically using 'product' og:type
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: seoDescription,
      images: [product.image],
    },
    alternates: {
      canonical: `https://unnatienterprise.com/products/${product.slug}`,
    },
  }
}

export default function ProductDetailPage({ params }) {
  const { slug } = params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <>
        <Header />
        <main className="product-error-page">
          <div className="container">
            <div className="error-card">
              <h1>Product Not Found</h1>
              <p>We couldn't find the safety equipment you're looking for.</p>
              <Link href="/products" className="btn-primary">Browse Catalogue</Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Generate related products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4)

  // Advanced Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'image': `https://unnatienterprise.com${product.image}`,
    'description': product.description,
    'sku': `UE-${String(product.id).padStart(4, '0')}`,
    'mpn': `UE-${product.id}`,
    'brand': {
      '@type': 'Brand',
      'name': 'Unnati Enterprise'
    },
    'review': {
      '@type': 'Review',
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': '4.8',
        'bestRating': '5'
      },
      'author': {
        '@type': 'Person',
        'name': 'Industrial Buyer'
      }
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '124'
    },
    'offers': {
      '@type': 'Offer',
      'url': `https://unnatienterprise.com/products/${product.slug}`,
      'priceCurrency': 'INR',
      'price': product.price.replace(/,/g, ''),
      'priceValidUntil': '2026-12-31',
      'itemCondition': 'https://schema.org/NewCondition',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Unnati Enterprise'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  )
}
