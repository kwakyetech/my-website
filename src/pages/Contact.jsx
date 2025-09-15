import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import ContactForm from '../components/forms/ContactForm';

/**
 * Contact Page Component - Comprehensive Contact Page
 * 
 * Features:
 * - Integrates ContactForm component for message submission
 * - Contact information section with email, phone, location
 * - Social media links with hover effects
 * - Map placeholder and contact hours
 * - Two-column responsive layout
 * - Professional spacing and typography
 * - Call-to-action encouraging visitors to reach out
 * - Full integration with site theme and styling
 * - Animations and interactive elements
 * 
 * @returns {JSX.Element} Contact page component
 */
const Contact = () => {
  const { isDarkMode } = useStore();
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  /**
   * Contact information data
   */
  const contactInfo = {
    email: 'hello@yourname.dev',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    timezone: 'PST (UTC-8)',
    availability: 'Monday - Friday, 9:00 AM - 6:00 PM'
  };

  /**
   * Social media links data
   */
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'hover:text-blue-400 dark:hover:text-blue-300'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'hover:text-pink-500 dark:hover:text-pink-400'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.34c.77 1.423 1.216 3.058 1.216 4.792 0 .266-.01.53-.03.792-.146-.03-.296-.062-.448-.094-3.4-.72-6.87-.6-10.202.36-.397-1.02-.83-2.048-1.29-3.06 1.734-.76 3.59-1.194 5.186-1.194 2.12 0 4.165.69 5.568 1.404zm-1.568 9.072c-2.054 1.465-4.544 2.334-7.2 2.334-1.42 0-2.77-.26-4.01-.73.36-2.71 1.94-5.04 4.28-6.38 1.24-.71 2.64-1.1 4.1-1.1.75 0 1.49.09 2.21.26-.09.36-.19.72-.3 1.08-.49 1.6-1.27 3.08-2.38 4.32 1.135.69 2.365 1.07 3.635 1.07.265 0 .525-.015.785-.045-.09.36-.19.71-.3 1.06-.49 1.6-1.27 3.08-2.38 4.32z"/>
        </svg>
      ),
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    }
  ];

  /**
   * Contact methods data
   */
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: contactInfo.email,
      description: 'Send me an email anytime',
      action: `mailto:${contactInfo.email}`,
      color: 'text-blue-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: contactInfo.phone,
      description: 'Call me during business hours',
      action: `tel:${contactInfo.phone}`,
      color: 'text-green-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: contactInfo.location,
      description: 'Based in the Bay Area',
      action: null,
      color: 'text-purple-500'
    }
  ];

  return (
    <div className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Work{' '}
            <span className={`bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 to-purple-400' 
                : 'from-purple-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              Together
            </span>
          </h1>
          
          <p className={`text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Contact Form */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <ContactForm />
          </div>

          {/* Right Column - Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Contact Methods */}
            <div className={`rounded-2xl p-8 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={method.title} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg ${method.color} ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-lg mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {method.title}
                      </h4>
                      {method.action ? (
                        <a
                          href={method.action}
                          className={`text-lg font-medium transition-colors duration-300 ${
                            isDarkMode 
                              ? 'text-blue-400 hover:text-blue-300' 
                              : 'text-purple-600 hover:text-purple-700'
                          }`}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className={`text-lg font-medium ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {method.value}
                        </span>
                      )}
                      <p className={`text-sm mt-1 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className={`rounded-2xl p-8 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Availability
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Business Hours
                  </span>
                  <span className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {contactInfo.availability}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Timezone
                  </span>
                  <span className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {contactInfo.timezone}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Response Time
                  </span>
                  <span className="text-sm text-green-500 font-medium">
                    Usually within 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className={`rounded-2xl p-8 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-400' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                    } ${social.color}`}
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    {social.icon}
                    <span className="text-xs mt-2 font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
              
              <p className={`text-sm mt-6 text-center ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Follow me for updates on my latest projects and insights
              </p>
            </div>

            {/* Map Placeholder */}
            <div className={`rounded-2xl p-8 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
                Location
              </h3>
              
              {/* Map Placeholder */}
              <div className={`relative h-48 rounded-lg overflow-hidden ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className={`w-12 h-12 mx-auto mb-3 ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-400'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className={`text-lg font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {contactInfo.location}
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className={`rounded-2xl p-12 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600' 
              : 'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200'
          }`}>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Start Your Project?
            </h2>
            
            <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Whether you have a clear vision or just an idea, I'm here to help you bring it to life. 
              Let's discuss your project and create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Project Inquiry`}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-300'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-300'
                } shadow-lg hover:shadow-xl`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Start a Conversation
              </a>
              
              <a
                href={`tel:${contactInfo.phone}`}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                  isDarkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500 border border-gray-600'
                    : 'bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-300 border border-gray-300'
                } shadow-lg hover:shadow-xl`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;