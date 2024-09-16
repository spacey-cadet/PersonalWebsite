import React from 'react';
import { User } from 'lucide-react';
import "./Testimonials.css"

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h1>Testimonials</h1>
      <div className="testimonial-content">
        <blockquote>
          "I've Been Working With Casey Exclusively Since 2014 And It Has Been Great! He Works Fast And Consistently Delivers High-Quality Work. He Takes My Vision And Translates It Into A <span className="highlight">Professional Design</span> That Functions For My Business Goals. I've Really Appreciated How He's Always Focused On The Function Of The Piece As Well As The <span className="highlight">Visual Design</span>."
        </blockquote>
        
          <strong>Mustafa Rahman</strong>
          <span className="position">— CEO, Toogle</span>
        
      </div>
 
    </div>
  );
};

export default Testimonial