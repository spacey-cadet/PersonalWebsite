
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

 
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  const { name, message } = data;

  
  if (!name || !message) {
    return { statusCode: 400, body: "Missing name or message" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: 'New Form Submission',
      text: `Name: ${name}\nMessage: ${message}`
    });


    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" })
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error submitting form" })
    };
  }
};