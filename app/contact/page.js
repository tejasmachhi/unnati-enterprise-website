import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "./components/ContactForm";
import PageHero from "../components/PageHero";
import './page.scss';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Unnati Enterprise for premium industrial safety equipment in Ahmedabad. Contact us for bulk orders, safety audits, and expert consultation.',
  keywords: ['contact Unnati Enterprise', 'safety equipment supplier Ahmedabad contact', 'bulk safety gear enquiry India'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Unnati Enterprise | Industrial Safety Supplier',
    description: 'Connect with our safety experts to discuss your industrial requirements, bulk supply contracts, or site-specific safety audits.',
    url: '/contact',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Contact Unnati Enterprise' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Unnati Enterprise | Industrial Safety Supplier',
    description: 'Connect with our safety experts to discuss your industrial requirements, bulk supply contracts, or site-specific safety audits.',
    images: ['/images/og-image.jpg'],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageHero
        page="Contact"
        title={<>Enterprise Support & <span className="highlight">Consultation</span></>}
        subtitle="Connect with our safety experts to discuss your industrial requirements, bulk supply contracts, or site-specific safety audits."
      />
      <main className="contact-page">
        <section className="contact-content container">
          <aside className="contact-info">
            <h2 className="section-title">Contact Information</h2>

            <div className="info-block">
              <div className="info-icon office">
                <i className="fas fa-building"></i>
              </div>
              <div className="info-text">
                <h3>Corporate Office</h3>
                <p>
                  D-412, Gokulam Apartment
                  <br />
                  Nr. Ujala Circle
                  <br />
                  Ahmedabad – 382210
                  <br />
                  Gujarat, India
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon warehouse">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="info-text">
                <h3>Warehouse Location</h3>
                <p>
                  Ajanta Complex, behind Ujala Hotel
                  <br />
                  Ujala, Ahmedabad – 382210
                  <br />
                  Gujarat, India
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon email">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <a href="mailto:unnatienterprise44@gmail.com">
                  unnatienterprise44@gmail.com
                </a>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon phone">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <a href="tel:+919979738858">+91 99797 38858</a>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon hours">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-text">
                <h3>Business Hours</h3>
                <p>
                  Mon – Fri: 9:00 AM – 6:00 PM
                  <br />
                  Sat: 10:00 AM – 4:00 PM
                  <br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </aside>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
