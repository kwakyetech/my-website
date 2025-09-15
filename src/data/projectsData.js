/**
 * Projects Data - Portfolio Project Information
 * 
 * Contains an array of project objects with complete information
 * for display in the Projects page component.
 * 
 * Each project includes:
 * - id: Unique identifier
 * - title: Project name
 * - description: Brief project description
 * - image: Project screenshot/preview image
 * - category: Project type for filtering
 * - technologies: Array of technologies used
 * - liveUrl: Live demo/deployment URL
 * - githubUrl: GitHub repository URL
 */

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order tracking. Built with modern React patterns and responsive design.",
    image: "/api/placeholder/400/250",
    category: "react",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Redux Toolkit"],
    liveUrl: "https://ecommerce-dashboard-demo.netlify.app",
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-stack productivity application with drag-and-drop functionality, team collaboration features, and real-time updates. Includes user authentication and project management tools.",
    image: "/api/placeholder/400/250",
    category: "fullstack",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    liveUrl: "https://taskflow-manager.herokuapp.com",
    githubUrl: "https://github.com/yourusername/task-management-app"
  },
  {
    id: 3,
    title: "Weather Forecast Widget",
    description: "An interactive weather application with location-based forecasts, beautiful animations, and detailed weather information. Features geolocation API and responsive design for all devices.",
    image: "/api/placeholder/400/250",
    category: "javascript",
    technologies: ["Vanilla JavaScript", "CSS3", "Weather API", "Geolocation API", "Chart.js"],
    liveUrl: "https://weather-widget-pro.vercel.app",
    githubUrl: "https://github.com/yourusername/weather-forecast-widget"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A modern social networking platform with real-time messaging, post sharing, user profiles, and advanced privacy settings. Built with scalable architecture and modern UI/UX principles.",
    image: "/api/placeholder/400/250",
    category: "fullstack",
    technologies: ["React", "Next.js", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
    liveUrl: "https://social-connect-platform.vercel.app",
    githubUrl: "https://github.com/yourusername/social-media-platform"
  },
  {
    id: 5,
    title: "Portfolio Website Builder",
    description: "A drag-and-drop website builder specifically designed for creating professional portfolios. Features customizable templates, real-time preview, and one-click deployment options.",
    image: "/api/placeholder/400/250",
    category: "react",
    technologies: ["React", "React DnD", "Styled Components", "Firebase", "Netlify API"],
    liveUrl: "https://portfolio-builder-pro.netlify.app",
    githubUrl: "https://github.com/yourusername/portfolio-website-builder"
  },
  {
    id: 6,
    title: "Interactive Data Visualizer",
    description: "A powerful data visualization tool that transforms complex datasets into interactive charts and graphs. Supports multiple data formats and provides real-time filtering and analysis capabilities.",
    image: "/api/placeholder/400/250",
    category: "javascript",
    technologies: ["D3.js", "JavaScript", "CSS3", "Papa Parse", "Canvas API"],
    liveUrl: "https://data-viz-interactive.github.io",
    githubUrl: "https://github.com/yourusername/interactive-data-visualizer"
  },
  {
    id: 7,
    title: "Recipe Sharing Community",
    description: "A full-stack web application where users can share, discover, and rate recipes. Features include user authentication, recipe search, meal planning, and social interactions with cooking enthusiasts.",
    image: "/api/placeholder/400/250",
    category: "fullstack",
    technologies: ["React", "Node.js", "Express", "MySQL", "Cloudinary", "JWT", "Stripe API"],
    liveUrl: "https://recipe-community-hub.herokuapp.com",
    githubUrl: "https://github.com/yourusername/recipe-sharing-community"
  },
  {
    id: 8,
    title: "Cryptocurrency Tracker",
    description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools. Features beautiful charts and comprehensive market data visualization.",
    image: "/api/placeholder/400/250",
    category: "react",
    technologies: ["React", "Redux", "CoinGecko API", "Chart.js", "Material-UI", "LocalStorage"],
    liveUrl: "https://crypto-tracker-pro.netlify.app",
    githubUrl: "https://github.com/yourusername/cryptocurrency-tracker"
  }
];

/**
 * Get projects by category
 * @param {string} category - Category to filter by ('all', 'react', 'javascript', 'fullstack')
 * @returns {Array} Filtered array of projects
 */
export const getProjectsByCategory = (category) => {
  if (category === 'all') {
    return projectsData;
  }
  return projectsData.filter(project => project.category === category);
};

/**
 * Get project by ID
 * @param {number} id - Project ID
 * @returns {Object|null} Project object or null if not found
 */
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id) || null;
};

/**
 * Get all unique categories
 * @returns {Array} Array of unique category strings
 */
export const getCategories = () => {
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];
  return categories;
};

/**
 * Get all unique technologies
 * @returns {Array} Array of unique technology strings
 */
export const getTechnologies = () => {
  const allTechnologies = projectsData.flatMap(project => project.technologies);
  return [...new Set(allTechnologies)];
};

export default projectsData;