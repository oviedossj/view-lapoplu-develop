import React from 'react';

export function Logo({ 
  className = "",
  size = "md"
}: { 
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const logoFiles = {
    sm: "/logos/logox2.png",
    md: "/logos/logox2.png",
    lg: "/logos/logox4.png"
  };

  const sizeClasses = {
    sm: "h-8",
    md: "h-12", 
    lg: "h-32 md:h-60 lg:h-80" // Mucho más grande y responsive
  };

  return (
    <img 
      src={logoFiles[size]} 
      alt="La Poplu"
      className={`w-auto object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}