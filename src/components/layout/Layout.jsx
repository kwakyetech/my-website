import React, { useEffect } from 'react';
import useStore from '../../store/useStore';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout wrapper component that provides consistent structure and theme support
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render in the main content area
 * @returns {JSX.Element} The Layout component
 */
const Layout = ({ children }) => {
  const { isDarkMode } = useStore();

  /**
   * Apply theme class to document element for global theme support
   */
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  /**
   * Handle smooth scrolling for anchor links
   */
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = 64; // Height of sticky header
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDarkMode ? 'dark' : ''
    }`}>
      {/* Background with theme support */}
      <div className="fixed inset-0 bg-white dark:bg-gray-900 transition-colors duration-300 -z-10" />
      
      {/* Header */}
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <div className="relative">
          {/* Background Pattern (optional) */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none" />
          
          {/* Content Container */}
          <div className="relative">
            {children}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

/**
 * Scroll to top button component
 * @component
 * @returns {JSX.Element|null} The scroll to top button or null if not needed
 */
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  /**
   * Handle scroll visibility
   */
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  /**
   * Scroll to top function
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
      aria-label="Scroll to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default Layout;