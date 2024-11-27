import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-600 hover:text-rose-600 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}