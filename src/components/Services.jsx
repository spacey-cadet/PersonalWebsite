import React from 'react';
import './Services.css';

const Services = () => {
const pricingOptions = [
  {
    title: 'Startup Essentials',
    price: '$199/month',
    services: [
      'Landing Page',
      'Basic Dashboard',
      'Email Setup & Configuration',
      'Domain Registration & Management',
      'Basic SEO Optimization'
    ]
  },
  {
    title: 'Growth Package',
    price: '$399/month',
    services: [
      'Landing Page + 3 Additional Pages',
      'Advanced Dashboard',
      'Basic APIs',
      'Email Marketing Tools',
      'Social Media Integration',
      'Analytics Setup',
      'Basic Security Suite',
      'Cloud Storage (50GB)'
    ]
  },
  {
    title: 'Custom Package',
    price: 'Custom Pricing',
    services: [
      'All Growth Package Features',
      'Custom Feature Development',
      'Scalable Infrastructure',
      'AI & Machine Learning Integration',
      'Dedicated Account Manager',
      'Priority Support',
      'Unlimited Cloud Storage'
    ]
  }
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
                <h6>{option.title}</h6>
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