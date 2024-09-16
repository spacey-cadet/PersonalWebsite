import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact me</h2>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Enter your full name ..."
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Enter your email ..."
            className="contact-input"
          />
          <textarea
            placeholder="Enter your message ..."
            className="contact-textarea"
            rows={4}
          />
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
