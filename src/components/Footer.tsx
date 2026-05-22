
import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../images';

const Footer: React.FC = () => {
  // Updated to use the image logo (same as Navbar)
  // Added bg-white and padding to ensure visibility on dark background
  const Logo = () => (
    <img
      src={IMAGES.logo}
      alt="Bustillo Ingeniería SAS"
      className="h-16 w-auto object-contain bg-white p-2 rounded-sm"
    />
  );

  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12 border-b border-white/5 pb-12">
          {/* Brand Info with Image Logo */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <div className="mb-8">
              <Link to="/" className="inline-block transition-transform hover:scale-105">
                <Logo />
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Líderes en soluciones de ingeniería con 30 años de experiencia, garantizando seguridad, calidad y sostenibilidad en cada proyecto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-sm hover:bg-maroon-corp transition-all"><Linkedin size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-sm hover:bg-maroon-corp transition-all"><Facebook size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-sm hover:bg-maroon-corp transition-all"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-bright mb-8">Navegación</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-bold uppercase tracking-tight">
              <li><Link to="/" className="hover:text-red-bright transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-red-bright transition-colors">Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-red-bright transition-colors">Servicios</Link></li>
              <li><Link to="/proyectos" className="hover:text-red-bright transition-colors">Nuestras Obras</Link></li>
              <li><Link to="/hse" className="hover:text-red-bright transition-colors">HSE</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-bright mb-8">Nuestras Sedes</h4>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-maroon-corp shrink-0" size={20} />
                <div className="text-sm text-slate-400">
                  <span className="text-white block font-black uppercase text-[10px] tracking-widest mb-1">Montelíbano</span>
                  Km 3 Vía CMSA, Córdoba.
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-maroon-corp shrink-0" size={20} />
                <div className="text-sm text-slate-400">
                  <span className="text-white block font-black uppercase text-[10px] tracking-widest mb-1">Cartagena</span>
                  Bellavista Cra 56B #7A-69, Bolívar.
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-bright mb-8">Contacto</h4>
            <div className="space-y-5 text-sm font-bold uppercase tracking-tight text-slate-300">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/5 flex items-center justify-center rounded-sm">
                  <Phone className="text-maroon-corp" size={16} />
                </div>
                <span>320 710 6148</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/5 flex items-center justify-center rounded-sm mt-0.5">
                  <Mail className="text-maroon-corp" size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="whitespace-nowrap lowercase text-sm tracking-normal mb-1">gerencia@bustilloingenieria.com</span>
                  <span className="whitespace-nowrap lowercase text-sm tracking-normal mb-1">proyectos.cartagena@bustilloingenieria.com</span>
                  <span className="whitespace-nowrap lowercase text-sm tracking-normal">comercial@bustilloingenieria.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Bustillo Ingeniería SAS | Excelencia Técnica en Construcción
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
