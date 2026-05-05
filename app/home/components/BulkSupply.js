import React from 'react';
import './BulkSupply.scss';


const BulkSupply = () => {
  return (
    <section className="bulk-supply">
      <div className="container">
        <div className="bulk-content">
          <div className="bulk-text">
            <h2 className="bulk-title">Bulk Supply & Project Orders</h2>
            <p className="bulk-description">
              We specialize in large-scale safety equipment supply for industrial projects,
              government contracts, and institutional requirements.
            </p>

            <div className="bulk-features">
              <div className="bulk-feature">
                <i className="fas fa-industry"></i>
                <span>Factory & site safety supply</span>
              </div>
              <div className="bulk-feature">
                <i className="fas fa-hard-hat"></i>
                <span>Contractor & government orders</span>
              </div>
              <div className="bulk-feature">
                <i className="fas fa-calculator"></i>
                <span>Custom quantities & pricing</span>
              </div>
              <div className="bulk-feature">
                <i className="fas fa-shipping-fast"></i>
                <span>Quick delivery across Gujarat</span>
              </div>
            </div>


          </div>

          <div className="bulk-image">
            <div className="bulk-stats">
              <div className="bulk-stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Bulk Orders Delivered</span>
              </div>
              <div className="bulk-stat">
                <span className="stat-number">24-48</span>
                <span className="stat-label">Hours Delivery Time</span>
              </div>
              <div className="bulk-stat">
                <span className="stat-number">15%</span>
                <span className="stat-label">Bulk Discount</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default BulkSupply;
