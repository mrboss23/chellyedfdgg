import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-colors";
  const variants = {
    primary: "bg-rose-600 text-white hover:bg-rose-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}