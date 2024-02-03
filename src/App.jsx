import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ResumeForm from './components/ResumeForm';
import TemplateSelector from './components/TemplateSelector';
import ResumePreview from './components/ResumePreview';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  return (
    <div className="container mt-4"> {/* Bootstrap container class */}
      <h1 className="mb-4">Automated Resume Builder</h1> {/* Bootstrap margin class */}
      <div className="custom-content bg-light shadow p-4"> {/* Apply custom styles along with Bootstrap classes */}
        <ResumeForm formData={formData} setFormData={setFormData} />
        <TemplateSelector setSelectedTemplate={setSelectedTemplate} />
        <ResumePreview formData={formData} selectedTemplate={selectedTemplate} />
      </div>
    </div>
  );
};

export default App;
