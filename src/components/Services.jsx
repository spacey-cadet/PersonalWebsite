import React from 'react';
import './Services.css';

const Services = () => {
  const pricingOptions = [
    { 
      title: 'Landing Page + Dashboards', 
      price: '$129',
      services: ['Landing Pages', 'Dashboards']
    },
    { 
      title: 'Landing Page + Dashboard + APIs', 
      price: '$329',
      services: ['Landing Pages', 'Dashboards', 'APIs']
    },
    { 
      title: 'Landing Page + APIs', 
      price: '$229',
      services: ['Landing Pages', 'APIs']
    },
  ];

  return (
    <section className="services" id="services">
      <div class="night-sky-overlay"></div>
      <div className="container">
        <h2>My tailor-made web solutions</h2>
        <div className="pricing-cards">
          {pricingOptions.map((option, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <ul className="service-list">
                  {option.services.map((service, idx) => (
                    <li key={idx}>
                      <span className="star">★</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-pricing">
                <div className="price">{option.price}</div>
                <button className="get-started">Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;