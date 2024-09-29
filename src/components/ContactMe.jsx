'use client'
 
import React from 'react';
import { useRouter } from 'next/navigation'
import './ContactMe.css';

const ContactForm = () => {
  const router = useRouter()

  function validateForm(event) {
  event.preventDefault();


  let header = document.forms["contact-form"]["contact-input"].value;
  let message = document.forms["contact-form"]["contact-textarea"].value;
  if (x == "" || y=="") {
    alert("All fields must be filled out");
    return false;
  }
  sendDataToServer(header, message);
}
function sendDataToServer(header, message) {
  const formData = {
    name: header,
    message: message
  };

  fetch('/.netlify/functions/contact-me', {
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
    document.forms["contact-form"].reset();
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  });
}
  return (
    <div className="contact-container" >
      <div className="contact-card">
        <h2 className="contact-title">Contact me</h2>
        <form className="contact-form" onSubmit={validateForm}>
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
