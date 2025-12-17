import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Logo } from './Logo';
// import colorPaletteImg from 'src/assets/41176e103ab5d6988d96688e755af21d79fbb1e2.png';
// import packagingImg from '../assets/fb4edbbd5742abc86facf7c01fe8c9af68115bf1.png';
// import paletteImg from '@/assets/41176e103ab5d6988d96688e755af21d79fbb1e2.png';
// import packagingImg from '@/assets/fb4edbbd5742abc86facf7c01fe8c9af68115bf1.png';

interface HomePageProps {
  onNavigateToWardrobe: () => void;
}

export function HomePage({ onNavigateToWardrobe }: HomePageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo className="text-3xl" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-[#E91EA5] transition-colors uppercase text-sm tracking-wider">Inicio</a>
              <a href="#catalog" className="hover:text-[#E91EA5] transition-colors uppercase text-sm tracking-wider">Catálogo</a>
              <a href="#about" className="hover:text-[#0FD9ED] transition-colors uppercase text-sm tracking-wider">Nosotros</a>
              <a href="#collaborations" className="hover:text-[#0FD9ED] transition-colors uppercase text-sm tracking-wider">Colaboraciones</a>
              <a href="#contact" className="hover:text-[#E91EA5] transition-colors uppercase text-sm tracking-wider">Contacto</a>
            </div>

            <Button
              onClick={onNavigateToWardrobe}
              className="bg-[#E91EA5] hover:bg-[#c91890] text-white"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Virtual Wardrobe
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0FD9ED] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E91EA5] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-12">
            <Logo className="text-9xl justify-center mb-6" />
            <p className="text-2xl text-gray-400 tracking-widest uppercase">Desliza y Brilla</p>
            <p className="text-lg text-gray-500 mt-2">Moda urbana con actitud</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <Button
              onClick={onNavigateToWardrobe}
              size="lg"
              className="bg-gradient-to-r from-[#0FD9ED] to-[#E91EA5] hover:from-[#0ec9dd] hover:to-[#d91a95] text-white px-12 py-6 text-lg"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Prueba Virtual Wardrobe
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#0FD9ED] text-[#0FD9ED] hover:bg-[#0FD9ED]/10 px-12 py-6 text-lg"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Colección
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
                  <p className="text-gray-400 text-sm mb-4">Camisetas, hoodies, chaquetas y más. Encuentra tu estilo perfecto.</p>
                  <Button className="w-full bg-[#0FD9ED]/20 hover:bg-[#0FD9ED]/30 border border-[#0FD9ED] text-[#0FD9ED]">
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
                  <p className="text-gray-400 text-sm mb-4">Pantalones, faldas, shorts. Comodidad y estilo en cada paso.</p>
                  <Button className="w-full bg-[#E91EA5]/20 hover:bg-[#E91EA5]/30 border border-[#E91EA5] text-[#E91EA5]">
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
                  <p className="text-gray-400 text-sm mb-4">Complementa tu look con nuestros accesorios exclusivos.</p>
                  <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400 text-purple-400">
                    Ver Accesorios
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                src="src/assets/41176e103ab5d6988d96688e755af21d79fbb1e2.png"
                alt="Paleta de color LA POPLU"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 order-2 md:order-1">
              <ImageWithFallback
                src="src/assets/fb4edbbd5742abc86facf7c01fe8c9af68115bf1.png"
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
          <h2 className="text-4xl mb-12 text-center uppercase tracking-wider">Contáctanos</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#E91EA5] mt-1" />
                <div>
                  <h3 className="mb-2">Dirección</h3>
                  <p className="text-gray-400">Calle de la Moda 123</p>
                  <p className="text-gray-400">Madrid, España 28001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#0FD9ED] mt-1" />
                <div>
                  <h3 className="mb-2">Teléfono</h3>
                  <p className="text-gray-400">+34 912 345 678</p>
                  <p className="text-gray-400 text-sm">Lun-Vie 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#E91EA5] mt-1" />
                <div>
                  <h3 className="mb-2">Email</h3>
                  <p className="text-gray-400">info@lapoplu.com</p>
                  <p className="text-gray-400">colaboraciones@lapoplu.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl mb-4">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-[#E91EA5]"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-[#0FD9ED]"
                />
                <textarea
                  placeholder="Tu mensaje"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-[#E91EA5] resize-none"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-[#E91EA5] to-[#0FD9ED] hover:from-[#d91a95] hover:to-[#0ec9dd]">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Logo className="text-3xl mb-4" />
              <p className="text-sm text-gray-400 mb-4">
                Moda urbana que define tu estilo. Desliza y brilla con LA POPLU.
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
              <h4 className="mb-4 uppercase tracking-wider text-sm">Compra</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#0FD9ED] transition-colors">Catálogo</a></li>
                <li><a href="#" className="hover:text-[#0FD9ED] transition-colors">Nuevos Lanzamientos</a></li>
                <li><a href="#" className="hover:text-[#0FD9ED] transition-colors">Ofertas</a></li>
                <li><a href="#" className="hover:text-[#0FD9ED] transition-colors">Virtual Wardrobe</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 uppercase tracking-wider text-sm">Información</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#E91EA5] transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-[#E91EA5] transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-[#E91EA5] transition-colors">Devoluciones</a></li>
                <li><a href="#" className="hover:text-[#E91EA5] transition-colors">Términos y Condiciones</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-800">
            <p>© 2024 LA POPLU. Todos los derechos reservados.</p>
            <p className="mt-2">Calle de la Moda 123, Madrid, España 28001 | +34 912 345 678</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
