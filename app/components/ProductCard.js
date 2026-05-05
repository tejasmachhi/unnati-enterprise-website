'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="modern-product-card">
      <div className="card-media">
        {/* Loading Spinner */}
        {imageLoading && (
          <div className="loader-overlay">
            <div className="spinner"></div>
          </div>
        )}

        {/* Product Image */}
        {imageError ? (
          <div className="product-img-fallback loaded">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="fallback-icon">
              <rect width="80" height="80" rx="8" fill="#f1f5f9"/>
              <path d="M40 20C29.0 20 20 29.0 20 40s9.0 20 20 20 20-9.0 20-20S51.0 20 40 20zm0 36c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm-2-10h4v4h-4v-4zm0-20h4v16h-4V26z" fill="#94a3b8"/>
            </svg>
            <span className="fallback-label">Image unavailable</span>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={`${product.name} - Industrial Safety Gear Unnati Enterprise`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`product-img ${imageLoading ? 'loading' : 'loaded'}`}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
            onLoad={() => setImageLoading(false)}
          />
        )}

        {/* Overlays */}
        <div className="media-overlay"></div>
        <span className="category-badge">
          <i className="fas fa-tag"></i>
          {product.category}
        </span>

        {/* Floating Share Button */}
        <a 
          href={`https://wa.me/?text=${encodeURIComponent(`Check out this ${product.name} from Unnati Enterprise: https://unnatienterprise.com/products/${product.slug}`)}`}
          target="_blank"
          rel="noreferrer"
          className="floating-share-btn"
          title="Share on WhatsApp"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <div className="card-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        
        <div className="card-footer-area">
          <div className="price-pill">
            <span className="label">Price starting at</span>
            <span className="value">₹{product.price}</span>
          </div>
          
          <Link href={`/products/${product.slug}`} className="view-details-btn">
            <span>Details</span>
            <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
