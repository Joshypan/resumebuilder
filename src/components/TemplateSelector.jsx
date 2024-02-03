import React, { useState } from 'react';
import './TemplateSelector.css';
import Template1 from '../Template1';
import Template2 from '../Template2';

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  const renderTemplatePreview = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <Template1 />;
      case 'template2':
        return <Template2 />;
      // Add cases for additional templates if needed
      default:
        return null;
    }
  };

  return (
    <div>
      <label>Select Template:</label>
      <select onChange={handleTemplateChange}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
        {/* Add more template options */}
      </select>

      {/* Display the selected template preview */}
      {renderTemplatePreview()}
    </div>
  );
};

export default TemplateSelector;
