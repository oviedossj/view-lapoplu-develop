import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Twitter, X } from 'lucide-react';
import { Logo } from './Logo';
import clothingData from '../../data/clothingData';

interface HomePageProps {
  onNavigateToWardrobe: () => void;
}

// Tipos para el catálogo
type ClothingItem = {
  id: string;
  name: string;
  image: string;
  category: string;
  color: string;
  compatibleWith: string[];
};

type CatalogType = 'tops' | 'bottoms' | null;

export function HomePage({ onNavigateToWardrobe }: HomePageProps) {
  const [showCatalog, setShowCatalog] = useState<CatalogType>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  // Función para mostrar el catálogo
  const openCatalog = (type: CatalogType) => {
    setShowCatalog(type);
  };

  // Función para cerrar el catálogo
  const closeCatalog = () => {
    setShowCatalog(null);
  };

  // Obtener los items según el tipo
  const getCatalogItems = (): ClothingItem[] => {
    if (!showCatalog) return [];
    return clothingData[showCatalog] || [];
  };

  const catalogItems = getCatalogItems();

  const handleSubmit = () => {
    console.log('Mensaje enviado:', contactForm);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-[#E91EA5] transition-colors uppercase text-sm tracking-wider">Inicio</a>
              <a href="#catalog" className="hover:text-[#E91EA5] transition-colors uppercase text-sm tracking-wider">Catálogo</a>
              <a href="#about" className="hover:text-[#0FD9ED] transition-colors uppercase text-sm tracking-wider">Nosotros</a>
              <a href="#collaborations" className="hover:text-[#0FD9ED] transition-colors uppercase text-sm tracking-wider">Colaboraciones</a>
              <a href="#contact" className="hover:text-[#E91EA5] transition-colors uppercase text-sm tracking-wider">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0FD9ED] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E91EA5] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-lg text-gray-500 mt-2">El Cuerpo viste para ser visto</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <Button
              onClick={onNavigateToWardrobe}
              size="lg"
              className="bg-gradient-to-r from-[#0FD9ED] to-[#E91EA5] hover:from-[#0ec9dd] hover:to-[#d91a95] text-white px-12 py-6 text-lg"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Jugar con la Coleccion
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4 border-t border-gray-800 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-4 text-center uppercase tracking-wider">Nuestra Colección</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Descubre las últimas tendencias en moda urbana. Cada pieza está diseñada para destacar tu personalidad única.
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Tops */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-[#0FD9ED] transition-all duration-300">
                <div className="h-64 bg-gradient-to-b from-[#0FD9ED]/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👕</div>
                    <h3 className="text-2xl uppercase tracking-wider text-[#0FD9ED]">Tops</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4">Camperas, hoodies, tops y más.</p>
                  <Button 
                    onClick={() => openCatalog('tops')}
                    className="w-full bg-[#0FD9ED]/20 hover:bg-[#0FD9ED]/30 border border-[#0FD9ED] text-[#0FD9ED]"
                  >
                    Ver Tops
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottoms */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-[#E91EA5] transition-all duration-300">
                <div className="h-64 bg-gradient-to-b from-[#E91EA5]/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👖</div>
                    <h3 className="text-2xl uppercase tracking-wider text-[#E91EA5]">Bottoms</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4">Pantalones, faldas, shorts..</p>
                  <Button 
                    onClick={() => openCatalog('bottoms')}
                    className="w-full bg-[#E91EA5]/20 hover:bg-[#E91EA5]/30 border border-[#E91EA5] text-[#E91EA5]"
                  >
                    Ver Bottoms
                  </Button>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-purple-400 transition-all duration-300">
                <div className="h-64 bg-gradient-to-b from-purple-500/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✨</div>
                    <h3 className="text-2xl uppercase tracking-wider text-purple-400">Accesorios</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4">Complementa tu look con nosotros.</p>
                  <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400 text-purple-400">
                    Próximamente
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal del Catálogo */}
      {showCatalog && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-3xl uppercase tracking-wider">
                {showCatalog === 'tops' ? (
                  <span className="text-[#0FD9ED]">Tops</span>
                ) : (
                  <span className="text-[#E91EA5]">Bottoms</span>
                )}
              </h2>
              <button
                onClick={closeCatalog}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="overflow-y-auto p-6 flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {catalogItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-800 border-2 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    style={{
                      borderColor: showCatalog === 'tops' ? 'rgba(15, 217, 237, 0.3)' : 'rgba(233, 30, 165, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = showCatalog === 'tops' ? '#0FD9ED' : '#E91EA5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = showCatalog === 'tops' ? 'rgba(15, 217, 237, 0.3)' : 'rgba(233, 30, 165, 0.3)';
                    }}
                  >
                    <div className="aspect-square bg-gray-900 flex items-center justify-center p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23374151" width="200" height="200"/%3E%3Ctext fill="%239CA3AF" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-center text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500 text-center mt-1">{item.id}</p>
                    </div>
                  </div>
                ))}
              </div>

              {catalogItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No hay productos disponibles en esta categoría.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Brand Identity Section */}
      <section id="about" className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center uppercase tracking-wider">Sobre LA POPLU</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl mb-4 text-[#E91EA5]">Nuestra Historia</h3>
              <p className="text-gray-400 mb-4">
                LA POPLU nace de la pasión por la moda urbana y el deseo de crear prendas que reflejen la personalidad única de cada persona. 
              </p>
              <p className="text-gray-400 mb-4">
                Combinamos diseños audaces con colores vibrantes para crear una identidad visual inconfundible. Cada colección es una declaración de estilo y actitud.
              </p>
              <p className="text-gray-400">
                Nuestra misión es democratizar la moda, haciendo que el estilo de calidad sea accesible para todos.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <ImageWithFallback
                src="utils/paleta-color.png"
                alt="Paleta de color LA POPLU"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 order-2 md:order-1">
              <ImageWithFallback
                src="utils/packaging.png"
                alt="Packaging LA POPLU"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl mb-4 text-[#0FD9ED]">Packaging Premium</h3>
              <p className="text-gray-400 mb-4">
                La experiencia LA POPLU comienza desde el momento en que recibes tu pedido. Nuestro packaging está diseñado para sorprender y deleitar.
              </p>
              <p className="text-gray-400">
                Cada caja es una obra de arte, reflejando los valores de calidad y cuidado que ponemos en cada prenda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section id="collaborations" className="py-20 px-4 border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl mb-6 uppercase tracking-wider">Colaboraciones</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            ¿Eres artista, influencer o marca? Únete a LA POPLU y creemos algo increíble juntos.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl mb-3 text-[#E91EA5]">Artistas</h3>
              <p className="text-gray-400 text-sm">
                Diseña colecciones exclusivas que reflejen tu visión creativa.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl mb-3 text-[#0FD9ED]">Influencers</h3>
              <p className="text-gray-400 text-sm">
                Colabora con nosotros y crea contenido que inspire a tu audiencia.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl mb-3 text-purple-400">Marcas</h3>
              <p className="text-gray-400 text-sm">
                Partnerships estratégicos que beneficien a ambas comunidades.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#E91EA5] to-[#0FD9ED] hover:from-[#d91a95] hover:to-[#0ec9dd] text-white px-12 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Colaboración
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12 text-center uppercase tracking-wider">Contactanos</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#E91EA5] mt-1" />
                <div>
                  <h3 className="mb-2">Dirección</h3>
                  <p className="text-gray-400">Cerro Famatina 1855</p>
                  <p className="text-gray-400">Florencio Varela, Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#0FD9ED] mt-1" />
                <div>
                  <h3 className="mb-2">WhatsApp</h3>
                  <p className="text-gray-400">+54 9 11 2527 7548</p>
                  <p className="text-gray-400 text-sm">Lun a Vie · 9 a 18 hs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="h-6 w-6 text-[#E91EA5] mt-1" />
                <div>
                  <h3 className="mb-2">Instagram</h3>
                  <a
                    href="https://www.instagram.com/la.poplu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#E91EA5] transition-colors block"
                  >
                    @la.poplu
                  </a>
                  <p className="text-gray-400 text-sm">Seguinos o escaneá el QR</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 uppercase tracking-wider text-sm">Playlist oficial</h3>
                <div className="rounded-lg overflow-hidden border border-gray-800">
                  <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/5DCyL7mIjw1sqIeRW5Z3Zq?utm_source=generator"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Escuchá lo que suena en LA POPLU mientras navegás.</p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl mb-4">Mandanos un mensaje</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-[#E91EA5]"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-[#0FD9ED]"
                />
                <textarea
                  placeholder="Tu mensaje"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-[#E91EA5] resize-none"
                />
                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#E91EA5] to-[#0FD9ED] hover:from-[#d91a95] hover:to-[#0ec9dd]"
                >
                  Enviar mensaje
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Logo size="md" className="mb-4" />
              <p className="text-sm text-gray-400 mb-4">
                Moda urbana argentina que define tu estilo. Calle, actitud y flow.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#E91EA5] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#0FD9ED] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#E91EA5] transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 uppercase tracking-wider text-sm">Comprar</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#0FD9ED] transition-colors">Catálogo</a></li>
                <li><a href="#" className="hover:text-[#0FD9ED] transition-colors">Lanzamientos</a></li>
                <li><a href="#" className="hover:text-[#0FD9ED] transition-colors">Promos</a></li>
                <li><a href="#" className="hover:text-[#0FD9ED] transition-colors">Virtual Wardrobe</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 uppercase tracking-wider text-sm">Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#E91EA5] transition-colors">Quiénes somos</a></li>
                <li><a href="#" className="hover:text-[#E91EA5] transition-colors">Envíos a todo el país</a></li>
                <li><a href="#" className="hover:text-[#E91EA5] transition-colors">Cambios y devoluciones</a></li>
                <li><a href="#" className="hover:text-[#E91EA5] transition-colors">Términos y condiciones</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-800">
            <p>© 2024 LA POPLU. Hecho en Argentina.</p>
            <p className="mt-2">Florencio Varela · Buenos Aires · Argentina</p>
          </div>
        </div>
      </footer>
    </div>
  );
}