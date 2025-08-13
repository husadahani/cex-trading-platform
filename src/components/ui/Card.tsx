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
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: '',
  };
  
  const classes = `bg-bg-primary border border-border-primary rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`border-b border-border-primary pb-4 mb-4 ${className}`}>
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
    <div className={`border-t border-border-primary pt-4 mt-4 ${className}`}>
      {children}
    </div>
  );
}