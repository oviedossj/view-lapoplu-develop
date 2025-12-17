import React, { useState, useEffect } from 'react';
import { VirtualWardrobe } from './components/VirtualWardrobe';
import { HomePage } from './components/HomePage';
import { Button } from './components/ui/button';
import { Home } from 'lucide-react';

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

// Datos de ejemplo - Reemplaza estas URLs con tus propias imágenes PNG
const defaultClothingData: ClothingData = {
  tops: [
    {
      id: "top-001",
      name: "Camiseta LA POPLU Negra",
      image: "/clothing/tops/top-001.png",
      category: "top",
      color: "black",
      compatibleWith: ["bottom-001", "bottom-002", "bottom-003"]
    },
    {
      id: "top-002",
      name: "Camiseta LA POPLU Blanca",
      image: "/clothing/tops/top-002.png",
      category: "top",
      color: "white",
      compatibleWith: ["bottom-001", "bottom-002", "bottom-003"]
    },
    {
      id: "top-003",
      name: "Hoodie LA POPLU Magenta",
      image: "/clothing/tops/top-003.png",
      category: "top",
      color: "magenta",
      compatibleWith: ["bottom-001", "bottom-002"]
    }
  ],
  bottoms: [
    {
      id: "bottom-001",
      name: "Pantalón Negro",
      image: "/clothing/bottoms/bottom-001.png",
      category: "bottom",
      color: "black",
      compatibleWith: ["top-001", "top-002", "top-003"]
    },
    {
      id: "bottom-002",
      name: "Falda Cuadros",
      image: "/clothing/bottoms/bottom-002.png",
      category: "bottom",
      color: "pattern",
      compatibleWith: ["top-001", "top-002"]
    },
    {
      id: "bottom-003",
      name: "Jeans Azul",
      image: "/clothing/bottoms/bottom-003.png",
      category: "bottom",
      color: "blue",
      compatibleWith: ["top-001", "top-002"]
    }
  ],
  shoes: []
};

function App() {
  const [clothingData, setClothingData] = useState<ClothingData>(defaultClothingData);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'wardrobe'>('home');

  useEffect(() => {
    // Try to load clothing data from JSON, fallback to default data
    fetch('/clothing-data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Using default data');
        }
        return response.json();
      })
      .then(data => {
        setClothingData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Using default clothing data');
        // Use default data
        setClothingData(defaultClothingData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Cargando wardrobe...</p>
        </div>
      </div>
    );
  }

  if (currentView === 'home') {
    return <HomePage onNavigateToWardrobe={() => setCurrentView('wardrobe')} />;
  }

  return (
    <div className="relative">
      {/* Back to home button */}
      <Button
        onClick={() => setCurrentView('home')}
        className="absolute top-4 left-4 z-50 bg-gray-900 hover:bg-gray-800 border border-gray-700"
        size="sm"
      >
        <Home className="mr-2 h-4 w-4" />
        Inicio
      </Button>
      <VirtualWardrobe clothingData={clothingData} />
    </div>
  );
}

export default App;