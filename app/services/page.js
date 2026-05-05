import Header from "../components/Header";
import Footer from "../components/Footer";
import FinalCTA from "../home/components/FinalCTA";
import PageHero from "../components/PageHero";
import './page.scss';

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive industrial safety services in Ahmedabad. We provide safety equipment supply, industrial consultation, site audits, and compliance training for businesses.',
  keywords: ['safety consultation Ahmedabad', 'industrial safety audit Gujarat', 'PPE supply services India', 'workplace safety training'],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Professional Safety Solutions & Consultation | Unnati Enterprise',
    description: 'Beyond supplying equipment, we provide the expertise, training, and support required to build a zero-incident workplace. Book an audit today.',
    url: '/services',
    images: [{ url: '/images/construction.png', width: 1200, height: 630, alt: 'Unnati Enterprise Safety Consultation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Safety Solutions & Consultation | Unnati Enterprise',
    description: 'Beyond supplying equipment, we provide the expertise, training, and support required to build a zero-incident workplace. Book an audit today.',
    images: ['/images/construction.png'],
  },
};

export default function Services() {
  const services = [
    {
      id: 1,
      icon: "fas fa-shield-halved",
      title: "Safety Equipment Supply",
      description: "Direct sourcing and supply of premium, certified PPE including hand protection, headgear, and specialized industrial safety apparel.",
      features: ["3M Certified Partner", "Bulk Supply Capability", "Fast Regional Delivery"],
      image: "/images/warehouse.png"
    },
    {
      id: 2,
      icon: "fas fa-clipboard-check",
      title: "Industrial Consultation",
      description: "On-site safety audits and equipment gap analysis to ensure your workforce is protected according to the latest industry standards.",
      features: ["Risk Assessment", "Compliance Audits", "Customized Safety Roadmaps"],
      image: "/images/construction.png"
    },
    {
      id: 3,
      icon: "fas fa-vial",
      title: "Rigorously Tested Solutions",
      description: "We don't just sell equipment; we provide peace of mind. Every product category undergoes strict quality checks and certifications.",
      features: ["CE/EN Standards", "ISO Compliance", "Third-party Validation"],
      image: "/images/Chemicalandpharmaceutical.png"
    },
    {
      id: 4,
      icon: "fas fa-chalkboard-user",
      title: "Training & Support",
      description: "Empowering your team with the knowledge to use safety equipment correctly through specialized workshops and ongoing support.",
      features: ["Usage Training", "Maintenance Tips", "Safety Workshops"],
      image: "/images/OilGasSites.png"
    },
    {
      id: 5,
      icon: "fas fa-tools",
      title: "Maintenance Services",
      description: "Comprehensive inspection and maintenance programs to extend the life of your safety assets and ensure they perform when needed.",
      features: ["Periodic Inspections", "Refurbishment", "Lifecycle Management"],
      image: "/images/fireandsefty.png"
    },
    {
      id: 6,
      icon: "fas fa-truck-fast",
      title: "Rapid Deployment",
      description: "Strategic logistics network across Gujarat and India ensuring your critical safety needs are met with minimal downtime.",
      features: ["Express Shipping", "Project-site Delivery", "Inventory Management"],
      image: "/images/roadsafety.png"
    },
  ];

  return (
    <>
      <Header />
      <main className="services-page">
        <PageHero
          page="Services"
          title={<>Comprehensive <span className="highlight">Safety Services</span></>}
          subtitle="Beyond supplying equipment, we provide the expertise, training, and support required to build a zero-incident workplace."
        />

        {/* Services Split Sections */}
        <section className="services-split-sections">
          <div className="container">
            <div className="section-header">
              <span className="tag">What We Do</span>
              <h2>Professional Safety Solutions</h2>
              <div className="line"></div>
            </div>
          </div>
          
          <div className="split-sections-container">
            {services.map((service, index) => (
              <div key={service.id} className={`split-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="split-image">
                  <div className="image-wrapper">
                    <img src={service.image} alt={service.title} />
                    <div className="image-overlay"></div>
                  </div>
                </div>
                <div className="split-content">
                  <div className="content-inner">
                    <div className="icon-box">
                      <i className={service.icon}></i>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul className="feature-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx}><i className="fas fa-check-circle"></i> {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Consultation Section ── */}
        <section className="consultation-section">
          <div className="cs-inner">

            {/* LEFT: Content */}
            <div className="cs-content">
              <span className="cs-tag">
                <i className="fas fa-shield-halved"></i> B2B Safety Consultation
              </span>
              <h2>
                Ready to Build a <span className="highlight">Zero-Incident</span> Workplace?
              </h2>
              <p>
                Whether you need to overhaul your industrial safety protocols or secure a bulk supply contract, our certified safety experts are ready to guide you through every step of compliance.
              </p>

              {/* Feature checks */}
              <ul className="cs-features">
                <li><i className="fas fa-check-circle"></i> On-site Safety Audits &amp; Risk Assessments</li>
                <li><i className="fas fa-check-circle"></i> Customized PPE Supply Contracts</li>
                <li><i className="fas fa-check-circle"></i> Compliance with CE / ISO / BIS Standards</li>
                <li><i className="fas fa-check-circle"></i> Pan-India Delivery &amp; Inventory Management</li>
              </ul>

              {/* CTAs */}
              <div className="cs-actions">
                <a href="/contact" className="cs-btn cs-btn--primary">
                  Book a Safety Audit <i className="fas fa-arrow-right"></i>
                </a>
                <a href="https://wa.me/919979738858" target="_blank" rel="noreferrer" className="cs-btn cs-btn--whatsapp">
                  <i className="fab fa-whatsapp"></i> Chat with Expert
                </a>
              </div>
            </div>

            {/* RIGHT: Image + Stats */}
            <div className="cs-visual">
              <div className="cs-visual__bg"></div>
              <div className="cs-visual__overlay"></div>

              {/* Stats grid over the image */}
              <div className="cs-stats">
                <div className="cs-stat">
                  <span className="cs-stat__num">10+</span>
                  <span className="cs-stat__lbl">Years of Excellence</span>
                </div>
                <div className="cs-stat">
                  <span className="cs-stat__num">2000+</span>
                  <span className="cs-stat__lbl">Enterprise Clients</span>
                </div>
                <div className="cs-stat">
                  <span className="cs-stat__num">500+</span>
                  <span className="cs-stat__lbl">Certified Products</span>
                </div>
                <div className="cs-stat">
                  <span className="cs-stat__num">100%</span>
                  <span className="cs-stat__lbl">Compliance Rate</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
