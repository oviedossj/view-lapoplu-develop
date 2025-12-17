import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { LeopardPattern } from './LeopardPattern';

interface ClothingItem {
  id: string;
  name: string;
  image: string;
  category: string;
  color: string;
  compatibleWith: string[];
}

interface DressMeProps {
  currentTop: ClothingItem;
  currentBottom: ClothingItem;
  onBack: () => void;
}

export function DressMe({ currentTop, currentBottom, onBack }: DressMeProps) {
  return (
    <div 
      className="min-h-screen text-black"
      style={{
        backgroundColor: '#ECE9D8' // Windows XP beige
      }}
    >
      {/* Windows XP style title bar */}
      <div 
        className="h-8 flex items-center px-2"
        style={{
          background: 'linear-gradient(to bottom, #0997FF 0%, #0053EE 50%, #0050EE 50%, #06F 100%)',
          borderBottom: '1px solid #0050EE'
        }}
      >
        <div className="flex items-center gap-2 flex-1">
          <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
          <span className="text-white text-sm">Dress Me - LA POPLU Outfit Builder</span>
        </div>
        <div className="flex gap-1">
          <div className="w-5 h-5 bg-[#316AC5] hover:bg-[#4178C7] flex items-center justify-center text-white text-xs">_</div>
          <div className="w-5 h-5 bg-[#316AC5] hover:bg-[#4178C7] flex items-center justify-center text-white text-xs">□</div>
          <div 
            className="w-5 h-5 bg-[#D93831] hover:bg-[#E14842] flex items-center justify-center text-white text-xs cursor-pointer"
            onClick={onBack}
          >
            ×
          </div>
        </div>
      </div>

      <div className="flex" style={{ height: 'calc(100vh - 32px)' }}>
        {/* Left sidebar with leopard pattern */}
        <div className="w-64 relative overflow-hidden border-r-2" style={{ borderColor: '#8C8C8C' }}>
          <LeopardPattern />
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="w-full max-w-3xl">
            {/* Window container */}
            <div 
              className="p-6"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid',
                borderColor: '#DFDFDF #808080 #808080 #DFDFDF'
              }}
            >
              <div 
                className="mb-4 px-3 py-2 text-center"
                style={{
                  background: 'linear-gradient(to bottom, #0997FF 0%, #0053EE 100%)',
                  color: 'white',
                  borderRadius: '3px',
                  border: '1px solid #0050EE'
                }}
              >
                YOUR OUTFIT
              </div>

              {/* Top section */}
              <div className="mb-6">
                <div 
                  className="p-6 min-h-[280px] flex items-center justify-center relative"
                  style={{
                    backgroundColor: '#F0F0F0',
                    border: '2px solid',
                    borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                    boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  <ImageWithFallback
                    src={currentTop.image}
                    alt={currentTop.name}
                    className="max-h-[240px] w-auto mx-auto object-contain"
                  />
                  
                  {/* Arrow and label */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                    <div 
                      className="text-right p-2 text-xs"
                      style={{
                        backgroundColor: '#FFFFCC',
                        border: '1px solid #808080'
                      }}
                    >
                      <p className="text-gray-600 uppercase">Top</p>
                      <p className="font-semibold">{currentTop.name}</p>
                      <p className="text-[#0053EE] mt-1">ID: {currentTop.id}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-[#0053EE]" />
                  </div>
                </div>
              </div>

              {/* Bottom section */}
              <div className="mb-6">
                <div 
                  className="p-6 min-h-[280px] flex items-center justify-center relative"
                  style={{
                    backgroundColor: '#F0F0F0',
                    border: '2px solid',
                    borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                    boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  <ImageWithFallback
                    src={currentBottom.image}
                    alt={currentBottom.name}
                    className="max-h-[240px] w-auto mx-auto object-contain"
                  />
                  
                  {/* Arrow and label */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                    <div 
                      className="text-right p-2 text-xs"
                      style={{
                        backgroundColor: '#FFFFCC',
                        border: '1px solid #808080'
                      }}
                    >
                      <p className="text-gray-600 uppercase">Bottom</p>
                      <p className="font-semibold">{currentBottom.name}</p>
                      <p className="text-[#E91EA5] mt-1">ID: {currentBottom.id}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-[#E91EA5]" />
                  </div>
                </div>
              </div>

              {/* Compatibility check */}
              <div 
                className="mb-6 p-3 text-center text-sm"
                style={{
                  backgroundColor: currentTop.compatibleWith.includes(currentBottom.id) ? '#CCFFCC' : '#FFFFCC',
                  border: '1px solid #808080'
                }}
              >
                {currentTop.compatibleWith.includes(currentBottom.id) ? (
                  <p className="text-green-700">✓ Combinación compatible</p>
                ) : (
                  <p className="text-yellow-700">⚠️ Combinación experimental</p>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 justify-center">
                <XPButton primary>
                  Save Outfit
                </XPButton>
                <XPButton onClick={onBack}>
                  Create Another
                </XPButton>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar with leopard pattern */}
        <div className="w-64 relative overflow-hidden border-l-2" style={{ borderColor: '#8C8C8C' }}>
          <LeopardPattern />
        </div>
      </div>
    </div>
  );
}

// Windows XP style button
function XPButton({ 
  children, 
  onClick, 
  primary = false
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  primary?: boolean;
}) {
  const [isPressed, setIsPressed] = React.useState(false);

  const baseStyle = {
    backgroundColor: '#ECE9D8',
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
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className="px-8 py-3 text-sm uppercase tracking-wider min-w-[160px] transition-none"
      style={baseStyle}
    >
      {children}
    </button>
  );
}