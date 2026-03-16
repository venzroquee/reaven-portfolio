import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TechStackPage from './TechStackPage' 
import ProjectsPage from './ProjectsPage'
import CertificationsPage from './CertificationsPage' // Import the new page
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)