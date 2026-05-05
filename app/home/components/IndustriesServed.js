'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './IndustriesServed.scss';

const industries = [
  {
    img: '/images/construction.png',
    title: 'Construction & Infrastructure',
    description: 'Rugged safety solutions for high-stakes construction and urban development projects.',
    icon: 'fa-helmet-safety',
  },
  {
    img: '/images/fireandsefty.png',
    title: 'Fire & Emergency Services',
    description: 'Reliable fire suppression and life-saving equipment for emergency responders.',
    icon: 'fa-fire-extinguisher',
  },
  {
    img: '/images/roadsafety.png',
    title: 'Road & Traffic Authorities',
    description: 'High-visibility traffic management and road safety products for safer highways.',
    icon: 'fa-traffic-light',
  },
  {
    img: '/images/Manufacturing.png',
    title: 'Manufacturing & Factories',
    description: 'Comprehensive personal protection gear for large-scale industrial manufacturing.',
    icon: 'fa-industry',
  },
  {
    img: '/images/Chemicalandpharmaceutical.png',
    title: 'Chemical & Pharma Plants',
    description: 'Specialized chemical-resistant PPE for sensitive laboratory and plant environments.',
    icon: 'fa-flask-vial',
  },
  {
    img: '/images/hospital.png',
    title: 'Hospitals & Medical',
    description: 'Sanitary and protective medical supplies for healthcare professionals and clinics.',
    icon: 'fa-hospital',
  },
  {
    img: '/images/warehouse.png',
    title: 'Warehouses & Logistics',
    description: 'Safety equipment designed for efficient material handling and storage safety.',
    icon: 'fa-warehouse',
  },
  {
    img: '/images/OilGasSites.png',
    title: 'Oil & Gas Sites',
    description: 'High-grade protective gear for extreme conditions in the energy sector.',
    icon: 'fa-oil-well',
  },
];

const IndustriesServed = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="industries-served" id="industries-served">
      <div className="section-bg-glow"></div>

      <div className="container">
        {/* Header with integrated navigation */}
        <div className="ind-top-row">
          <div className="ind-header-left">
            <span className="section-tag">
              <i className="fas fa-shield-halved"></i> Industries We Serve
            </span>
            <h2 className="section-title">
              Built for Every <span className="highlight">Industrial Sector</span>
            </h2>
            <p className="section-desc">
              Custom-tailored industrial safety solutions designed to meet the most
              stringent compliance standards and operational safety requirements.
            </p>
          </div>
          <div className="ind-header-right">
            <button className="ind-nav-btn ind-nav-prev" aria-label="Previous slide">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="ind-nav-btn ind-nav-next" aria-label="Next slide">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="industries-slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.05}
            loop={true}
            speed={600}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.ind-nav-prev',
              nextEl: '.ind-nav-next',
            }}
            breakpoints={{
              480: { slidesPerView: 1.3, spaceBetween: 16 },
              640: { slidesPerView: 1.8, spaceBetween: 18 },
              900: { slidesPerView: 2.5, spaceBetween: 22 },
              1200: { slidesPerView: 3.2, spaceBetween: 24 },
            }}
            onSwiper={setSwiperRef}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="industries-swiper"
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <article className="ind-slide-card">
                  {/* Background Image */}
                  <div className="ind-card-bg">
                    <img src={industry.img} alt={industry.title} loading="lazy" />
                    <div className="ind-card-overlay"></div>
                  </div>

                  {/* Content */}
                  <div className="ind-card-body">
                    <div className="ind-card-top">
                      <div className="ind-card-icon-wrap">
                        <i className={`fas ${industry.icon}`}></i>
                      </div>
                    </div>
                    <div className="ind-card-bottom-content">
                      <h3 className="ind-card-title">{industry.title}</h3>
                      <p className="ind-card-desc">{industry.description}</p>
                      <div className="ind-card-cta">
                        <span className="ind-explore-link">
                          Explore Solutions
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination dots below slider */}
          <div className="ind-pagination-row">
            <div className="ind-progress-track">
              {industries.map((_, i) => (
                <button
                  key={i}
                  className={`ind-dot ${activeIndex === i ? 'active' : ''}`}
                  onClick={() => swiperRef?.slideToLoop(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="ind-counter">
              {String(activeIndex + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
