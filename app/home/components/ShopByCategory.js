'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ShopByCategory.scss';

// Categories derived from products.js to ensure consistency
const categories = [
  { id: 1, name: 'Head & Face Protection', count: '12+ Products' },
  { id: 2, name: 'Hand Protection', count: '8+ Products' },
  { id: 3, name: 'Eye & Body Protection', count: '6+ Products' },
  { id: 4, name: 'Road Safety Equipment', count: '5+ Products' },
  { id: 5, name: 'Fire Safety Equipment', count: '5+ Products' },
  { id: 6, name: 'Safety Shoes & Gumboots', count: '5+ Products' },
];

const ShopByCategory = () => {
  return (
    <section className="shop-by-category" id="shop-by-category">
      <div className="container">
        <div className="section-header">
          <div className="header-left">
            <span className="subtitle">Explore Our Range</span>
            <h2 className="title">Shop By Category</h2>
          </div>
          <div className="slider-controls">
            <button className="slider-nav-btn prev-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider-nav-btn next-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="category-swiper"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={cat.id}>
              <div className="category-card">
                <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="card-content">
                  <h3 className="category-name">{cat.name}</h3>
                  <span className="product-count">{cat.count}</span>
                  <div className="card-footer">
                    <span className="explore-text">Explore Products</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
                <div className="card-hover-bg"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByCategory;
