/**
 * Services Data - Web Development Services Portfolio
 * 
 * This file contains all service offerings, pricing tiers, and related data
 * for the Services page component.
 */

// Main services offered
export const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Create stunning, responsive user interfaces with modern frameworks and cutting-edge design principles.',
    longDescription: 'Build beautiful, interactive web applications using the latest frontend technologies. From responsive layouts to complex user interactions, I create engaging experiences that work seamlessly across all devices.',
    icon: 'frontend',
    technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS', 'JavaScript ES6+'],
    features: [
      'Responsive Web Design',
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Cross-browser Compatibility',
      'Performance Optimization',
      'Accessibility (WCAG 2.1)'
    ],
    startingPrice: 1500,
    deliveryTime: '2-4 weeks',
    category: 'development'
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Build robust, scalable server-side applications with secure APIs and efficient database management.',
    longDescription: 'Develop powerful backend systems that handle your business logic, data processing, and API integrations. From RESTful APIs to real-time applications, I ensure your backend is secure, scalable, and performant.',
    icon: 'backend',
    technologies: ['Node.js', 'Python', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis'],
    features: [
      'RESTful API Development',
      'Database Design & Optimization',
      'Authentication & Authorization',
      'Real-time Applications',
      'Third-party Integrations',
      'Cloud Deployment'
    ],
    startingPrice: 2000,
    deliveryTime: '3-5 weeks',
    category: 'development'
  },
  {
    id: 3,
    title: 'Full Stack Applications',
    description: 'Complete web applications from concept to deployment, handling both frontend and backend development.',
    longDescription: 'End-to-end web application development covering everything from user interface design to server architecture. Perfect for businesses looking for a complete digital solution.',
    icon: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'AWS'],
    features: [
      'Complete Web Applications',
      'User Authentication Systems',
      'Admin Dashboards',
      'Payment Integration',
      'Email Notifications',
      'Analytics Integration'
    ],
    startingPrice: 3500,
    deliveryTime: '6-10 weeks',
    category: 'development'
  },
  {
    id: 4,
    title: 'Website Optimization',
    description: 'Improve your existing website\'s performance, SEO, and user experience for better results.',
    longDescription: 'Analyze and optimize your current website for better performance, search engine rankings, and user engagement. Includes technical SEO, speed optimization, and UX improvements.',
    icon: 'optimization',
    technologies: ['Google Analytics', 'PageSpeed Insights', 'SEO Tools', 'Lighthouse', 'GTM'],
    features: [
      'Performance Auditing',
      'SEO Optimization',
      'Core Web Vitals Improvement',
      'Mobile Optimization',
      'Conversion Rate Optimization',
      'Analytics Setup'
    ],
    startingPrice: 800,
    deliveryTime: '1-2 weeks',
    category: 'optimization'
  },
  {
    id: 5,
    title: 'E-commerce Solutions',
    description: 'Build powerful online stores with secure payment processing and inventory management.',
    longDescription: 'Create comprehensive e-commerce platforms that drive sales and provide excellent shopping experiences. From product catalogs to payment processing, everything you need to sell online.',
    icon: 'ecommerce',
    technologies: ['React', 'Stripe', 'PayPal', 'Node.js', 'MongoDB', 'Redis'],
    features: [
      'Product Catalog Management',
      'Shopping Cart & Checkout',
      'Payment Gateway Integration',
      'Order Management System',
      'Inventory Tracking',
      'Customer Accounts'
    ],
    startingPrice: 4000,
    deliveryTime: '8-12 weeks',
    category: 'development'
  },
  {
    id: 6,
    title: 'API Development',
    description: 'Design and build robust APIs for mobile apps, third-party integrations, and microservices.',
    longDescription: 'Develop scalable and secure APIs that power your applications and enable seamless integrations. Perfect for mobile apps, third-party services, and microservice architectures.',
    icon: 'api',
    technologies: ['Node.js', 'Express.js', 'GraphQL', 'REST', 'JWT', 'Swagger'],
    features: [
      'RESTful API Design',
      'GraphQL Implementation',
      'API Documentation',
      'Rate Limiting & Security',
      'Version Management',
      'Testing & Monitoring'
    ],
    startingPrice: 1800,
    deliveryTime: '3-6 weeks',
    category: 'development'
  }
];

// Pricing packages/tiers
export const pricingTiers = [
  {
    id: 1,
    name: 'Starter',
    description: 'Perfect for small businesses and personal projects',
    price: 1500,
    duration: 'per project',
    features: [
      'Responsive Design',
      'Up to 5 Pages',
      'Basic SEO Setup',
      'Contact Form',
      '30 Days Support',
      'Mobile Optimization'
    ],
    popular: false,
    category: 'basic'
  },
  {
    id: 2,
    name: 'Professional',
    description: 'Ideal for growing businesses and advanced features',
    price: 3500,
    duration: 'per project',
    features: [
      'Everything in Starter',
      'Custom Functionality',
      'Database Integration',
      'User Authentication',
      'Admin Dashboard',
      '90 Days Support',
      'Performance Optimization',
      'Analytics Integration'
    ],
    popular: true,
    category: 'professional'
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'Complete solutions for large-scale applications',
    price: 6500,
    duration: 'per project',
    features: [
      'Everything in Professional',
      'Scalable Architecture',
      'Third-party Integrations',
      'Advanced Security',
      'Load Balancing',
      '6 Months Support',
      'Deployment & DevOps',
      'Training & Documentation'
    ],
    popular: false,
    category: 'enterprise'
  }
];

// Service categories for filtering
export const serviceCategories = [
  { id: 'all', name: 'All Services', count: services.length },
  { id: 'development', name: 'Development', count: services.filter(s => s.category === 'development').length },
  { id: 'optimization', name: 'Optimization', count: services.filter(s => s.category === 'optimization').length }
];

// Testimonials for services
export const serviceTestimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    service: 'Full Stack Applications',
    rating: 5,
    text: 'Exceptional work on our web application. The attention to detail and technical expertise exceeded our expectations.',
    avatar: '👩‍💼'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'E-Shop Solutions',
    service: 'E-commerce Solutions',
    rating: 5,
    text: 'Our online store has never performed better. Sales increased by 40% after the optimization work.',
    avatar: '👨‍💻'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Digital Marketing Pro',
    service: 'Website Optimization',
    rating: 5,
    text: 'The SEO improvements and performance optimization delivered amazing results. Highly recommended!',
    avatar: '👩‍🚀'
  }
];

// FAQ data for services
export const serviceFAQs = [
  {
    id: 1,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 8-12 weeks. I provide detailed timelines during the consultation phase.'
  },
  {
    id: 2,
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, I offer various support packages ranging from 30 days to 6 months, depending on the service tier. This includes bug fixes, minor updates, and technical support.'
  },
  {
    id: 3,
    question: 'Can you work with existing websites and applications?',
    answer: 'Absolutely! I can optimize, enhance, or completely redesign existing websites and applications. I work with various technologies and can adapt to your current tech stack.'
  },
  {
    id: 4,
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in modern web technologies including React, Node.js, TypeScript, MongoDB, PostgreSQL, and cloud platforms like AWS. I stay updated with the latest industry trends and best practices.'
  },
  {
    id: 5,
    question: 'Do you provide hosting and deployment services?',
    answer: 'Yes, I can help with hosting recommendations, deployment setup, and ongoing DevOps support. I work with various cloud providers to ensure your application is properly deployed and maintained.'
  }
];

// Utility functions
export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category) => {
  if (category === 'all') return services;
  return services.filter(service => service.category === category);
};

export const getPricingTierById = (id) => {
  return pricingTiers.find(tier => tier.id === id);
};

export const getPopularServices = () => {
  return services.slice(0, 3); // Return first 3 services as popular
};

export const getServiceTechnologies = () => {
  const allTechnologies = services.flatMap(service => service.technologies);
  return [...new Set(allTechnologies)].sort();
};

export const getAveragePrice = () => {
  const total = services.reduce((sum, service) => sum + service.startingPrice, 0);
  return Math.round(total / services.length);
};

export const getServicesByPriceRange = (minPrice, maxPrice) => {
  return services.filter(service => 
    service.startingPrice >= minPrice && service.startingPrice <= maxPrice
  );
};

// Export default object with all data
export default {
  services,
  pricingTiers,
  serviceCategories,
  serviceTestimonials,
  serviceFAQs,
  getServiceById,
  getServicesByCategory,
  getPricingTierById,
  getPopularServices,
  getServiceTechnologies,
  getAveragePrice,
  getServicesByPriceRange
};