// VirtualWardrobe.tsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DressMe } from './DressMe';
import { Logo } from './Logo';
import { LeopardPattern } from './LeopardPattern';

interface ClothingItem {
  id: string;
  name: string;
  image: string;
  category: string;
  color: string;
  compatibleWith: string[];
}

interface ClothingData {
  tops: ClothingItem[];
  bottoms: ClothingItem[];
  shoes: ClothingItem[];
}

interface VirtualWardrobeProps {
  clothingData: ClothingData;
}

export function VirtualWardrobe({ clothingData }: VirtualWardrobeProps) {
  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);
  const [showDressMe, setShowDressMe] = useState(false);

  const currentTop = clothingData.tops[currentTopIndex];
  const currentBottom = clothingData.bottoms[currentBottomIndex];

  // Navigation functions for tops
  const nextTop = () => setCurrentTopIndex((prev) =>  prev < clothingData.tops.length - 1 ? prev + 1 : prev );
  const prevTop = () =>  setCurrentTopIndex((prev) =>  prev > 0 ? prev - 1 : prev  );
  const firstTop = () => setCurrentTopIndex(0);
  const lastTop = () => setCurrentTopIndex(clothingData.tops.length - 1);

  // Navigation functions for bottoms
  const nextBottom = () => setCurrentBottomIndex((prev) => prev < clothingData.bottoms.length - 1 ? prev + 1 : prev );
  const prevBottom = () => setCurrentBottomIndex((prev) => prev > 0 ? prev - 1 : prev);
  const firstBottom = () => setCurrentBottomIndex(0);
  const lastBottom = () => setCurrentBottomIndex(clothingData.bottoms.length - 1);

  if (showDressMe) {
    return (
      <DressMe
        currentTop={currentTop}
        currentBottom={currentBottom}
        onBack={() => setShowDressMe(false)}
      />
    );
  }

  return (
    <div className="h-screen text-black flex flex-col relative">
      {/* Fondo con patrón de leopardo SOLO PARA MÓVIL */}
      <div className="lg:hidden absolute inset-0 z-0">
        <LeopardPattern />
      </div>

      {/* Windows XP style title bar */}
      <div 
        className="h-8 flex items-center px-2 relative z-10"
        style={{
          background: 'linear-gradient(to bottom, #090a0aff 0%, #060607ff 50%, #080909ff 50%, rgba(14, 15, 17, 1) 100%)',
          borderBottom: '1px solid #070708ff'
        }}
      >
        <div className="flex items-center gap-2 flex-1">
          <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
          <span className="text-white text-sm">LA POPLU's Wardrobe - Fall Fashions</span>
        </div>
        <div className="flex gap-1">
          <div className="w-5 h-5 bg-[#316AC5] hover:bg-[#4178C7] flex items-center justify-center text-white text-xs cursor-pointer">_</div>
          <div className="w-5 h-5 bg-[#316AC5] hover:bg-[#4178C7] flex items-center justify-center text-white text-xs cursor-pointer">□</div>
          <div className="w-5 h-5 bg-[#D93831] hover:bg-[#E14842] flex items-center justify-center text-white text-xs cursor-pointer">×</div>
        </div>
      </div>

      <div 
        className="flex flex-1 relative z-10" 
        style={{ height: 'calc(100vh - 32px)',backgroundColor: '#272829ff' }}>
        {/* Left sidebar with leopard pattern - SOLO DESKTOP */}
        <div className="hidden lg:block w-64 relative overflow-hidden border-r-2" style={{ borderColor: '#8C8C8C' }}>
          <LeopardPattern />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col p-4 gap-4">
          {/* Top display area */}
          <div className="flex-1 flex flex-col">
            <div 
              className="mb-2 px-3 py-1 text-sm"
              style={{
                background: 'linear-gradient(to bottom, #0f1113ff 0%, #0b0c0dff 100%)',
                color: 'white',
                borderRadius: '3px 3px 0 0',
                border: '1px solid #0b0b0cff'
              }}
            >
              TOPS
            </div>
            <div 
              className="flex-1 p-6 flex items-center justify-center"
              style={{
                backgroundColor: '#f7f7f7',
                border: '2px solid',
                borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
                boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              {currentTop && (
                <ImageWithFallback
                  src={currentTop.image}
                  alt={currentTop.name}
                  className="max-h-[280px] w-auto object-contain"
                />
              )}
            </div>
          </div>

          {/* Bottom display area */}
          <div className="flex-1 flex flex-col">
            <div 
              className="mb-2 px-3 py-1 text-sm"
              style={{
                background: 'linear-gradient(to bottom, #0f1113ff 0%, #0b0c0dff 100%)',
                color: 'white',
                borderRadius: '3px 3px 0 0',
                border: '1px solid #0b0b0cff'
              }}
            > BOTTOMS </div>
            <div 
              className="flex-1 p-6 flex items-center justify-center"
              style={{
                backgroundColor: '#f7f7f7',
                border: '2px solid',
                borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
                boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)'
              }}>
              {currentBottom && (
                <ImageWithFallback
                  src={currentBottom.image}
                  alt={currentBottom.name}
                  className="max-h-[280px] w-auto object-contain"
                />
              )}
            </div>
          </div>
        </div>

        {/* Right sidebar with leopard pattern - SOLO DESKTOP */}
        <div className="hidden lg:block w-64 relative overflow-hidden border-l-2" style={{ borderColor: '#8C8C8C' }}>
          <LeopardPattern />
        </div>
      </div>

      {/* Bottom control panel - Windows XP style */}
      <div 
        className="border-t-2 p-4 relative z-10" style={{  backgroundColor: '#ECE9D8', borderColor: '#383839ff'}} >
        <div className="max-w-6xl mx-auto">
          {/* Category navigation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
            {/* TOPS controls */}
            <div className="space-y-2">
              {/* Mobile header - show name in mobile */}
              <div className="lg:hidden text-center text-xs uppercase tracking-wider text-gray-700 mb-2">  TOPS - {currentTop?.name} </div>
              {/* Desktop header - show name in desktop */}
              <div className="hidden lg:block text-center text-xs uppercase tracking-wider text-gray-700 mb-2"> Tops - {currentTop?.name} </div>
              <div className="flex items-center justify-center gap-2">
                <XPButton onClick={firstTop} title="First">
                  <ChevronsLeft className="h-4 w-4" />
                </XPButton>
                <XPButton onClick={prevTop} title="Previous">
                  <ChevronLeft className="h-4 w-4" />
                </XPButton>
                <div 
                  className="px-4 py-2 text-center min-w-[100px] text-sm"
                  style={{
                    backgroundColor: '#f7f7f7',
                    border: '2px solid',
                    borderColor: '#808080 #DFDFDF #DFDFDF #808080'
                  }}
                >
                  {currentTopIndex + 1} / {clothingData.tops.length}
                </div>
                <XPButton onClick={nextTop} title="Next">
                  <ChevronRight className="h-4 w-4" />
                </XPButton>
                <XPButton onClick={lastTop} title="Last">
                  <ChevronsRight className="h-4 w-4" />
                </XPButton>
              </div>
            </div>

            {/* BOTTOMS controls */}
            <div className="space-y-2">
              {/* Mobile header - show name in mobile */}
              <div className="lg:hidden text-center text-xs uppercase tracking-wider text-gray-700 mb-2"> BOTTOMS - {currentBottom?.name} </div>
              {/* Desktop header - show name in desktop */}
              <div className="hidden lg:block text-center text-xs uppercase tracking-wider text-gray-700 mb-2">  Bottoms - {currentBottom?.name}</div>
              <div className="flex items-center justify-center gap-2">
                <XPButton onClick={firstBottom} title="First">
                  <ChevronsLeft className="h-4 w-4" />
                </XPButton>
                <XPButton onClick={prevBottom} title="Previous">
                  <ChevronLeft className="h-4 w-4" />
                </XPButton>
                <div 
                  className="px-4 py-2 text-center min-w-[100px] text-sm"
                  style={{
                    backgroundColor: '#f7f7f7',
                    border: '2px solid',
                    borderColor: '#808080 #DFDFDF #DFDFDF #808080'
                  }}
                >
                  {currentBottomIndex + 1} / {clothingData.bottoms.length}
                </div>
                <XPButton onClick={nextBottom} title="Next">
                  <ChevronRight className="h-4 w-4" />
                </XPButton>
                <XPButton onClick={lastBottom} title="Last">
                  <ChevronsRight className="h-4 w-4" />
                </XPButton>
              </div>
            </div>
          </div>

          {/* Main action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-3 border-t" style={{ borderColor: '#8C8C8C' }}>
            <XPButton large onClick={() => setShowDressMe(true)} primary>
              Dress Me
            </XPButton>
            <XPButton large>
              More
            </XPButton>
          </div>
        </div>
      </div>
    </div>
  );
}

// Windows XP style button component
function XPButton({ 
  children, 
  onClick, 
  title, 
  large = false,
  primary = false
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  title?: string; 
  large?: boolean;
  primary?: boolean;
}) {
  const [isPressed, setIsPressed] = useState(false);

  const baseStyle = {
    backgroundColor: primary ? '#ECE9D8' : '#ECE9D8',
    border: isPressed 
      ? '2px solid' 
      : '2px solid',
    borderColor: isPressed
      ? '#808080 #DFDFDF #DFDFDF #808080'
      : '#DFDFDF #808080 #808080 #DFDFDF',
    borderRadius: '3px',
    boxShadow: isPressed 
      ? 'inset 1px 1px 2px rgba(0,0,0,0.2)' 
      : '1px 1px 0px rgba(255,255,255,0.5)',
    cursor: 'pointer',
    outline: primary ? '1px dotted #000' : 'none',
    outlineOffset: primary ? '-4px' : '0'
  };

  return (
    <button
      onClick={onClick}
      title={title}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`flex items-center justify-center transition-none ${
        large ? 'px-8 py-3 text-base uppercase tracking-wider min-w-[140px]' : 'p-2'
      }`}
      style={baseStyle}
    >
      {children}
    </button>
  );
}