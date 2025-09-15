import React, { useState, useEffect } from 'react';
import useStore from '../../store/useStore';

/**
 * ContactForm Component - Professional Contact Form with Validation
 * 
 * Features:
 * - Form fields: name, email, subject, message
 * - Real-time form validation with error messages
 * - Loading state during form submission
 * - Success/error feedback to users
 * - Integrates with Zustand store for form state management
 * - Accessible form labels and ARIA attributes
 * - Responsive styling with Tailwind CSS
 * - Form submission handling with simulated API call
 * - Professional styling with focus states and animations
 * 
 * @returns {JSX.Element} ContactForm component
 */
const ContactForm = () => {
  const { isDarkMode } = useStore();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  /**
   * Validation rules for form fields
   */
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Name must be 2-50 characters and contain only letters and spaces'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    subject: {
      required: true,
      minLength: 5,
      maxLength: 100,
      message: 'Subject must be 5-100 characters long'
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
      message: 'Message must be 10-1000 characters long'
    }
  };

  /**
   * Validate a single field
   * @param {string} fieldName - Name of the field to validate
   * @param {string} value - Value to validate
   * @returns {string|null} Error message or null if valid
   */
  const validateField = (fieldName, value) => {
    const rules = validationRules[fieldName];
    if (!rules) return null;

    // Required validation
    if (rules.required && (!value || value.trim() === '')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }

    // Skip other validations if field is empty and not required
    if (!value || value.trim() === '') return null;

    // Length validations
    if (rules.minLength && value.length < rules.minLength) {
      return rules.message || `${fieldName} must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return rules.message || `${fieldName} must be no more than ${rules.maxLength} characters`;
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.message || `${fieldName} format is invalid`;
    }

    return null;
  };

  /**
   * Validate all form fields
   * @returns {Object} Object containing all validation errors
   */
  const validateForm = () => {
    const newErrors = {};
    
    Object.keys(formData).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    return newErrors;
  };

  /**
   * Handle input change with real-time validation
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }

    // Clear submit status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  /**
   * Handle field blur (when user leaves the field)
   * @param {Event} e - Blur event
   */
  const handleFieldBlur = (e) => {
    const { name, value } = e.target;
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate the field
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  /**
   * Simulate API call for form submission
   * @param {Object} data - Form data to submit
   * @returns {Promise} Promise that resolves/rejects based on simulation
   */
  const simulateAPICall = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demo purposes
        // In real implementation, this would be an actual API call
        const isSuccess = Math.random() > 0.2; // 80% success rate
        
        if (isSuccess) {
          resolve({
            success: true,
            message: 'Thank you for your message! I\'ll get back to you soon.',
            id: Date.now()
          });
        } else {
          reject({
            success: false,
            message: 'Sorry, there was an error sending your message. Please try again.',
            error: 'Network error'
          });
        }
      }, 2000); // 2 second delay to simulate network request
    });
  };

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate entire form
    const formErrors = validateForm();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    // Set errors
    setErrors(formErrors);

    // If there are errors, don't submit
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    // Start submission process
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await simulateAPICall(formData);
      
      // Success
      setSubmitStatus('success');
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset touched and errors
      setTouched({});
      setErrors({});
      
      console.log('Form submitted successfully:', response);
      
    } catch (error) {
      // Error
      setSubmitStatus('error');
      console.error('Form submission error:', error);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Get field error message
   * @param {string} fieldName - Name of the field
   * @returns {string|null} Error message or null
   */
  const getFieldError = (fieldName) => {
    return touched[fieldName] && errors[fieldName] ? errors[fieldName] : null;
  };

  /**
   * Check if field has error
   * @param {string} fieldName - Name of the field
   * @returns {boolean} True if field has error
   */
  const hasFieldError = (fieldName) => {
    return Boolean(getFieldError(fieldName));
  };

  /**
   * Get input field classes
   * @param {string} fieldName - Name of the field
   * @returns {string} CSS classes for input field
   */
  const getInputClasses = (fieldName) => {
    const baseClasses = `w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
      isDarkMode 
        ? 'bg-gray-800 text-white placeholder-gray-400' 
        : 'bg-white text-gray-900 placeholder-gray-500'
    }`;

    const errorClasses = hasFieldError(fieldName)
      ? isDarkMode
        ? 'border-red-500 focus:border-red-400 focus:ring-red-300'
        : 'border-red-500 focus:border-red-400 focus:ring-red-300'
      : isDarkMode
        ? 'border-gray-600 focus:border-blue-400 focus:ring-blue-300 hover:border-gray-500'
        : 'border-gray-300 focus:border-purple-400 focus:ring-purple-300 hover:border-gray-400';

    return `${baseClasses} ${errorClasses}`;
  };

  return (
    <div className={`max-w-2xl mx-auto transform transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      
      {/* Form Header */}
      <div className="text-center mb-8">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Get In <span className={`bg-gradient-to-r ${
            isDarkMode 
              ? 'from-blue-400 to-purple-400' 
              : 'from-purple-600 to-blue-600'
          } bg-clip-text text-transparent`}>Touch</span>
        </h2>
        
        <p className={`text-lg ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>
      </div>

      {/* Contact Form */}
      <form 
        onSubmit={handleSubmit}
        className={`rounded-2xl p-8 ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200 shadow-lg'
        }`}
        noValidate
      >
        
        {/* Success/Error Messages */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-lg border ${
            submitStatus === 'success'
              ? isDarkMode
                ? 'bg-green-900/50 border-green-500 text-green-300'
                : 'bg-green-50 border-green-200 text-green-700'
              : isDarkMode
                ? 'bg-red-900/50 border-red-500 text-red-300'
                : 'bg-red-50 border-red-200 text-red-700'
          } animate-fade-in`}>
            <div className="flex items-center gap-3">
              {submitStatus === 'success' ? (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span className="font-medium">
                {submitStatus === 'success' 
                  ? 'Message sent successfully!' 
                  : 'Error sending message'
                }
              </span>
            </div>
            <p className="mt-2 text-sm">
              {submitStatus === 'success'
                ? 'Thank you for your message! I\'ll get back to you within 24 hours.'
                : 'Sorry, there was an error sending your message. Please try again or contact me directly.'
              }
            </p>
          </div>
        )}

        {/* Form Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name"
              className={`block text-sm font-semibold mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="Enter your full name"
              className={getInputClasses('name')}
              aria-invalid={hasFieldError('name') ? 'true' : 'false'}
              aria-describedby={hasFieldError('name') ? 'name-error' : undefined}
              disabled={isSubmitting}
            />
            {hasFieldError('name') && (
              <p 
                id="name-error"
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {getFieldError('name')}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label 
              htmlFor="email"
              className={`block text-sm font-semibold mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="Enter your email address"
              className={getInputClasses('email')}
              aria-invalid={hasFieldError('email') ? 'true' : 'false'}
              aria-describedby={hasFieldError('email') ? 'email-error' : undefined}
              disabled={isSubmitting}
            />
            {hasFieldError('email') && (
              <p 
                id="email-error"
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {getFieldError('email')}
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="mb-6">
          <label 
            htmlFor="subject"
            className={`block text-sm font-semibold mb-2 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            onBlur={handleFieldBlur}
            placeholder="What's this about?"
            className={getInputClasses('subject')}
            aria-invalid={hasFieldError('subject') ? 'true' : 'false'}
            aria-describedby={hasFieldError('subject') ? 'subject-error' : undefined}
            disabled={isSubmitting}
          />
          {hasFieldError('subject') && (
            <p 
              id="subject-error"
              className="mt-2 text-sm text-red-500 flex items-center gap-1"
              role="alert"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {getFieldError('subject')}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-8">
          <label 
            htmlFor="message"
            className={`block text-sm font-semibold mb-2 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleFieldBlur}
            placeholder="Tell me about your project, timeline, budget, or any questions you have..."
            rows={6}
            className={getInputClasses('message')}
            aria-invalid={hasFieldError('message') ? 'true' : 'false'}
            aria-describedby={hasFieldError('message') ? 'message-error' : undefined}
            disabled={isSubmitting}
          />
          <div className="flex justify-between items-center mt-2">
            {hasFieldError('message') ? (
              <p 
                id="message-error"
                className="text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {getFieldError('message')}
              </p>
            ) : (
              <div></div>
            )}
            <span className={`text-sm ${
              formData.message.length > 900 
                ? 'text-red-500' 
                : isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {formData.message.length}/1000
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:transform-none disabled:opacity-70 disabled:cursor-not-allowed ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-300'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-300'
          } shadow-lg hover:shadow-xl`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Sending Message...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </span>
          )}
        </button>

        {/* Form Footer */}
        <p className={`text-center text-sm mt-6 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          I typically respond within 24 hours. All fields marked with * are required.
        </p>
      </form>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;