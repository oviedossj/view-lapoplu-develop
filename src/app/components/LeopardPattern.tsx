import React from 'react';

export function LeopardPattern() {
  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <pattern id="leopardPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Base tan/beige color */}
          <rect width="200" height="200" fill="#D4A574"/>
          
          {/* Leopard spots - irregular organic shapes */}
          {/* Row 1 */}
          <path d="M 20 25 Q 18 20 25 18 Q 32 20 30 25 Q 28 30 20 25 Z" fill="#000000" opacity="0.9"/>
          <path d="M 19 24 Q 17 21 23 20 Q 28 21 27 24 Q 25 27 19 24 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 65 15 Q 60 12 68 10 Q 75 12 73 18 Q 70 23 65 15 Z" fill="#000000" opacity="0.9"/>
          <path d="M 64 16 Q 61 14 66 13 Q 71 14 70 17 Q 68 20 64 16 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 120 30 Q 115 25 125 22 Q 135 25 132 32 Q 128 38 120 30 Z" fill="#000000" opacity="0.9"/>
          <path d="M 119 30 Q 116 27 123 25 Q 130 27 128 31 Q 125 35 119 30 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 175 20 Q 172 15 180 14 Q 187 16 185 22 Q 182 27 175 20 Z" fill="#000000" opacity="0.9"/>
          
          {/* Row 2 */}
          <path d="M 40 65 Q 35 58 45 55 Q 53 58 50 67 Q 46 74 40 65 Z" fill="#000000" opacity="0.9"/>
          <path d="M 39 65 Q 36 60 43 58 Q 49 60 47 65 Q 44 70 39 65 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 95 55 Q 90 50 98 48 Q 106 51 103 58 Q 99 64 95 55 Z" fill="#000000" opacity="0.9"/>
          <path d="M 94 56 Q 91 52 96 51 Q 102 53 100 57 Q 97 61 94 56 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 155 70 Q 148 63 160 60 Q 170 64 166 73 Q 161 80 155 70 Z" fill="#000000" opacity="0.9"/>
          <path d="M 154 70 Q 150 65 158 63 Q 165 66 163 71 Q 159 76 154 70 Z" fill="#8B4513" opacity="0.6"/>
          
          {/* Row 3 */}
          <path d="M 15 110 Q 10 105 18 102 Q 26 105 23 112 Q 19 118 15 110 Z" fill="#000000" opacity="0.9"/>
          
          <path d="M 75 100 Q 68 95 78 92 Q 87 96 84 105 Q 79 112 75 100 Z" fill="#000000" opacity="0.9"/>
          <path d="M 74 101 Q 70 97 76 95 Q 83 97 81 103 Q 77 108 74 101 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 130 115 Q 125 108 135 105 Q 144 109 140 117 Q 135 124 130 115 Z" fill="#000000" opacity="0.9"/>
          <path d="M 129 115 Q 126 110 133 108 Q 139 110 137 115 Q 133 120 129 115 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 185 105 Q 180 100 188 98 Q 196 101 193 108 Q 189 114 185 105 Z" fill="#000000" opacity="0.9"/>
          
          {/* Row 4 */}
          <path d="M 50 145 Q 43 138 53 135 Q 62 139 58 148 Q 53 155 50 145 Z" fill="#000000" opacity="0.9"/>
          <path d="M 49 145 Q 45 140 51 138 Q 57 140 55 146 Q 51 151 49 145 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 110 155 Q 105 148 115 145 Q 124 149 120 157 Q 115 164 110 155 Z" fill="#000000" opacity="0.9"/>
          <path d="M 109 155 Q 106 150 113 148 Q 119 150 117 155 Q 113 160 109 155 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 165 140 Q 158 135 168 132 Q 177 136 173 144 Q 168 151 165 140 Z" fill="#000000" opacity="0.9"/>
          
          {/* Row 5 */}
          <path d="M 25 185 Q 20 178 30 175 Q 38 179 35 187 Q 30 194 25 185 Z" fill="#000000" opacity="0.9"/>
          <path d="M 24 185 Q 21 180 28 178 Q 34 180 32 185 Q 28 190 24 185 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 85 175 Q 78 170 88 167 Q 97 171 93 179 Q 88 186 85 175 Z" fill="#000000" opacity="0.9"/>
          <path d="M 84 176 Q 80 172 86 170 Q 92 172 90 177 Q 86 182 84 176 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 145 190 Q 138 183 148 180 Q 157 184 153 192 Q 148 199 145 190 Z" fill="#000000" opacity="0.9"/>
          <path d="M 144 190 Q 140 185 146 183 Q 152 185 150 190 Q 146 195 144 190 Z" fill="#8B4513" opacity="0.6"/>
          
          <path d="M 190 180 Q 185 175 193 173 Q 201 176 198 183 Q 194 189 190 180 Z" fill="#000000" opacity="0.9"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#leopardPattern)"/>
    </svg>
  );
}
