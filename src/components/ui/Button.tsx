import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-primary text-text-secondary hover:shadow-lg hover:scale-105 focus:ring-cta-primary/20',
    secondary: 'bg-bg-secondary-light dark:bg-bg-secondary-dark text-text-primary border border-border-primary hover:bg-bg-tertiary focus:ring-border-primary/20',
    outline: 'bg-transparent text-text-primary border border-border-primary hover:bg-bg-secondary-light dark:hover:bg-bg-secondary-dark focus:ring-border-primary/20',
    ghost: 'bg-transparent text-text-secondary hover:bg-bg-tertiary hover:text-text-primary focus:ring-border-primary/20',
    danger: 'bg-danger text-white hover:bg-danger/90 focus:ring-danger/20',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}