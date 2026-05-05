'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '../components/ProductCard'
import PageHero from '../components/PageHero'
import products from '../lib/products'
import './page.scss'

export default function ProductsClient() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const categories = [...new Set(products.map((p) => p.category))]

  useEffect(() => {
    if (initialCategory && categories.includes(initialCategory)) {
      setSelectedCategory(initialCategory)
    } else {
      setSelectedCategory(null)
    }
  }, [initialCategory])

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products
    return products.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <main className="products-main">
      <PageHero
        page="Products"
        title={<>Safety Solution <span className="highlight">Products</span></>}
        subtitle="High-quality industrial safety equipment designed to protect workers in demanding environments — trusted globally."
      />

      <section className="products-section" id="products-grid">
        <div className="products-section__container">
          {/* Filter Section */}
          <div className="products-section__filter">
            <div className="filter-header">
              <h2>Browse by Category</h2>
              <div className="line"></div>
            </div>
            
            {/* Mobile Dropdown Filter */}
            <div className="products-section__filter-dropdown">
              <select 
                value={selectedCategory || ''} 
                onChange={(e) => setSelectedCategory(e.target.value === '' ? null : e.target.value)}
              >
                <option value="">All Products ({products.length})</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category} ({products.filter((p) => p.category === category).length})
                  </option>
                ))}
              </select>
              <i className="fas fa-chevron-down dropdown-icon"></i>
            </div>

            {/* Desktop Tabs Filter */}
            <div className="products-section__filter-tabs">
              <button
                className={`filter-tab ${!selectedCategory ? 'active' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                All Products
                <span className="count">{products.length}</span>
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  <span className="count">{products.filter((p) => p.category === category).length}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Header */}
          <div className="results-info">
            <p>Showing <strong>{filteredProducts.length}</strong> {selectedCategory || 'total'} products</p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-section__grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-section__no-products">
              <i className="fas fa-search"></i>
              <h3>No products found</h3>
              <p>Try selecting a different category or clear filters.</p>
              <button onClick={() => setSelectedCategory(null)} className="btn-clear">Clear All Filters</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
