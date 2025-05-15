import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  type = 'button',
  className = '',
  disabled = false,
  ...props 
}) => {
  // Define variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-neutral-100',
    accent: 'bg-accent text-secondary-dark hover:bg-accent-dark',
    ghost: 'bg-transparent text-gray-800 hover:bg-neutral-100',
  };

  // Define size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
    full: 'w-full py-3',
  };

  // Combine classes
  const buttonClasses = `
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    font-medium rounded transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // Render as link if href is provided, otherwise as button
  if (href) {
    return (
      <Link 
        to={href} 
        className={buttonClasses}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;