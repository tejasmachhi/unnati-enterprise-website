import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import './page.scss';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Unnati Enterprise, a leading supplier of industrial safety equipment in Ahmedabad. Our mission is to provide certified PPE and safety solutions for a safer workplace.',
  keywords: ['about Unnati Enterprise', 'safety equipment supplier mission', 'industrial safety Ahmedabad company'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Defining Industrial Safety Standards | Unnati Enterprise',
    description: 'Learn about Unnati Enterprise, a leading supplier of industrial safety equipment in Ahmedabad. Our mission is to provide certified PPE and safety solutions.',
    url: '/about',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'About Unnati Enterprise' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defining Industrial Safety Standards | Unnati Enterprise',
    description: 'Learn about Unnati Enterprise, a leading supplier of industrial safety equipment in Ahmedabad. Our mission is to provide certified PPE and safety solutions.',
    images: ['/images/og-image.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          page="About"
          title={<>Defining Industrial <span className="highlight">Safety Standards</span></>}
          subtitle="Trusted Partner for Premium Protective Solutions Since 2025"
        />

        <section className="about-section">
          <div className="about-container">
            <div className="about-main-grid">
              <div className="about-text">
                <h2>Our Mission & Vision</h2>
                <p>
                  Founded in 2025, Unnati Enterprise has evolved into a premier supplier of high-performance industrial safety equipment. Based in Ahmedabad, we serve as a critical link in the safety chain for thousands of businesses across India.
                </p>
                <p>
                  Our mission is to eliminate workplace hazards through the provision of certified, world-class safety solutions. We believe that every worker deserves the highest level of protection, and every business deserves a partner committed to their zero-incident goals.
                </p>
              </div>
              <div className="about-stats-compact">
                <div className="stat-card">
                  <span className="num">10+</span>
                  <span className="txt">Years of Expertise</span>
                </div>
                <div className="stat-card">
                  <span className="num">2000+</span>
                  <span className="txt">Enterprise Clients</span>
                </div>
                <div className="stat-card">
                  <span className="num">500+</span>
                  <span className="txt">Certified Products</span>
                </div>
                <div className="stat-card">
                  <span className="num">100%</span>
                  <span className="txt">Compliance Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-values">
          <div className="about-container">
            <div className="section-header-centered">
              <h2>The Core Pillars of <span className="highlight">Our Service</span></h2>
              <p>Built on a foundation of integrity, quality, and uncompromising safety.</p>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <div className="icon-box"><i className="fas fa-certificate"></i></div>
                <h3>Uncompromising Quality</h3>
                <p>We source only from globally recognized manufacturers, ensuring every product meets international safety benchmarks.</p>
              </div>
              <div className="about-card">
                <div className="icon-box"><i className="fas fa-truck-fast"></i></div>
                <h3>Logistical Excellence</h3>
                <p>Our streamlined supply chain ensures that critical safety gear reaches your site exactly when needed, across India.</p>
              </div>
              <div className="about-card">
                <div className="icon-box"><i className="fas fa-handshake"></i></div>
                <h3>Client-Centricity</h3>
                <p>We build long-term partnerships through transparent pricing, expert consultation, and dedicated post-sale support.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
