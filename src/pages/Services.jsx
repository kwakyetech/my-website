import React, { useEffect, useState } from 'react';
import useStore from '../store/useStore';
import { services, pricingTiers, serviceCategories, serviceTestimonials } from '../data/servicesData';

/**
 * Services Page Component - Web Development Services Showcase
 * 
 * Features:
 * - Service cards with icons, descriptions, and technologies
 * - Pricing tiers and packages
 * - Category filtering for services
 * - Call-to-action buttons leading to contact
 * - Responsive card grid layout
 * - Hover animations and interactive elements
 * - Professional color scheme with theme integration
 * - Testimonials section
 * - FAQ section for common questions
 * 
 * @returns {JSX.Element} Services page component
 */
const Services = () => {
  const { isDarkMode, setActiveSection } = useStore();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredServices, setFilteredServices] = useState(services);
  const [selectedPricing, setSelectedPricing] = useState(null);

  // Set active section on mount
  useEffect(() => {
    setActiveSection('services');
    setIsVisible(true);
  }, [setActiveSection]);

  // Filter services by category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  /**
   * Get service icon component
   * @param {string} iconType - Type of icon to render
   * @returns {JSX.Element} Icon component
   */
  const getServiceIcon = (iconType) => {
    const iconClass = `w-12 h-12 ${isDarkMode ? 'text-blue-400' : 'text-purple-600'}`;
    
    switch (iconType) {
      case 'frontend':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'backend':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case 'fullstack':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'optimization':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'ecommerce':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case 'api':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
    }
  };

  /**
   * Handle contact button click
   */
  const handleContactClick = (serviceName) => {
    // In a real application, this would navigate to contact form or open modal
    alert(`Contact form for ${serviceName} - This would open a contact form or navigate to contact page.`);
  };

  /**
   * Handle get quote button click
   */
  const handleGetQuote = (serviceId) => {
    // In a real application, this would open a quote form or navigate to quote page
    const service = services.find(s => s.id === serviceId);
    alert(`Get Quote for ${service.title} - This would open a quote form with pre-filled service details.`);
  };

  return (
    <div className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`}>
      
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className={`bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 to-purple-400' 
                : 'from-purple-600 to-blue-600'
            } bg-clip-text text-transparent`}>Services</span>
          </h1>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional web development services to bring your digital vision to life. 
            From concept to deployment, I deliver high-quality solutions tailored to your needs.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? isDarkMode
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-700 hover:border-blue-500' 
                    : 'bg-white border border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Icon */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30' 
                    : 'bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {getServiceIcon(service.icon)}
                </div>

                {/* Service Content */}
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>

                <p className={`text-base mb-6 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDarkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode ? 'text-blue-400' : 'text-purple-600'
                      }`}>
                        +{service.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing and CTA */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Starting at
                    </span>
                    <div className={`text-2xl font-bold ${
                      isDarkMode ? 'text-blue-400' : 'text-purple-600'
                    }`}>
                      ${service.startingPrice.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Delivery
                    </span>
                    <div className={`text-sm font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {service.deliveryTime}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleGetQuote(service.id)}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-300'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-300'
                    } shadow-lg hover:shadow-xl`}
                  >
                    Get Quote
                  </button>
                  <button
                    onClick={() => handleContactClick(service.title)}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                      isDarkMode
                        ? 'border border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-300'
                        : 'border border-gray-300 text-gray-600 hover:bg-gray-50 focus:ring-gray-300'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Pricing <span className={`bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-blue-400 to-purple-400' 
                  : 'from-purple-600 to-blue-600'
              } bg-clip-text text-transparent`}>Packages</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Choose the perfect package for your project needs. All packages include professional development and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 ${
                  tier.popular
                    ? isDarkMode
                      ? 'bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-500 shadow-2xl'
                      : 'bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 shadow-2xl'
                    : isDarkMode
                      ? 'bg-gray-800 border border-gray-700 hover:border-blue-500'
                      : 'bg-white border border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  } shadow-lg`}>
                    Most Popular
                  </div>
                )}

                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {tier.name}
                  </h3>
                  
                  <p className={`mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {tier.description}
                  </p>

                  <div className="mb-8">
                    <span className={`text-4xl font-bold ${
                      tier.popular
                        ? isDarkMode ? 'text-blue-400' : 'text-purple-600'
                        : isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      ${tier.price.toLocaleString()}
                    </span>
                    <span className={`text-sm ml-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {tier.duration}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center gap-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <svg className={`w-5 h-5 ${
                          tier.popular
                            ? isDarkMode ? 'text-blue-400' : 'text-purple-600'
                            : isDarkMode ? 'text-green-400' : 'text-green-500'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPricing(tier.id)}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                      tier.popular
                        ? isDarkMode
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-300'
                          : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-300'
                        : isDarkMode
                          ? 'border border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-300'
                          : 'border border-gray-300 text-gray-600 hover:bg-gray-50 focus:ring-gray-300'
                    } shadow-lg hover:shadow-xl`}
                  >
                    {tier.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Client <span className={`bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-blue-400 to-purple-400' 
                  : 'from-purple-600 to-blue-600'
              } bg-clip-text text-transparent`}>Testimonials</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Don't just take my word for it. Here's what my clients say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className={`font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${
                      isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className={`italic mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.text}"
                </p>

                <div className={`text-sm font-medium ${
                  isDarkMode ? 'text-blue-400' : 'text-purple-600'
                }`}>
                  Service: {testimonial.service}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className={`rounded-2xl p-12 text-center ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-500' 
            : 'bg-gradient-to-r from-purple-600 to-blue-600'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together. 
            Get in touch for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleContactClick('General Inquiry')}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => alert('Portfolio showcase - This would show detailed project examples.')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              View Portfolio
            </button>
          </div>
        </section>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Services;