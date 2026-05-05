import Image from 'next/image';
import './Hero3.scss';

export default function Hero3() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/main-hero.png"
            alt="Industrial Safety Background"
            fill
            priority
            className="hero-main-bg-img desktop-only"
            style={{ objectFit: 'cover' }}
          />
          <Image
            src="/images/mobile-hero.png"
            alt="Industrial Safety Background Mobile"
            fill
            priority
            className="hero-main-bg-img mobile-only"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay"></div>
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
          <div className="hero-pattern"></div>
        </div>

        <div className="container">
          <div className="hero-main">
            <div className="hero-content">
              <h1 className="hero-title">
                Certified <span className="highlight">Safety Equipment</span>
                <br />
                & PPE Supplier in Ahmedabad
              </h1>

              <p className="hero-description">
                Unnati Enterprise is Gujarat's trusted partner for high-performance industrial safety equipment. 
                We provide a comprehensive range of ISI & CE certified PPE, fire safety systems, and road safety 
                solutions designed for maximum protection in factories, construction sites, and warehouses.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn-modern btn-primary">
                  <i className="fas fa-file-invoice"></i>
                  <span>Get Expert Quote</span>
                </a>
                <a href="https://wa.me/919979738858" target="_blank" rel="noreferrer" className="btn-modern btn-whatsapp">
                  <i className="fab fa-whatsapp"></i>
                  <span>Chat with Experts</span>
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <div className="trust-icon"><i className="fas fa-users"></i></div>
                  <div className="trust-text">
                    <span className="stat">500+</span>
                    <span className="label">Trusted Clients</span>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="trust-item">
                  <div className="trust-icon"><i className="fas fa-shield-check"></i></div>
                  <div className="trust-text">
                    <span className="stat">1000+</span>
                    <span className="label">Certified Safety Gear</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BAR IS NOW OUTSIDE THE HERO SECTION */}
      <div className="hero-footer-bar">
        <div className="container">
          <div className="footer-bar-inner">
            <div className="feature-bar-item">
              <i className="fas fa-certificate"></i>
              <div className="text">
                <h4>ISI & CE Certified</h4>
                <p>Maximum protection standards</p>
              </div>
            </div>
            <div className="feature-bar-item">
              <i className="fas fa-truck-fast"></i>
              <div className="text">
                <h4>Swift Delivery</h4>
                <p>Across major industrial hubs</p>
              </div>
            </div>
            <div className="feature-bar-item">
              <i className="fas fa-user-doctor"></i>
              <div className="text">
                <h4>Expert Consultation</h4>
                <p>Choosing the right gear</p>
              </div>
            </div>
            <div className="feature-bar-item">
              <i className="fas fa-tags"></i>
              <div className="text">
                <h4>B2B Pricing</h4>
                <p>Competitive bulk rates</p>
              </div>
            </div>
            <div className="feature-bar-item">
              <i className="fas fa-handshake"></i>
              <div className="text">
                <h4>Trusted Industry-wide</h4>
                <p>Committed to workforce safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
