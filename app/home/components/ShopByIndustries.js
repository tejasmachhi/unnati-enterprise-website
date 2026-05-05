'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './ShopByIndustries.scss';

const industries = [
  { id: 1, name: 'Telecom', icon: 'fas fa-tower-broadcast' },
  { id: 2, name: 'Wind Mill & Solar', icon: 'fas fa-wind' },
  { id: 3, name: 'Transmission', icon: 'fas fa-bolt-lightning' },
  { id: 4, name: 'Oil & Gas/Petrochemical', icon: 'fas fa-oil-can' },
  { id: 5, name: 'Pharmaceuticals', icon: 'fas fa-flask-vial' },
  { id: 6, name: 'Automobile', icon: 'fas fa-car-side' },
  { id: 7, name: 'Food/Beverages & FMCG', icon: 'fas fa-basket-shopping' },
];

const ShopByIndustries = () => {
  return (
    <section className="shop-by-industries" id="shop-by-industries">
      <div className="container">
        <h2 className="section-title">Shop by Industries</h2>
        
        <div className="slider-wrapper">
          <button className="nav-btn prev-btn">
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 },
            }}
            className="industries-swiper"
          >
            {industries.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="industry-card">
                  <div className="icon-box">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="industry-name">{item.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="nav-btn next-btn">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopByIndustries;
