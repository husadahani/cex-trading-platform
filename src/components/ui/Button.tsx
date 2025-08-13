import React from 'react';
import { COMPONENT_COLORS } from '@/lib/colors';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-primary disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: COMPONENT_COLORS.button.primary,
    secondary: COMPONENT_COLORS.button.secondary,
    outline: COMPONENT_COLORS.button.outline,
    ghost: 'text-text-secondary dark:text-text-primary hover:bg-bg-secondary/50 dark:hover:bg-bg-secondary/10',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}