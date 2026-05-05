import React from 'react';
import './SafetyCompliance.scss';

const SafetyCompliance = () => {
  const compliancePoints = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Prevents workplace accidents and injuries',
      description: 'Proper safety equipment significantly reduces the risk of workplace incidents'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Ensures legal and safety compliance',
      description: 'Meet regulatory requirements and avoid penalties with certified equipment'
    },
    {
      icon: 'fas fa-clock',
      title: 'Reduces downtime and financial losses',
      description: 'Maintain operational continuity with effective safety measures'
    },
    {
      icon: 'fas fa-users',
      title: 'Protects workers, assets, and business reputation',
      description: 'Safeguard your most valuable resources and maintain trust'
    }
  ];

  return (
    <section className="safety-compliance">
      <div className="container">
        <div className="compliance-section">
          <div className="section-header">
            <h2 className="section-title">Why Safety Compliance Matters</h2>
            <p className="section-subtitle">
              Understanding the critical importance of workplace safety and regulatory compliance
            </p>
          </div>
          
          <div className="compliance-grid">
            {compliancePoints.map((point, index) => (
              <div className="compliance-card" key={index}>
                <div className="compliance-icon">
                  <i className={point.icon}></i>
                </div>
                <div className="compliance-content">
                  <h3 className="compliance-title">{point.title}</h3>
                  <p className="compliance-description">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCompliance;
