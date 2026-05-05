import Image from 'next/image';
import Link from 'next/link';
import './PageHero.scss';

/**
 * Shared hero for About, Products, Services, Contact pages.
 *
 * Props:
 *  - title      {string|ReactNode}  Main headline (supports JSX for <span>)
 *  - subtitle   {string}            Description line below the title
 *  - page       {string}            Current page label for breadcrumb (e.g. "About")
 */
export default function PageHero({ title, subtitle, page }) {
  return (
    <div className="page-hero">
      {/* Background image – same as Products page */}
      <div className="page-hero__bg">
        <Image
          src="/images/hero-product.png"
          alt="Page background"
          fill
          priority
          className="page-hero__img"
          style={{ objectFit: 'cover' }}
        />
        <div className="page-hero__overlay"></div>
        <div className="page-hero__glow"></div>
        <div className="page-hero__pattern"></div>
      </div>

      {/* Content */}
      <div className="page-hero__body">
        {/* Breadcrumb */}
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link href="/home" className="bc-link">
            <i className="fas fa-home"></i> Home
          </Link>
          <span className="bc-sep">
            <i className="fas fa-chevron-right"></i>
          </span>
          <span className="bc-current">{page}</span>
        </nav>

        {/* Headline */}
        <h1 className="page-hero__title">{title}</h1>

        {/* Subtitle */}
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}

        {/* Decorative line */}
        <div className="page-hero__line">
          <span></span>
          <i className="fas fa-shield-halved"></i>
          <span></span>
        </div>
      </div>
    </div>
  );
}
