import React, { useEffect, useState } from 'react';
import useStore from '../store/useStore';

/**
 * About Page Component - Comprehensive Professional Profile
 * 
 * Features:
 * - Personal introduction and background story
 * - Skills section with animated progress bars
 * - Experience timeline with career highlights
 * - Education section with academic background
 * - Downloadable resume/CV button
 * - Professional headshot image placeholder
 * - Responsive two-column layout (desktop) / single column (mobile)
 * - Smooth animations and professional styling
 * 
 * @returns {JSX.Element} About page component
 */
const About = () => {
  const { isDarkMode, setActiveSection } = useStore();
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Set active section on mount
  useEffect(() => {
    setActiveSection('about');
    setIsVisible(true);
    
    // Trigger skills animation after component loads
    const timer = setTimeout(() => {
      setSkillsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [setActiveSection]);

  // Skills data with proficiency levels
  const skills = [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Git & GitHub', level: 90, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'DevOps' },
    { name: 'AWS', level: 65, category: 'Cloud' }
  ];

  // Experience timeline data
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with cross-functional teams.',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and improved user experience across multiple projects. Collaborated with designers and backend developers.',
      achievements: [
        'Built 15+ responsive websites',
        'Reduced load times by 30%',
        'Implemented modern UI/UX practices'
      ]
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Started career building websites and learning modern web technologies. Gained experience in full-stack development and agile methodologies.',
      achievements: [
        'Completed 20+ client projects',
        'Learned React and Node.js',
        'Contributed to open-source projects'
      ]
    }
  ];

  // Education data
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and web development. Graduated with honors.',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Code Academy Pro',
      period: '2019',
      description: 'Intensive 6-month program covering modern web technologies including React, Node.js, and database management.',
      certification: 'Certified Full Stack Developer'
    }
  ];

  /**
   * Handle resume download
   */
  const handleResumeDownload = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with actual resume file path
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /**
   * Get skill category color
   * @param {string} category - Skill category
   * @returns {string} Tailwind color classes
   */
  const getSkillCategoryColor = (category) => {
    const colors = {
      'Frontend': isDarkMode ? 'from-blue-500 to-cyan-500' : 'from-blue-600 to-cyan-600',
      'Backend': isDarkMode ? 'from-green-500 to-emerald-500' : 'from-green-600 to-emerald-600',
      'Database': isDarkMode ? 'from-purple-500 to-pink-500' : 'from-purple-600 to-pink-600',
      'Tools': isDarkMode ? 'from-orange-500 to-red-500' : 'from-orange-600 to-red-600',
      'DevOps': isDarkMode ? 'from-indigo-500 to-blue-500' : 'from-indigo-600 to-blue-600',
      'Cloud': isDarkMode ? 'from-teal-500 to-green-500' : 'from-teal-600 to-green-600'
    };
    return colors[category] || (isDarkMode ? 'from-gray-500 to-gray-600' : 'from-gray-600 to-gray-700');
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
            About <span className={`bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 to-purple-400' 
                : 'from-purple-600 to-blue-600'
            } bg-clip-text text-transparent`}>Me</span>
          </h1>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Personal Introduction */}
            <section className={`rounded-2xl p-8 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            } transform transition-all duration-700 hover:shadow-xl`}>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                My Story
              </h2>
              <div className={`space-y-4 text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p>
                  Hello! I'm a passionate full-stack developer with over 4 years of experience creating 
                  digital solutions that make a difference. My journey began with a curiosity about how 
                  websites work, which led me to dive deep into the world of web development.
                </p>
                <p>
                  I specialize in building scalable web applications using modern technologies like React, 
                  Node.js, and cloud platforms. I believe in writing clean, maintainable code and creating 
                  user experiences that are both beautiful and functional.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I'm always excited to take on 
                  new challenges and collaborate with like-minded individuals.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className={`rounded-2xl p-8 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            } transform transition-all duration-700 hover:shadow-xl`}>
              <h2 className={`text-3xl font-bold mb-8 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm px-2 py-1 rounded ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className={`w-full h-2 rounded-full ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${getSkillCategoryColor(skill.category)} transition-all duration-1000 ease-out`}
                        style={{
                          width: skillsVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Image and Resume */}
          <div className="space-y-8">
            
            {/* Professional Headshot */}
            <div className={`rounded-2xl p-8 text-center ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            } transform transition-all duration-700 hover:shadow-xl`}>
              <div className={`w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              } flex items-center justify-center`}>
                {/* Placeholder for professional headshot */}
                <div className={`text-6xl ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  👨‍💻
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Prince Kwakye Ofori
              </h3>
              
              <p className={`text-lg mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Full Stack Developer
              </p>

              {/* Resume Download Button */}
              <button
                onClick={handleResumeDownload}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-300'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-300'
                } shadow-lg hover:shadow-xl`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className={`rounded-2xl p-6 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            } transform transition-all duration-700 hover:shadow-xl`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Stats
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Years of Experience
                  </span>
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-purple-600'}`}>
                    4+
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Projects Completed
                  </span>
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-purple-600'}`}>
                    50+
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Happy Clients
                  </span>
                  <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-purple-600'}`}>
                    30+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <section className={`rounded-2xl p-8 mb-12 ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200 shadow-lg'
        } transform transition-all duration-700 hover:shadow-xl`}>
          <h2 className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className={`absolute left-6 top-12 w-0.5 h-full ${
                    isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600'
                  } shadow-lg`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  
                  {/* Experience Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className={`text-xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className={`text-lg font-medium mb-3 ${
                      isDarkMode ? 'text-blue-400' : 'text-purple-600'
                    }`}>
                      {exp.company}
                    </p>
                    
                    <p className={`mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className={`flex items-center gap-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <svg className={`w-4 h-4 ${
                            isDarkMode ? 'text-green-400' : 'text-green-500'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={`rounded-2xl p-8 ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200 shadow-lg'
        } transform transition-all duration-700 hover:shadow-xl`}>
          <h2 className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Education
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div key={edu.id} className={`p-6 rounded-xl border ${
                isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600'
                }`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {edu.degree}
                </h3>
                
                <p className={`text-lg font-medium mb-2 ${
                  isDarkMode ? 'text-blue-400' : 'text-purple-600'
                }`}>
                  {edu.institution}
                </p>
                
                <p className={`text-sm mb-3 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {edu.period}
                </p>
                
                <p className={`mb-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {edu.description}
                </p>
                
                {edu.gpa && (
                  <div className={`text-sm ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    GPA: {edu.gpa}
                  </div>
                )}
                
                {edu.certification && (
                  <div className={`text-sm ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {edu.certification}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;