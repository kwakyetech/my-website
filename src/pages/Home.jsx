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
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
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
              <span className="block">Prince Kwakye</span>
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
            <div className="pt-20 pb-16 animate-fade-in-up animation-delay-1000">
              <div className={`inline-flex flex-col items-center gap-3 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="text-sm font-medium">Scroll to explore</span>
                <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                  isDarkMode ? 'border-gray-300' : 'border-gray-400'
                }`}>
                  <div className={`w-1 h-3 rounded-full animate-bounce mt-2 ${
                    isDarkMode ? 'bg-gray-300' : 'bg-gray-400'
                  }`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Technologies Section */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Skills & Technologies
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I work with modern technologies to build scalable and efficient solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'React', icon: '⚛️', level: 95 },
              { name: 'JavaScript', icon: '🟨', level: 90 },
              { name: 'Node.js', icon: '🟢', level: 85 },
              { name: 'Python', icon: '🐍', level: 80 },
              { name: 'TypeScript', icon: '🔷', level: 85 },
              { name: 'MongoDB', icon: '🍃', level: 80 },
              { name: 'PostgreSQL', icon: '🐘', level: 75 },
              { name: 'AWS', icon: '☁️', level: 70 }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className={`group p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className={`font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {skill.name}
                  </h3>
                  <div className={`w-full bg-gray-200 rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                  }`}>
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm mt-1 block ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', icon: '🚀' },
              { number: '3+', label: 'Years Experience', icon: '⏱️' },
              { number: '20+', label: 'Happy Clients', icon: '😊' },
              { number: '100%', label: 'Satisfaction Rate', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className={`text-4xl font-bold mb-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-stack e-commerce solution with React and Node.js',
                tech: ['React', 'Node.js', 'MongoDB'],
                image: '🛒'
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task management with real-time updates',
                tech: ['React', 'Socket.io', 'Express'],
                image: '📋'
              },
              {
                title: 'Weather Dashboard',
                description: 'Beautiful weather app with location-based forecasts',
                tech: ['React', 'API Integration', 'Charts'],
                image: '🌤️'
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`group rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode 
                            ? 'bg-gray-600 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
              }`}
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What People Say
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Feedback from clients and colleagues I've worked with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Product Manager',
                company: 'TechCorp',
                testimonial: 'Prince delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the project a huge success.',
                avatar: '👩‍💼'
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                company: 'StartupXYZ',
                testimonial: 'Working with Prince was a game-changer for our startup. He built a scalable solution that grew with our business needs.',
                avatar: '👨‍💻'
              },
              {
                name: 'Emily Davis',
                role: 'Design Lead',
                company: 'Creative Agency',
                testimonial: 'Prince has an excellent eye for design and user experience. He transformed our designs into pixel-perfect, responsive applications.',
                avatar: '👩‍🎨'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className={`italic ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.testimonial}"
                </p>
                <div className="flex text-yellow-400 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
          : 'bg-gradient-to-r from-blue-50 to-purple-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Start Your Project?
          </h2>
          <p className={`text-xl mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's work together to bring your ideas to life with modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
              }`}
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                  : 'border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600'
              }`}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;