import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Import all page components
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Route redirects for common variations */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/portfolio" element={<Navigate to="/projects" replace />} />
          <Route path="/work" element={<Navigate to="/projects" replace />} />
          
          {/* 404 error page - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
