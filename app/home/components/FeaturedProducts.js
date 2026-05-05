'use client';

import Link from 'next/link';
import products from '../../lib/products';
import ProductCard from '../../components/ProductCard';
import './FeaturedProducts.scss';

// Select first 6 products as featured
const FEATURED_PRODUCTS = products.slice(0, 6);

export default function FeaturedProducts() {
    return (
        <section className="featured-products">
            <div className="container">
                <div className="section-header-modern">
                    <h2 className="title">Featured <span className="highlight">Industrial Safety PPE</span></h2>
                    <p className="subtitle">
                        Explore our top-selling, certified safety gear. From heavy-duty helmets to specialized 
                        protective gloves, we supply premium equipment to Ahmedabad's leading industries.
                    </p>
                </div>

                <div className="products-grid-modern">
                    {FEATURED_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="collection-cta">
                    <Link href="/products" className="button primary large" style={{ display: 'inline-flex', padding: '16px 32px', borderRadius: '8px' }}>
                        Explore More Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
