
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '../images';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'HSE', path: '/hse' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Updated Image Logo Component
  const Logo = () => (
    <img 
      src={IMAGES.logo} 
      alt="Bustillo Ingeniería SAS" 
      className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
    />
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] font-black uppercase tracking-widest transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-red-bright border-b-2 border-red-bright'
                    : 'text-slate-600 hover:text-maroon-corp'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-maroon-corp hover:bg-red-bright text-white px-6 py-2 rounded-sm font-black text-[12px] uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-red-900/10"
            >
              COTIZAR
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-maroon-corp transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-sm font-black uppercase tracking-widest ${
                  isActive(link.path)
                    ? 'bg-red-50 text-red-bright'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-maroon-corp text-white py-4 rounded-sm font-black text-xs uppercase tracking-widest"
              >
                SOLICITAR COTIZACIÓN
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
