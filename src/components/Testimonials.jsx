import React from 'react';
import { User } from 'lucide-react';
import "./Testimonials.css"

const Testimonial = () => {
  return (
    <div className="testimonial-container" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-content">
        <blockquote>
          "I've Been Working With Theo for slighlty over a year And It Has Been Amaizing! He Works Fast And Delivers High-Quality Work. He Takes My Vision And Translates It Into A <span className="highlight">Professional Design</span> He makes my business his business and does his best to use his technical knowledge to achieve my  <span className="highlight">business goals</span>."
        </blockquote>
          <strong>Ben Kemboi</strong>
          <span className="position"> Founder and GIS Specialist, Ben Mappers Limited</span> 
      </div>
    </div>
  );
};

export default Testimonial