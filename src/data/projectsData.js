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
    description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and customer insights.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: "/src/assets/images/ecommerce-dashboard.svg",
    demoUrl: "https://demo-ecommerce-dashboard.com",
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
    image: "/src/assets/images/task-management.svg",
    demoUrl: "https://demo-task-manager.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Forecast Widget",
    description: "An interactive weather widget with location-based forecasts, beautiful animations, and detailed weather information.",
    technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
    image: "/src/assets/images/weather-widget.svg",
    demoUrl: "https://demo-weather-widget.com",
    githubUrl: "https://github.com/yourusername/weather-widget",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A modern social media platform with real-time messaging, post sharing, user profiles, and social interactions.",
    technologies: ["React", "Firebase", "Node.js", "Socket.io"],
    image: "/src/assets/images/social-media-platform.svg",
    demoUrl: "https://demo-social-platform.com",
    githubUrl: "https://github.com/yourusername/social-platform",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Portfolio Website Builder",
    description: "A drag-and-drop website builder specifically designed for creating stunning portfolio websites with customizable templates.",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
    image: "/src/assets/images/portfolio-builder.svg",
    demoUrl: "https://demo-portfolio-builder.com",
    githubUrl: "https://github.com/yourusername/portfolio-builder",
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Interactive Data Visualizer",
    description: "A powerful data visualization tool that transforms complex datasets into interactive charts, graphs, and dashboards.",
    technologies: ["D3.js", "React", "Python", "Flask"],
    image: "/src/assets/images/data-visualizer.svg",
    demoUrl: "https://demo-data-visualizer.com",
    githubUrl: "https://github.com/yourusername/data-visualizer",
    category: "Data Science"
  },
  {
    id: 7,
    title: "Recipe Sharing Community",
    description: "A community-driven platform for sharing recipes, cooking tips, and culinary experiences with rating and review systems.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
    image: "/src/assets/images/recipe-sharing.svg",
    demoUrl: "https://demo-recipe-community.com",
    githubUrl: "https://github.com/yourusername/recipe-community",
    category: "Full Stack"
  },
  {
    id: 8,
    title: "Cryptocurrency Tracker",
    description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
    technologies: ["React", "Redux", "CoinGecko API", "Chart.js"],
    image: "/src/assets/images/crypto-tracker.svg",
    demoUrl: "https://demo-crypto-tracker.com",
    githubUrl: "https://github.com/yourusername/crypto-tracker",
    category: "Frontend"
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