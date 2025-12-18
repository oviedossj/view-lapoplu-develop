// LeopardPattern.tsx
import React from 'react';

interface LeopardPatternProps {
  opacity?: number;
  blendMode?: string;
  imageUrl?: string;
}

export function LeopardPattern({ 
  opacity = 0.8, 
  blendMode = 'multiply',
  imageUrl = 'src/assets/utils/leopard-pattern.png' 
}: LeopardPatternProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundBlendMode: blendMode as any,
        opacity: opacity
      }}
    />
  );
}