import Link from 'next/link';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Decorative top wave/gradient or border */}
      <div className="footer-gradient"></div>

      <div className="footer-top container">
        {/* Brand Info */}
        <div className="footer-col brand">
          <div className="brand-header">
            <Link href="/">
              <img src="/images/logos/logo.png" alt="Unnati Enterprise" className="footer-logo-img" />
            </Link>
          </div>
          <p className="tagline">
            Trusted Safety Equipment Supplier in Ahmedabad & Gujarat
          </p>
          <p className="desc">
            Complete range of certified PPE, industrial safety, road safety & fire safety equipment for all industries.
          </p>
          
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Product Categories */}
        <div className="footer-col">
          <h4 className="title">Product Range</h4>
          <ul className="links">
            <li><Link href="/products">Head & Face Protection</Link></li>
            <li><Link href="/products">Hand Protection</Link></li>
            <li><Link href="/products">Eye & Body Protection</Link></li>
            <li><Link href="/products">Road Safety Equipment</Link></li>
            <li><Link href="/products">Fire Safety Equipment</Link></li>
            <li><Link href="/products">Fall & Medical Safety</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h4 className="title">Quick Links</h4>
          <ul className="links">
            <li><Link href="/about">About Our Company</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/contact">Get a Quote</Link></li>
            <li><Link href="/products">All Products</Link></li>
            <li><a href="#industries">Industries We Serve</a></li>
            <li><Link href="/contact">Support Center</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-col contact-col">
          <h4 className="title">Contact Us</h4>
          <ul className="contact-list">
            <li>
              <div className="icon-box">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <strong>Office:</strong> D-412, Gokulam Apartment, Nr. Ujala Circle, Ahmedabad – 382210
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="contact-text">
                <strong>Warehouse:</strong> Ajanta Complex, behind Ujala Hotel, Ujala Ahmedabad 382210
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">
                <a href="tel:+919979738858">+91 99797 38858</a>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <a href="mailto:unnatienterprise44@gmail.com">unnatienterprise44@gmail.com</a>
              </div>
            </li>
            <li>
              <a href="https://wa.me/919979738858" target="_blank" rel="noopener noreferrer" className="whatsapp-footer-btn">
                <i className="fab fa-whatsapp"></i>
                <span>Chat on WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-flex">
            <p className="copyright">© 2026 Unnati Enterprise. All rights reserved.</p>
            <div className="bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
            <p className="dev-credit">Crafted for Industrial Safety Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
