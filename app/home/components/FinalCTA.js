import React from 'react';
import './FinalCTA.scss';

const FinalCTA = () => {
  return (
    <section className="premium-cta">
      <div className="cta-background-elements">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      
      <div className="container">
        <div className="cta-grid">
          
          <div className="cta-content-left">
            
            <h2 className="cta-title">
              Upgrade Your <br/>
              <span className="text-gradient">Workplace Safety</span> Today.
            </h2>
            
            <p className="cta-description">
              Get in touch with our safety experts to find the perfect solutions for your industry. 
              We provide comprehensive safety consultations and customized, scalable quotes for any business size.
            </p>
            
            <div className="cta-action-group">
              <a href="#contact" className="btn-modern btn-primary">
                <span>Contact Us Today</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="https://wa.me/919979738858" target="_blank" rel="noreferrer" className="btn-modern btn-whatsapp">
                <i className="fab fa-whatsapp"></i>
                <span>Quick WhatsApp Quote</span>
              </a>
            </div>
          </div>
          
          <div className="cta-content-right">
            <div className="contact-glass-card">
              <div className="card-header">
                <h3>Direct Contact Info</h3>
                <p>We typically respond within 15 minutes</p>
              </div>
              
              <div className="contact-list">
                <a href="tel:+919979738858" className="contact-item">
                  <div className="icon-wrapper">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-details">
                    <span className="label">Call Us Directly</span>
                    <span className="value">+91 99797 38858</span>
                  </div>
                </a>
                
                <a href="mailto:unnatienterprise44@gmail.com" className="contact-item">
                  <div className="icon-wrapper">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <span className="label">Email Our Team</span>
                    <span className="value">unnatienterprise44@gmail.com</span>
                  </div>
                </a>
                
                <div className="contact-item location">
                  <div className="icon-wrapper">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <span className="label">Visit Our Office</span>
                    <span className="value">D-412, Gokulam Apartment, Nr. Ujala Circle, Ahmedabad</span>
                  </div>
                </div>
              </div>
              
              <div className="card-footer-decoration">
                <div className="line"></div>
                <div className="line short"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
