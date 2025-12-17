import React from 'react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-bold">L</span>
      {/* Star with trail/tail like in the image */}
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        className="w-10 h-10 -ml-1"
      >
        {/* Trail/Tail */}
        <path 
          d="M8 35 L20 20" 
          stroke="#E91EA5" 
          strokeWidth="8" 
          strokeLinecap="round"
          fill="none"
        />
        {/* Star */}
        <path 
          d="M20 8 L23.09 16.18 L32 17.27 L26 23.14 L27.18 32.02 L20 27.77 L12.82 32.02 L14 23.14 L8 17.27 L16.91 16.18 L20 8Z" 
          fill="#E91EA5"
        />
      </svg>
      <span className="font-bold">POPLU</span>
    </div>
  );
}