// DressMe.tsx
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
    <div>
      {/* Windows XP style title bar */}
      <div 
        className="h-8 flex items-center px-2"
        style={{
          background: 'linear-gradient(to bottom, #0f1113ff 0%, #0b0c0dff 100%)',
          color: 'white',
          borderRadius: '3px 3px 0 0',
          border: '1px solid #0b0b0cff'
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

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-32px)]">
        {/* Left sidebar with leopard pattern - hidden on mobile */}
        <div className="hidden md:block w-80 relative overflow-hidden border-r-2" style={{ borderColor: '#8C8C8C' }}>
          <LeopardPattern />
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 md:p-6 flex justify-center">
          <div className="w-full max-w-3xl">
            {/* Window container */}
            <div 
              className="p-6"
              style={{
                backgroundColor: '#f7f7f7',
                border: '2px solid',
                borderColor: '#DFDFDF #808080 #808080 #DFDFDF'
              }}
            >
              <div 
                className="mb-4 px-3 py-2 text-center"
                style={{
                  background: 'linear-gradient(to bottom, #0f1113ff 0%, #0b0c0dff 100%)',
                  color: 'white',
                  borderRadius: '3px 3px 0 0',
                  border: '1px solid #0b0b0cff'
                }}
              >
                YOUR OUTFIT
              </div>

              {/* Top section - FIXED HEIGHT RESPONSIVE */}
              <div className="mb-6">
                <div 
                  className="
                    p-3
                    flex
                    items-center
                    justify-center
                    relative
                    h-[240px]
                    sm:h-[280px]
                    md:h-[320px]
                  "
                  style={{
                    backgroundColor: '#f7f7f7',
                    border: '2px solid',
                    borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                    boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  <ImageWithFallback
                    src={currentTop.image}
                    alt={currentTop.name}
                    className="max-h-full max-w-full object-contain"
                  />
                  
                  {/* Arrow and label - MOBILE FIX */}
                  <div className="absolute right-2 bottom-2 flex items-center gap-2 md:top-1/2 md:-translate-y-1/2 md:right-4">
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

              {/* Bottom section - FIXED HEIGHT RESPONSIVE */}
              <div className="mb-6">
                <div 
                  className="
                    p-3
                    flex
                    items-center
                    justify-center
                    relative
                    h-[240px]
                    sm:h-[280px]
                    md:h-[320px]
                  "
                  style={{
                    backgroundColor: '#f7f7f7',
                    border: '2px solid',
                    borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                    boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  <ImageWithFallback
                    src={currentBottom.image}
                    alt={currentBottom.name}
                    className="max-h-full max-w-full object-contain"
                  />
                  
                  {/* Arrow and label - MOBILE FIX */}
                  <div className="absolute right-2 bottom-2 flex items-center gap-2 md:top-1/2 md:-translate-y-1/2 md:right-4">
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

        {/* Right sidebar with leopard pattern - hidden on mobile */}
        <div className="hidden md:block w-80 relative overflow-hidden border-l-2" style={{ borderColor: '#8C8C8C' }}>
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