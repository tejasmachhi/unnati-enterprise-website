'use client'
import React, { useState, useEffect, useCallback } from 'react';
import './ProductRange.scss';

export default function ProductRange() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  const productCategories = [
    {
      category: 'Hand Protection',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/069/692/092/small/worker-safety-gear-putting-gloves-industrial-setting-preparing-for-work-safety-equipment-protective-clothing-factory-environment-safety-procedures-industrial-worker-work-attire-safety-gloves-free-photo.jpeg',
      description: 'Maximum dexterity and chemical resistance for every industrial application.',
      products: ['Cotton & Knitted Gloves', 'Nitrile & Chemical Gloves', 'Cut Resistant & Kevlar Gloves', 'Leather Gloves'],
      icon: 'fa-hands',
      color: '#3b82f6',
    },
    {
      category: 'Eye & Body Protection',
      image: 'https://www.healthscreenuk.co.uk/wp-content/uploads/2025/04/AdobeStock_1229471334-1024x576.jpeg.webp',
      description: 'Full-body shielding against splash, heat, and mechanical hazards.',
      products: ['Safety Goggles & Welding Goggles', 'PPE Kits', 'Boiler Suits & Aprons', 'Rainwear'],
      icon: 'fa-user-shield',
      color: '#8b5cf6',
    },
    {
      category: 'Road Safety',
      image: 'https://rahstaexpo.com/assets-home/blog/Road%20Safety%20Equipment%20%20Innovations%20and%20Best%20Practices%20for%20Safer%20Highways-%20image.jpg',
      description: 'High-visibility solutions to manage traffic and ensure site safety.',
      products: ['Reflective Jackets', 'Safety Cones & Road Bumps', 'Convex Mirrors', 'Solar Studs & Blinkers'],
      icon: 'fa-traffic-light',
      color: '#f59e0b',
    },
    {
      category: 'Fire Safety',
      image: 'https://safetyproductfinder.com/wp-content/uploads/2022/06/Fire-Safety-Equipment-3-reasons-why-businesses-should-choose-Quality-Than-Price.png',
      description: 'Advanced suppression and detection systems for rapid response.',
      products: ['Fire Extinguishers (ABC, CO₂)', 'Fire Buckets & Stands', 'Fire Blankets', 'Smoke Detectors'],
      icon: 'fa-fire-extinguisher',
      color: '#ef4444',
    },
    {
      category: 'Fall & Medical',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800',
      description: 'Critical rescue and height-safety gear compliant with global standards.',
      products: ['Safety Belts & Fall Arresters', 'Ear Plugs & Muffs', 'First Aid Kits', 'Life Buoy Jackets'],
      icon: 'fa-briefcase-medical',
      color: '#10b981',
    }
  ];

  const switchTab = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setActiveTab(index);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const nextTab = useCallback(() => {
    switchTab((activeTab + 1) % productCategories.length);
  }, [activeTab, productCategories.length, switchTab]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTab, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextTab]);

  const active = productCategories[activeTab];

  return (
    <section className="product-range" id="safety-solutions">
      <div className="pr-inner"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ── LEFT: Full-bleed image panel ── */}
        <div className="pr-visual">
          {productCategories.map((item, i) => (
            <div key={i} className={`pr-visual__slide ${activeTab === i ? 'active' : ''}`}>
              <img src={item.image} alt={item.category} />
              <div className="pr-visual__overlay" style={{ '--accent': item.color }}></div>
            </div>
          ))}

          {/* Floating product list */}
          <div className="pr-visual__card">
            <p className="pr-visual__card-label">
              <i className="fas fa-check-circle"></i> Included Products
            </p>
            <ul>
              {active.products.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Counter badge */}
          <div className="pr-visual__counter">
            <span className="current">{String(activeTab + 1).padStart(2, '0')}</span>
            <span className="sep">/</span>
            <span className="total">{String(productCategories.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* ── RIGHT: Content + Tabs ── */}
        <div className="pr-content">
          <div className="pr-header">
            <span className="pr-tag">
              <i className="fas fa-shield-halved"></i> Our Product Range
            </span>
            <h2>Safety Solution <span className="highlight">Products</span></h2>
            <p>
              High-quality industrial safety equipment designed to protect workers
              in demanding environments — trusted globally.
            </p>
          </div>

          <div className="pr-tabs">
            {productCategories.map((item, i) => (
              <button
                key={i}
                className={`pr-tab ${activeTab === i ? 'active' : ''}`}
                onClick={() => switchTab(i)}
                style={{ '--accent': item.color }}
              >
                <div className="pr-tab__left">
                  <span className="pr-tab__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="pr-tab__icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="pr-tab__text">
                    <h4>{item.category}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
                <i className="fas fa-arrow-right pr-tab__arrow"></i>
                {/* Progress bar */}
                <div className="pr-tab__progress">
                  <div className="pr-tab__progress-fill" style={{
                    animationDuration: '5s',
                    animationPlayState: activeTab === i && !isPaused ? 'running' : 'paused'
                  }}></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
