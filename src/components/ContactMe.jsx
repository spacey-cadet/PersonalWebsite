'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import './ContactMe.css';

const ContactForm = () => {
  const router = useRouter()
  const host = process.env.HOST
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const sendDataToServer = () => {
    fetch(`https://chbng.com/.netlify/functions/contact-me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      router.push('/launched')
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  }

  const validateForm = (event) => {
    event.preventDefault();
    if (formData.name === '' || formData.email === '' || formData.message === '') {
      alert("All fields must be filled out");
      return false;
    }
    console.log("Form Validated", formData);
    sendDataToServer();
  }

  return (
    < section className="contact-container" id="contact-me">
      <div className="contact-card">
        <h2 className="contact-title">Contact me</h2>
        <form className="contact-form" onSubmit={validateForm}>
          <div className="input-container">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="contact-input"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name" className="input-label">Enter your full name</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="contact-input"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email" className="input-label">Enter your email</label>
          </div>
          <div className="input-container">
            <textarea
              name="message"
              placeholder="Enter your message"
              className="contact-textarea"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            />
            <label htmlFor="message" className="input-label">Enter your message</label>
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
