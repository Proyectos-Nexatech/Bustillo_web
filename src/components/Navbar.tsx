
import React, { useState } from 'react';
// Use namespace import to resolve "no exported member" errors
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '../images';

const { Link, useLocation } = ReactRouterDOM as any;

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
      className="h-10 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
    />
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

         {/* Desktop Links - Now showing only from 'lg' (1024px) up to avoid crowding on tablets */}
         <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] xl:text-[12px] font-black uppercase tracking-widest transition-all duration-200 ${
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
              className="bg-maroon-corp hover:bg-red-bright text-white px-4 xl:px-6 py-2 rounded-sm font-black text-[11px] xl:text-[12px] uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-red-900/10"
            >
              COTIZAR
            </Link>
            <a
              href="https://valve-quotation.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-bright hover:bg-maroon-corp text-white px-4 xl:px-6 py-2 rounded-sm font-black text-[11px] xl:text-[12px] uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-red-900/10"
            >
              COTIZAR VALVULAS
            </a>
          </div>

         {/* Mobile/Tablet Menu Button - Visible until 'lg' */}
         <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-maroon-corp transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Slide-down Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link: any) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-sm font-black uppercase tracking-widest ${
                  isActive(link.path)
                    ? 'bg-red-50 text-red-bright'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3 space-y-2">
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-maroon-corp text-white py-4 rounded-sm font-black text-xs uppercase tracking-widest"
              >
                SOLICITAR COTIZACIÓN
              </Link>
              <a
                href="https://valve-quotation.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-red-bright text-white py-4 rounded-sm font-black text-xs uppercase tracking-widest"
              >
                COTIZAR VALVULAS
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
