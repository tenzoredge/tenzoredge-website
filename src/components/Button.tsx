import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  href,
  className = ''
}: ButtonProps) {
  const baseStyles = "px-8 py-4 font-semibold transition-all duration-300 inline-block rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1";
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700",
    secondary: "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
