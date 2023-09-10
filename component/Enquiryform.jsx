'use client';

import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
    file: null, // For file attachment
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form Data:', formData);
    // Reset the form if needed
    setFormData({
      name: '',
      email: '',
      phone: '',
      requirements: '',
      file: null,
    });
  };

  return (
    <form className='enform' onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder='Name'
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder='Email'
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder='Phone '
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          placeholder='Write Requirements'
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          placeholder='Upload Files'
        />
      </div>
      <div>
        <button className='submit-button' type="submit">➤ Send</button>
      </div>
    </form>
  );
};

export default EnquiryForm;