'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import products from '../lib/products';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const categories = [...new Set(products.map((p) => p.category))];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logos/logo.png"
              alt="Unnati Enterprise"
              width={180}
              height={60}
              className="logo-img"
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-links">
            <Link href="/" className="navLink" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="navLink" onClick={() => setIsMenuOpen(false)}>About</Link>

            <div
              className={`nav-item-dropdown ${activeDropdown === 'products' ? 'dropdown-active' : ''}`}
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/products" className="navLink dropdown-toggle" onClick={() => setIsMenuOpen(false)}>
                Products <i className="fas fa-chevron-down"></i>
              </Link>
              <div className="dropdown-menu">
                <div className="dropdown-grid">
                  {categories.map((category) => {
                    const iconMap = {
                      'Head & Face Protection': 'fa-hard-hat',
                      'Hand Protection': 'fa-hands',
                      'Eye & Body Protection': 'fa-shield-halved',
                      'Road Safety Equipment': 'fa-road',
                      'Fire Safety Equipment': 'fa-fire-extinguisher',
                      'Safety Shoes & Gumboots': 'fa-shoe-prints'
                    };
                    const iconClass = iconMap[category] || 'fa-box';

                    return (
                      <Link
                        key={category}
                        href={`/products?category=${encodeURIComponent(category)}#products-grid`}
                        className="dropdown-item"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        <span className="category-link-content">
                          <i className={`fas ${iconClass}`}></i>
                          {category}
                        </span>
                      </Link>
                    );
                  })}
                  <Link href="/products#products-grid" className="dropdown-item view-all" onClick={() => setIsMenuOpen(false)}>
                    <span>View All Products</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/services" className="navLink" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/contact" className="navLink" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>

          <div className="nav-actions">
            <Link href="/contact" className="btn-quote" onClick={() => setIsMenuOpen(false)}>
              Contact Us <i className="fas fa-headset"></i>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
