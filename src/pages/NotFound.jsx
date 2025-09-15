import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';

/**
 * NotFound (404) Page Component - Professional Error Page
 * 
 * Features:
 * - Professional 404 error page design
 * - Navigation back to home and other pages
 * - Theme integration with dark/light mode support
 * - Animated elements and interactive design
 * - Helpful suggestions for users
 * - SEO-friendly error handling
 * - Responsive design for all devices
 * 
 * @returns {JSX.Element} NotFound page component
 */
const NotFound = () => {
  const { isDarkMode } = useStore();
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  /**
   * Popular pages for navigation suggestions
   */
  const popularPages = [
    {
      name: 'Home',
      path: '/',
      description: 'Return to the homepage',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'About',
      path: '/about',
      description: 'Learn more about me',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'Projects',
      path: '/projects',
      description: 'View my portfolio',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      name: 'Services',
      path: '/services',
      description: 'Explore my services',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      )
    },
    {
      name: 'Contact',
      path: '/contact',
      description: 'Get in touch',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        
        {/* 404 Animation */}
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative mb-8">
            {/* Large 404 Text */}
            <h1 className={`text-8xl sm:text-9xl lg:text-[12rem] font-bold leading-none ${
              isDarkMode 
                ? 'text-gray-800' 
                : 'text-gray-200'
            } select-none`}>
              404
            </h1>
            
            {/* Floating Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-blue-400 to-purple-400' 
                  : 'from-purple-600 to-blue-600'
              } bg-clip-text text-transparent animate-pulse`}>
                404
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -top-2 -right-8 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-300"></div>
            <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-green-500 rounded-full animate-bounce delay-500"></div>
            <div className="absolute -bottom-2 right-1/4 w-5 h-5 bg-pink-500 rounded-full animate-bounce delay-700"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className={`mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Oops! Page Not Found
          </h2>
          
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry though, we can help you find your way back!
          </p>

          {/* Search Suggestions */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">
              Double-check the URL or try one of the links below
            </span>
          </div>
        </div>

        {/* Navigation Options */}
        <div className={`mb-12 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className={`text-2xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Where would you like to go?
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {popularPages.map((page, index) => (
              <Link
                key={page.path}
                to={page.path}
                className={`group p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-gray-600' 
                    : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-md'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex items-center gap-4 mb-3 ${
                  isDarkMode 
                    ? 'text-blue-400 group-hover:text-blue-300' 
                    : 'text-purple-600 group-hover:text-purple-700'
                }`}>
                  {page.icon}
                  <h4 className={`font-semibold text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {page.name}
                  </h4>
                </div>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Primary Action */}
        <div className={`transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Link
            to="/"
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-300'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-300'
            } shadow-lg hover:shadow-xl`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Take Me Home
          </Link>
        </div>

        {/* Footer Message */}
        <div className={`mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className={`text-sm ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            If you believe this is an error, please{' '}
            <Link 
              to="/contact" 
              className={`underline transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-purple-600 hover:text-purple-700'
              }`}
            >
              contact me
            </Link>
            {' '}and let me know.
          </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-30px,0);
          }
          70% {
            transform: translate3d(0,-15px,0);
          }
          90% {
            transform: translate3d(0,-4px,0);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;