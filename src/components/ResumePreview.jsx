import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ formData, selectedTemplate }) => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>{formData.name}</h1>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Address: {formData.address}</p>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <p>{formData.education}</p>
      </div>

      <div className="resume-section">
        <h2>Experience</h2>
        <p>{formData.experience}</p>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <p>{formData.skills}</p>
      </div>

      {/* Add more sections for additional resume information based on the selected template */}
    </div>
  );
};

export default ResumePreview;
