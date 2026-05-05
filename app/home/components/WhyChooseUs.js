import React from 'react';
import './WhyChooseUs.scss';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fa-certificate',
      title: 'Global Certifications',
      description: 'Our entire portfolio conforms to ISO, CE, ISI, and EN standards, ensuring maximum protection and legal compliance.'
    },
    {
      icon: 'fa-shield-check',
      title: 'Total Compliance',
      description: 'We help businesses mitigate risks and avoid penalties by providing 100% compliant safety solutions for every site.'
    },
    {
      icon: 'fa-truck-fast',
      title: 'Pan-India Logistics',
      description: 'Strategic distribution network ensures rapid deployment and timely delivery to major industrial hubs across India.'
    },
    {
      icon: 'fa-handshake',
      title: 'Strategic B2B Partner',
      description: 'We offer competitive bulk pricing and dedicated support, acting as a reliable partner for large-scale operations.'
    },
    {
      icon: 'fa-user-doctor',
      title: 'Expert Consultation',
      description: 'Our safety specialists provide professional guidance to help you select the right equipment for specific hazards.'
    },
    {
      icon: 'fa-screwdriver-wrench',
      title: 'Quality Assurance',
      description: 'Rigorous quality checks at every stage ensure that every piece of gear performs flawlessly in critical situations.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header-centered">
          <h2 className="title">Gujarat's Choice for <span className="highlight">Safety Excellence</span></h2>
          <p className="subtitle">
            Leading industrial groups choose Unnati Enterprise for our uncompromising quality, 
            certified protection standards, and rapid pan-India distribution.
          </p>
        </div>
        
        <div className="features-grid-modern">
          {features.map((feature, index) => (
            <div className="feature-card-modern" key={index}>
              <div className="card-inner">
                <div className="icon-box">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <div className="content">
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-desc">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

