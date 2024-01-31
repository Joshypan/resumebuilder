import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ formData, selectedTemplate }) => {
  return (
    <div>
      <h2>Preview:</h2>
      <p>Name: {formData.name}</p>
      {/* Display other resume sections based on the selected template */}
    </div>
  );
};

export default ResumePreview;
