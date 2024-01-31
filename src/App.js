import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import TemplateSelector from './TemplateSelector';
import ResumePreview from './ResumePreview';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  return (
    <div>
      <h1>Automated Resume Builder</h1>
      <ResumeForm formData={formData} setFormData={setFormData} />
      <TemplateSelector setSelectedTemplate={setSelectedTemplate} />
      <ResumePreview formData={formData} selectedTemplate={selectedTemplate} />
    </div>
  );
};

export default App;
