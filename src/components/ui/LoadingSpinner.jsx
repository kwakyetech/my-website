import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'primary',
  text = '',
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };

  const variantClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600'
  };

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label={text || 'Loading'}
      {...props}
    >
      <svg
        className={`animate-spin ${sizeClasses[size]} ${variantClasses[variant]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {text && (
        <span className={`ml-2 ${textSizeClasses[size]} ${variantClasses[variant]}`}>
          {text}
        </span>
      )}
      <span className="sr-only">{text || 'Loading...'}</span>
    </div>
  );
};

// Alternative spinner variants
LoadingSpinner.Dots = ({ 
  size = 'md', 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const dotSizeClasses = {
    xs: 'h-1 w-1',
    sm: 'h-1.5 w-1.5',
    md: 'h-2 w-2',
    lg: 'h-3 w-3',
    xl: 'h-4 w-4'
  };

  const variantClasses = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    white: 'bg-white',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600'
  };

  return (
    <div 
      className={`flex space-x-1 ${className}`}
      role="status"
      aria-label="Loading"
      {...props}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${dotSizeClasses[size]} ${variantClasses[variant]} rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

LoadingSpinner.Pulse = ({ 
  size = 'md', 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    xs: 'h-8 w-8',
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-20 w-20',
    xl: 'h-24 w-24'
  };

  const variantClasses = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    white: 'bg-white',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600'
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full animate-ping opacity-75 ${className}`}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;