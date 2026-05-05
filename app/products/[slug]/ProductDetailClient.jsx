'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import './page.scss'

export default function ProductDetailClient({ product, relatedProducts }) {
  const [activeTab, setActiveTab] = useState('highlights')

  return (
    <>
      <Header />
      <main className="product-page">
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/products">Products</Link>
            <i className="fas fa-chevron-right"></i>
            <span className="current">{product.name}</span>
          </nav>

          <div className="product-layout">
            {/* Left: Image Gallery */}
            <div className="product-gallery">
              <div className="main-image-container">
                <Image 
                  src={product.image} 
                  alt={`${product.name} - Certified Industrial Safety Equipment Unnati Enterprise`}
                  fill
                  priority
                  className="main-image"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="product-info">
              <div className="info-header">
                <span className="category-tag">{product.category}</span>
                <h1 className="product-title">{product.name}</h1>
                <div className="sku-badge">SKU: UE-{String(product.id).padStart(4, '0')}</div>
              </div>

              <div className="price-container">
                <span className="price-label">Price starting at</span>
                <span className="price-value">₹{product.price}</span>
                <span className="gst-label">Excl. GST</span>
              </div>

              <div className="short-desc">
                <p>{product.description}</p>
              </div>

              {/* Key Highlights Grid */}
              <div className="highlights-mini-grid">
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Certified Safety</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Durable Build</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-industry"></i>
                  <span>Industrial Grade</span>
                </div>
              </div>

              <div className="action-buttons">
                <Link href="/contact" className="btn-enquire">
                  <i className="fas fa-envelope"></i>
                  Enquire Now
                </Link>
                <button className="btn-download">
                  <i className="fas fa-file-pdf"></i>
                  Technical Sheet
                </button>
              </div>

              {/* Share Section */}
              <div className="share-section">
                <span className="share-label">Share this product:</span>
                <div className="share-buttons">
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent(`Check out this ${product.name} from Unnati Enterprise: https://unnatienterprise.com/products/${product.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="share-btn whatsapp"
                    title="Share on WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://unnatienterprise.com/products/${product.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="share-btn linkedin"
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(`https://unnatienterprise.com/products/${product.slug}`);
                      alert('Product link copied to clipboard!');
                    }}
                    className="share-btn copy"
                    title="Copy Link"
                  >
                    <i className="fas fa-link"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Details Tabs Section */}
          <div className="product-details-tabs">
            <div className="tab-headers">
              <button 
                className={activeTab === 'highlights' ? 'active' : ''} 
                onClick={() => setActiveTab('highlights')}
              >
                Key Highlights
              </button>
              <button 
                className={activeTab === 'specs' ? 'active' : ''} 
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
              <button 
                className={activeTab === 'compliance' ? 'active' : ''} 
                onClick={() => setActiveTab('compliance')}
              >
                Compliance
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'highlights' && (
                <div className="content-highlights animate-fade">
                  <ul className="feature-list">
                    <li><i className="fas fa-caret-right"></i> Engineered for high-risk industrial environments.</li>
                    <li><i className="fas fa-caret-right"></i> Ergonomic design for long-shift comfort.</li>
                    <li><i className="fas fa-caret-right"></i> Weather-resistant and chemical-neutral materials.</li>
                    <li><i className="fas fa-caret-right"></i> Reinforced stress points for enhanced longevity.</li>
                  </ul>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="content-specs animate-fade">
                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <td>Brand</td>
                        <td>Unnati Enterprise / Karam Equivalent</td>
                      </tr>
                      <tr>
                        <td>Material</td>
                        <td>High-Density Synthetic / Industrial Grade</td>
                      </tr>
                      <tr>
                        <td>Origin</td>
                        <td>Made in India</td>
                      </tr>
                      <tr>
                        <td>Warranty</td>
                        <td>Standard Manufacturing Warranty</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'compliance' && (
                <div className="content-compliance animate-fade">
                  <div className="compliance-grid">
                    <div className="compliance-card">
                      <i className="fas fa-certificate"></i>
                      <h4>ISI Certified</h4>
                      <p>Meets Indian Standard Institute requirements for safety gear.</p>
                    </div>
                    <div className="compliance-card">
                      <i className="fas fa-globe"></i>
                      <h4>CE Standards</h4>
                      <p>Compliant with basic European health and safety regulations.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="related-products">
              <div className="section-header">
                <h2>Similar <span className="highlight">Safety Gear</span></h2>
                <Link href="/products" className="view-all">View All Products <i className="fas fa-arrow-right"></i></Link>
              </div>
              <div className="products-grid">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
