import React, { useEffect, useState } from 'react';
import { useStore } from '../store/useStore';
import { projectsData, getProjectsByCategory, getCategories } from '../data/projectsData';

/**
 * Projects Page Component - Interactive Portfolio Projects Display
 * 
 * Features:
 * - Grid layout with responsive design (1/2/3 columns)
 * - Project filtering by category with smooth animations
 * - Project cards with hover effects and transitions
 * - Integration with Zustand store for filter state
 * - Loading states and category switching animations
 * - External links to live demos and GitHub repositories
 * 
 * @returns {JSX.Element} Projects page component
 */
const Projects = () => {
  const { isDarkMode, selectedProjectCategory, setProjectCategory, setActiveSection } = useStore();
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isLoading, setIsLoading] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const categories = getCategories();

  // Set active section on mount
  useEffect(() => {
    setActiveSection('projects');
  }, [setActiveSection]);

  // Filter projects when category changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading for smooth transition
    const timer = setTimeout(() => {
      const filtered = getProjectsByCategory(selectedProjectCategory);
      setFilteredProjects(filtered);
      setAnimationKey(prev => prev + 1);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedProjectCategory]);

  /**
   * Handle category filter change
   * @param {string} category - Selected category
   */
  const handleCategoryChange = (category) => {
    if (category !== selectedProjectCategory) {
      setProjectCategory(category);
    }
  };

  /**
   * Handle external link clicks
   * @param {string} url - Target URL
   * @param {Event} e - Click event
   */
  const handleExternalLink = (url, e) => {
    e.preventDefault();
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  /**
   * Format category name for display
   * @param {string} category - Category string
   * @returns {string} Formatted category name
   */
  const formatCategoryName = (category) => {
    if (category === 'all') return 'All Projects';
    if (category === 'fullstack') return 'Full Stack';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`}>
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className={`bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 to-purple-400' 
                : 'from-purple-600 to-blue-600'
            } bg-clip-text text-transparent`}>Projects</span>
          </h1>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore my portfolio of web development projects, showcasing modern technologies 
            and creative solutions to real-world problems.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                selectedProjectCategory === category
                  ? isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg focus:ring-blue-300'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg focus:ring-purple-300'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 focus:ring-gray-500'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 shadow-sm focus:ring-gray-300'
              }`}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${
              isDarkMode ? 'border-blue-400' : 'border-purple-600'
            }`}></div>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && (
          <div 
            key={animationKey}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-700 shadow-xl' 
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => handleExternalLink(project.liveUrl, e)}
                      className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                    >
                      Live Demo
                    </button>
                    <button
                      onClick={(e) => handleExternalLink(project.githubUrl, e)}
                      className="px-4 py-2 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105"
                    >
                      GitHub
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode
                        ? 'bg-blue-900 text-blue-300'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {formatCategoryName(project.category)}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r ${
                    isDarkMode 
                      ? 'text-white group-hover:from-blue-400 group-hover:to-purple-400' 
                      : 'text-gray-900 group-hover:from-purple-600 group-hover:to-blue-600'
                  } group-hover:bg-clip-text transition-all duration-300`}>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={(e) => handleExternalLink(project.liveUrl, e)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                        isDarkMode
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      } transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-blue-300`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </span>
                    </button>
                    
                    <button
                      onClick={(e) => handleExternalLink(project.githubUrl, e)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm border-2 transition-all duration-200 ${
                        isDarkMode
                          ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white hover:bg-gray-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50'
                      } transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-gray-300`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Projects Message */}
        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className={`text-6xl mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
              🔍
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              No Projects Found
            </h3>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Try selecting a different category to see more projects.
            </p>
          </div>
        )}
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
        }

        .animate-fade-in-up > * {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;