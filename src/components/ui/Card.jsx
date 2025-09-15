import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  padding = 'md',
  shadow = 'md',
  hover = true,
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200 transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white',
    dark: 'bg-gray-800 border-gray-700 text-white',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200'
  };
  
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${hoverClasses} ${clickableClasses} ${className}`;
  
  const CardComponent = onClick ? 'button' : 'div';
  
  return (
    <CardComponent
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
      {...props}
    >
      {children}
    </CardComponent>
  );
};

// Card sub-components for better composition
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

Card.Title = ({ children, className = '', as: Component = 'h3', ...props }) => (
  <Component className={`text-xl font-semibold text-gray-900 mb-2 ${className}`} {...props}>
    {children}
  </Component>
);

Card.Content = ({ children, className = '', ...props }) => (
  <div className={`text-gray-600 ${className}`} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

Card.Image = ({ src, alt, className = '', ...props }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`w-full h-48 object-cover rounded-t-lg ${className}`} 
    {...props}
  />
);

export default Card;