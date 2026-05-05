'use client';

import './BrandsWeDealIn.scss';

const BRANDS = [
  {
    name: '3M',
    logo: '/images/brands/3m.svg',
    url: 'https://www.3m.co.in',
  },
  {
    name: 'Karam',
    logo: '/images/brands/karam.svg',
    url: 'https://www.kfrmindia.com',
  },
  {
    name: 'Venus',
    logo: '/images/brands/venus.svg',
    url: 'https://www.venussafety.in',
  },
  {
    name: 'Udyogi',
    logo: '/images/brands/udyogi.svg',
    url: 'https://udyogi.com',
  },
  {
    name: 'L&T SuFin',
    logo: '/images/brands/lnt-sufin.svg',
    url: 'https://www.lntsufin.com',
  },
];

export default function BrandsWeDealIn() {
  // Duplicate list for seamless infinite scroll
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <div className="brands-header">
          <h2 className="title">
            Brands We <span className="highlight">Deal In</span>
          </h2>
          <p className="subtitle">
            We are authorized distributors of India's most trusted safety and
            industrial equipment manufacturers.
          </p>
        </div>

        {/* Marquee track — duplicated children for infinite loop */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeItems.map((brand, i) => (
              <a
                key={`${brand.name}-${i}`}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-card"
                aria-label={brand.name}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  onError={(e) => {
                    // If image fails, show text fallback
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="brand-fallback">{brand.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
