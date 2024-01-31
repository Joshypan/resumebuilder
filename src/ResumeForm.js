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

      {/* Add more input fields for other resume sections */}
    </form>
  );
};

export default ResumeForm;
