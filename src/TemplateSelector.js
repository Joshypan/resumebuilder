import React from 'react';
import './TemplateSelector.css'

const TemplateSelector = ({ setSelectedTemplate }) => {
  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  return (
    <div>
      <label>Select Template:</label>
      <select onChange={handleTemplateChange}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
        {/* Add more template options */}
      </select>
    </div>
  );
};

export default TemplateSelector;
