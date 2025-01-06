"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact_Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const { name, phone, email, service, message } = formData;
    if (!name || !phone || !email || !service || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all fields!',
      });
      return;
    }

    // Format the WhatsApp message
    const whatsappMessage = `Hello, I am ${name}.
          Phone: ${phone}
          Email: ${email}
          Service: ${service}
          Message: ${message}`;

    // Open WhatsApp API link
    const whatsappURL = `https://wa.me/918091745349?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, '_blank');

    // Show success alert
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'We will contact you soon.',
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-data">
      <h3>Get in Touch</h3>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Phone No:</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Your Phone No."
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Services:</label>
            <select
              className="form-select"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option defaultValue>Select Services</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Message:</label>
            <textarea
              className="form-control"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write a Message"
              required
            ></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group-btn">
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact_Form;
