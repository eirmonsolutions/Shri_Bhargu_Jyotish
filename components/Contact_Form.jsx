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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, service, message } = formData;

    if (!name || !phone || !email || !service || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all fields!',
      });
      return;
    }

    try {
      const response = await fetch('https://astrologer-jgs0.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'We will contact you soon.',
        });

        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorData.message || 'Failed to send message.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again later.',
      });
    }
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
              type="tel"
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
              <option value="Love Problem Solution">Love Problem Solution</option>
              <option value="One Side Love Solution">One Side Love Solution</option>
              <option value="Breakup Problem">Breakup Problem</option>
              <option value="Ex Love Back">Ex Love Back</option>
              <option value="Family Dispute">Family Dispute</option>
              <option value="Grah Kalesh">Grah Kalesh</option>
              <option value="Child Problem">Child Problem</option>
              <option value="Love Marriage">Love Marriage</option>
              <option value="Job Problem Solution">Job Problem Solution</option>
              <option value="Business Problem Solution">Business Problem Solution</option>
              <option value="Extra Marital Affair">Extra Marital Affair</option>
              <option value="Husband Wife Dispute">Husband Wife Dispute</option>
              <option value="Black Magic Removal">Black Magic Removal</option>
              <option value="Negative Energy Removal">Negative Energy Removal</option>
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
