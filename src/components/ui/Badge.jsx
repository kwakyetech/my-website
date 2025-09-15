import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  removable = false,
  onRemove,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    primary: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    success: 'bg-green-100 text-green-800 hover:bg-green-200',
    warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    danger: 'bg-red-100 text-red-800 hover:bg-red-200',
    info: 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200',
    dark: 'bg-gray-800 text-white hover:bg-gray-900',
    outline: 'border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50'
  };
  
  const sizeClasses = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
    xl: 'px-5 py-2 text-lg'
  };

  const iconSizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6'
  };
  
  const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${clickableClasses} ${className}`;
  
  const handleKeyDown = (e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(e);
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(e);
    }
  };

  const handleRemoveKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleRemove(e);
    }
  };
  
  return (
    <span
      className={classes}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {children}
      {removable && (
        <button
          type="button"
          className={`ml-1 -mr-1 rounded-full p-0.5 hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-1 focus:ring-white`}
          onClick={handleRemove}
          onKeyDown={handleRemoveKeyDown}
          aria-label="Remove badge"
        >
          <svg 
            className={iconSizeClasses[size]} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </span>
  );
};

// Badge with dot indicator
Badge.Dot = ({ 
  children, 
  variant = 'default',
  size = 'md',
  dotPosition = 'left',
  className = '',
  ...props 
}) => {
  const dotVariantClasses = {
    default: 'bg-gray-400',
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-cyan-500'
  };

  const dotSizeClasses = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2 w-2',
    lg: 'h-2.5 w-2.5',
    xl: 'h-3 w-3'
  };

  const dot = (
    <span 
      className={`${dotSizeClasses[size]} ${dotVariantClasses[variant]} rounded-full`}
      aria-hidden="true"
    />
  );

  return (
    <Badge 
      variant={variant} 
      size={size} 
      className={`${dotPosition === 'left' ? 'pl-2' : 'pr-2'} ${className}`}
      {...props}
    >
      {dotPosition === 'left' && dot}
      {dotPosition === 'left' && <span className="ml-1">{children}</span>}
      {dotPosition === 'right' && <span className="mr-1">{children}</span>}
      {dotPosition === 'right' && dot}
    </Badge>
  );
};

// Badge with icon
Badge.Icon = ({ 
  children, 
  icon: Icon,
  iconPosition = 'left',
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  const iconSizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6'
  };

  return (
    <Badge 
      variant={variant} 
      size={size} 
      className={className}
      {...props}
    >
      {iconPosition === 'left' && Icon && (
        <Icon className={`${iconSizeClasses[size]} ${children ? 'mr-1' : ''}`} />
      )}
      {children}
      {iconPosition === 'right' && Icon && (
        <Icon className={`${iconSizeClasses[size]} ${children ? 'ml-1' : ''}`} />
      )}
    </Badge>
  );
};

export default Badge;