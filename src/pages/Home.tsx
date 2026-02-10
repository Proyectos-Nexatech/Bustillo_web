
import React from 'react';
import { Link } from 'react-router-dom';
import { STATS, SERVICES, ICON_MAP } from '../constants';
import { IMAGES } from '../images';
import { ChevronRight, Award, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Using dvh for better mobile browser support (address bar handling) */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] md:min-h-[calc(100vh-6rem)] md:min-h-[calc(100dvh-6rem)] flex items-center overflow-hidden bg-maroon-corp">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.home.hero} 
            alt="Ingeniería Industrial" 
            className="w-full h-full object-cover grayscale-[20%] contrast-[1.1] opacity-60"
            onError={(e) => {
              // Hide image on error to show the maroon background
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Custom class 'hero-gradient' from index.html for cross-browser stability */}
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full py-12 md:py-0">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-red-bright text-white px-4 py-1 rounded-sm font-black text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> 30 Años de Experiencia
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 leading-none">
              SERVICIOS DE INGENIERIA <br/>
              <span className="text-red-bright">Y MANTENIMIENTO</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-100 mb-10 font-bold uppercase tracking-tight">
              Especialistas en Obras Civiles, Metalmecánicas, Eléctricas e Instrumentacion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/servicios" 
                className="bg-white text-maroon-corp px-8 py-4 rounded-sm font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center group shadow-xl hover:bg-red-bright hover:text-white"
              >
                NUESTROS SERVICIOS <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/proyectos" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-black text-sm uppercase tracking-widest transition-all hover:bg-white/10"
              >
                VER PROYECTOS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white shadow-sm border-b-4 border-maroon-corp hover:border-red-bright transition-colors">
                <div className="text-4xl md:text-5xl font-black text-maroon-corp mb-2">{stat.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
                <div className="absolute -left-10 top-0 w-1 bg-red-bright h-full opacity-50"></div>
              <h2 className="text-3xl md:text-5xl font-black text-maroon-corp mb-8 leading-tight uppercase">
                LIDERAZGO TÉCNICO <br/> Y CALIDAD GARANTIZADA
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                Fundada en 1996, Bustillo Ingeniería SAS ha evolucionado para convertirse en un referente nacional, gestionando proyectos complejos con metodologías PMI y certificaciones internacionales.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-50 text-maroon-corp rounded-sm group-hover:bg-maroon-corp group-hover:text-white transition-colors">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 text-slate-800 uppercase tracking-tighter">Certificaciones ISO</h4>
                    <p className="text-slate-500 text-sm">Sellos 9001, 14001 y 45001 que garantizan excelencia operativa.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-50 text-maroon-corp rounded-sm group-hover:bg-maroon-corp group-hover:text-white transition-colors">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 text-slate-800 uppercase tracking-tighter">Cero Incidentes</h4>
                    <p className="text-slate-500 text-sm">Priorizamos la seguridad de nuestro talento humano en cada proyecto.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 p-4 bg-white shadow-2xl bg-slate-100 min-h-[300px]">
                <img 
                  src={IMAGES.home.team} 
                  alt="Equipo Bustillo" 
                  className="w-full aspect-video object-cover"
                  onError={(e) => {
                    // Hide if missing, keeps the container which has background color
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-maroon-corp -z-0 opacity-10"></div>
              <div className="absolute -top-6 -left-6 bg-red-bright text-white p-6 font-black text-2xl hidden md:block">
                SINCE 1996
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-maroon-corp text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
                <div className="h-1 w-20 bg-red-bright mb-6"></div>
                <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">NUESTRO PORTAFOLIO</h2>
                <p className="text-slate-300 font-medium">
                Ofrecemos una gama completa de servicios especializados para la industria energética, petroquimica oil and gas y minera.
                </p>
            </div>
            <Link to="/servicios" className="text-red-bright font-black text-sm inline-flex items-center hover:text-white transition-colors tracking-widest uppercase">
                VER TODOS LOS SERVICIOS <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
          
          {/* Layout changed from Grid to Flexbox to allow centering of odd items and remove empty gaps */}
          <div className="flex flex-wrap justify-center gap-px bg-white/10">
            {SERVICES.slice(0, 6).map((service) => (
              <div 
                key={service.id} 
                className="bg-maroon-corp p-10 hover:bg-red-bright transition-all duration-300 group w-full md:w-[calc(50%-0.5px)] lg:w-[calc(33.333%-0.67px)]"
              >
                <div className="text-red-bright mb-6 group-hover:text-white">{ICON_MAP[service.icon]}</div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-300 text-sm mb-8 font-medium leading-relaxed group-hover:text-white/80">{service.description}</p>
                <Link to="/servicios" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-maroon-corp transition-all">
                  <ChevronRight size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-maroon-dark/20 skew-x-12 translate-x-1/2 -z-0"></div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f4f4f4] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 border-l-[16px] border-maroon-corp">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-maroon-corp uppercase tracking-tighter">¿TIENE UN PROYECTO?</h2>
              <p className="text-slate-600 font-bold">Contáctenos hoy para recibir una asesoría técnica especializada basada en tres décadas de experiencia.</p>
            </div>
            <Link to="/contacto" className="bg-red-bright text-white px-10 py-5 font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-red-950/20">
              SOLICITAR COTIZACIÓN
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
