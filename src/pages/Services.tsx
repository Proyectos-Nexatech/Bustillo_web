
// Update March 12, 2026 - Management Section Redesign
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { IMAGES } from '../images';
import { 
  Check, 
  Users, 
  Map, 
  Calendar, 
  BarChart3, 
  Play, 
  Compass, 
  Search, 
  CheckCircle2 
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header - Fixed to Maroon Corp to match other pages */}
      <section className="bg-maroon-corp py-16 md:py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="h-1 w-16 md:w-20 bg-red-bright mb-6"></div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            PORTAFOLIO DE <br/><span className="text-red-bright">SERVICIOS</span>
          </h1>
          <p className="text-red-100 text-base md:text-lg max-w-3xl font-bold uppercase tracking-tight">
            Soluciones técnicas de alto nivel para los desafíos más complejos de la ingeniería moderna en Colombia.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-32">
            {SERVICES.map((service, index) => {
              // Map service IDs to the keys in IMAGES.services
              const serviceKey = service.id as keyof typeof IMAGES.services;
              const imageSrc = IMAGES.services[serviceKey] || IMAGES.services.civil; // Fallback

              return (
                <div 
                  key={service.id} 
                  className={`flex flex-col lg:flex-row gap-10 md:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-4 mb-6 md:mb-8">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-maroon-corp text-white rounded-sm flex items-center justify-center shadow-lg">
                          {ICON_MAP[service.icon]}
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Servicio Especializado</span>
                    </div>
                    <h2 className="text-2xl md:text-5xl font-black text-maroon-corp mb-4 md:mb-6 uppercase tracking-tighter">{service.title}</h2>
                    <p className="text-slate-600 text-lg md:text-xl font-medium mb-8 md:mb-10 leading-relaxed border-l-4 border-red-bright pl-6 md:pl-8">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 md:p-4 bg-[#f9f9f9] border-b-2 border-slate-200">
                          <Check className="text-red-bright shrink-0" size={16} />
                          <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-tighter">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 relative">
                    <div className="p-2 md:p-4 bg-white shadow-xl relative z-10 overflow-hidden border border-slate-100">
                      <img 
                        src={imageSrc} 
                        alt={service.title} 
                        className="w-full h-[300px] md:h-[450px] object-cover hover:scale-110 transition-transform duration-[2000ms]"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <span className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 text-[100px] md:text-[180px] font-black text-slate-100 -z-0 leading-none pointer-events-none opacity-50">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16 md:py-24 bg-maroon-corp text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
                  GESTIÓN DE <br/> PROYECTOS <br/>E INTERVENTORÍA
                </h2>
              </div>

              <p className="text-red-100 text-sm md:text-base mb-8 md:mb-10 leading-relaxed font-bold border-l-4 border-red-bright pl-6 md:pl-8">
                Operamos bajo los principios de la metodología del PMI, apoyándonos en avanzadas herramientas digitales y software especializado que garantizan un riguroso seguimiento y control integral de los proyectos. Nuestra gestión está enfocada en la entrega a tiempo, dentro del presupuesto y en la generación proactiva de alertas.
              </p>

              <div className="space-y-4">
                {/* List items transformed into colored badges */}
                <div className="flex items-center bg-white/5 border-l-[12px] border-white p-4 group hover:bg-white/10 transition-all rounded-r-md">
                   <div className="mr-5 text-red-500 group-hover:scale-110 transition-transform">
                     <Map size={24} />
                   </div>
                   <div className="flex-1">
                     <span className="text-[10px] font-black uppercase text-red-400 block mb-0.5">Alcance:</span>
                     <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight">Estructura de Desglose de Trabajo (WBS) y Control de Entregables.</p>
                   </div>
                </div>

                <div className="flex items-center bg-white/5 border-l-[12px] border-white p-4 group hover:bg-white/10 transition-all rounded-r-md">
                   <div className="mr-5 text-orange-400 group-hover:scale-110 transition-transform">
                     <Calendar size={24} />
                   </div>
                   <div className="flex-1">
                     <span className="text-[10px] font-black uppercase text-orange-400 block mb-0.5">Tiempo:</span>
                     <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight">Planificación Integrada de Cronograma y Seguimiento de Curva S.</p>
                   </div>
                </div>

                <div className="flex items-center bg-white/5 border-l-[12px] border-white p-4 group hover:bg-white/10 transition-all rounded-r-md">
                   <div className="mr-5 text-blue-400 group-hover:scale-110 transition-transform">
                     <BarChart3 size={24} />
                   </div>
                   <div className="flex-1">
                     <span className="text-[10px] font-black uppercase text-blue-400 block mb-0.5">Costo:</span>
                     <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight">Análisis y Control Presupuestario con Valor Ganado.</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative group">
                <div className="relative p-2 bg-white/10 border border-white/20 shadow-2xl">
                    <img 
                        src={IMAGES.services.management} 
                        alt="Gestión de Proyectos - Control Total" 
                        className="w-full h-auto min-h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        onError={(e) => { 
                            e.currentTarget.style.opacity = '0.5'; 
                        }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                    
                    {/* Overlay: Ciclos del Proyecto */}
                    <div className="absolute bottom-4 left-4 right-4 bg-maroon-corp/90 backdrop-blur-md p-4 border border-white/10 shadow-2xl">
                      <div className="inline-block bg-red-bright text-[10px] font-black px-2 py-0.5 mb-4 uppercase tracking-widest text-white">
                        Ciclos del Proyecto
                      </div>
                      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-2 md:gap-0 px-1">
                        {[
                          { label: 'Inicio', icon: <Play size={12} />, color: 'text-white' },
                          { label: 'Planificación', icon: <Compass size={12} />, color: 'text-white' },
                          { label: 'Ejecución', icon: <Users size={12} />, color: 'text-white' },
                          { label: 'Monitoreo y Control', icon: <Search size={12} />, color: 'text-white' },
                          { label: 'Cierre', icon: <CheckCircle2 size={12} />, color: 'text-white' }
                        ].map((cycle, i, arr) => (
                          <React.Fragment key={i}>
                            <div className="flex flex-col items-center gap-1.5 group/item cursor-help">
                              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover/item:border-red-bright group-hover/item:bg-red-bright/20 transition-all">
                                {cycle.icon}
                              </div>
                              <span className="text-[7px] md:text-[8px] font-black uppercase text-center leading-tight opacity-70 group-hover/item:opacity-100 transition-opacity whitespace-nowrap">{cycle.label}</span>
                            </div>
                            {i < arr.length - 1 && (
                              <div className="hidden md:block flex-1 h-px bg-white/20 mx-2 mb-4"></div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-red-bright opacity-50 group-hover:w-full group-hover:h-full transition-all duration-1000 -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
