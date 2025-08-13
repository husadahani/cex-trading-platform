import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'none';
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '', padding = 'md' }: CardProps) {
  const paddingClasses = {
    sm: 'p-2 sm:p-3 lg:p-4',
    md: 'p-3 sm:p-4 lg:p-6',
    lg: 'p-4 sm:p-6 lg:p-8',
    none: '',
  };
  
  const classes = `bg-bg-primary border border-border-primary rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`border-b border-border-primary pb-2 sm:pb-3 lg:pb-4 mb-2 sm:mb-3 lg:mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`border-t border-border-primary pt-2 sm:pt-3 lg:pt-4 mt-2 sm:mt-3 lg:mt-4 ${className}`}>
      {children}
    </div>
  );
}