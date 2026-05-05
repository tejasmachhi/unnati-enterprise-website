'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './not-found.scss';

export default function NotFound() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for the background effect
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="not-found-page">
      <div className="hazard-stripe"></div>

      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}

      <div className="content-wrapper">
        <div className="illustration-wrapper">
          <img src="/images/products/404-error.png" alt="404 Page Not Found Illustration" className="storyset-illustration" />
        </div>

        <h1 className="title">Oops! Page Not Found</h1>
        <p className="message">
          We couldn't find the page you're looking for. It might have been moved, 
          renamed, or perhaps it never existed.
        </p>

        <div className="action-buttons">
          <Link href="/" className="btn btn--primary">
            <i className="fa-solid fa-house"></i>
            Go to Homepage
          </Link>
          <Link href="/products" className="btn btn--outline">
            <i className="fa-solid fa-helmet-safety"></i>
            Browse Safety Gear
          </Link>
        </div>
      </div>
    </main>
  );
}
