import React from 'react';
import './ResumeForm.css';

const ResumeForm = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleInputChange} />

      <label>Email:</label>
      <input type="email" name="email" onChange={handleInputChange} />

      <label>Phone:</label>
      <input type="tel" name="phone" onChange={handleInputChange} />

      <label>Address:</label>
      <input type="text" name="address" onChange={handleInputChange} />

      <label>Education:</label>
      <input type="text" name="education" onChange={handleInputChange} />

      <label>Experience:</label>
      <textarea name="experience" onChange={handleInputChange}></textarea>

      <label>Skills:</label>
      <input type="text" name="skills" onChange={handleInputChange} />

      {/* Add more input fields for additional resume sections as needed */}
    </form>
  );
};

export default ResumeForm;
