
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="orangeGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF8A00" />
          <stop offset="1" stopColor="#FFC700" />
        </linearGradient>
        <linearGradient id="diagonalGrad" x1="25" y1="75" x2="75" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00D2FF" />
          <stop offset="1" stopColor="#9C27B0" />
        </linearGradient>
      </defs>
      
      {/* Orange Corner Base */}
      <rect 
        x="20" 
        y="20" 
        width="60" 
        height="24" 
        rx="12" 
        fill="url(#orangeGrad)" 
      />
      <rect 
        x="56" 
        y="20" 
        width="24" 
        height="60" 
        rx="12" 
        fill="url(#orangeGrad)" 
      />
      
      {/* Signature Diagonal Arrow Part */}
      <rect 
        x="12" 
        y="38" 
        width="76" 
        height="24" 
        rx="12" 
        transform="rotate(-45 50 50)" 
        fill="url(#diagonalGrad)" 
      />
    </svg>
  );
};

export default Logo;
