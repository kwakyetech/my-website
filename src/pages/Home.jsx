import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';

/**
 * Home Page Component - Portfolio Landing Page
 * 
 * Features:
 * - Hero section with animated text introduction
 * - Professional tagline and brief description
 * - Call-to-action buttons for Projects and Contact
 * - Responsive design with Tailwind CSS
 * - Theme support via Zustand store
 * - Scroll-triggered animations
 * - Modern gradient backgrounds
 * 
 * @returns {JSX.Element} Home page component
 */
const Home = () => {
  const { isDarkMode, setActiveSection } = useStore();
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  // Animated text options
  const animatedTexts = [
    "Full-Stack Developer",
    "UI/UX Designer", 
    "Problem Solver",
    "Creative Thinker"
  ];

  // Set active section on mount
  useEffect(() => {
    setActiveSection('home');
    setIsVisible(true);
  }, [setActiveSection]);

  // Animated text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
          isDarkMode ? 'bg-blue-500' : 'bg-purple-400'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 animate-pulse delay-1000 ${
          isDarkMode ? 'bg-purple-500' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 animate-spin-slow ${
          isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-purple-300 to-blue-300'
        }`}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Hero Section */}
          <div className="space-y-8">
            
            {/* Greeting */}
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              isDarkMode 
                ? 'bg-gray-800 text-blue-400 border border-gray-700' 
                : 'bg-white text-purple-600 border border-purple-200 shadow-lg'
            } animate-fade-in-up`}>
              👋 Hello, I'm
            </div>

            {/* Name */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            } animate-fade-in-up animation-delay-200`}>
              <span className="block">Prince Kwakye Ofori</span>
              <span className={`block bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-blue-400 to-purple-400' 
                  : 'from-purple-600 to-blue-600'
              } bg-clip-text text-transparent animate-gradient`}>
                {animatedTexts[textIndex]}
              </span>
            </h1>

            {/* Professional Tagline */}
            <p className={`text-xl sm:text-2xl font-light max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in-up animation-delay-400`}>
              Crafting digital experiences with modern technologies and creative solutions. 
              Passionate about building user-friendly applications that make a difference.
            </p>

            {/* Brief Description */}
            <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } animate-fade-in-up animation-delay-600`}>
              Specializing in React, Node.js, and modern web technologies. 
              I love turning complex problems into simple, beautiful designs.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up animation-delay-800">
              
              {/* View Projects Button */}
              <Link
                to="/projects"
                className={`group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                } focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 inline-block text-center`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Projects
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              {/* Get In Touch Button */}
              <Link
                to="/contact"
                className={`group px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode
                    ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50'
                } focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 inline-block text-center`}
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-16 animate-fade-in-up animation-delay-1000">
              <div className={`inline-flex flex-col items-center gap-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <span className="text-sm font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-current rounded-full animate-bounce mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;