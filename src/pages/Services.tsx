
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[300px] md:h-[450px] object-cover hover:scale-110 transition-transform duration-[2000ms]"
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
      <section className="py-16 md:py-24 bg-maroon-corp text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-5xl font-black mb-6 md:mb-8 leading-tight uppercase tracking-tighter">GESTIÓN DE PROYECTOS: <br/>CONTROL TOTAL</h2>
              <p className="text-red-100 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-bold border-l-4 border-red-bright pl-6 md:pl-8">
                Utilizamos metodología PMI y software de clase mundial para garantizar que cada proyecto se entregue a tiempo y dentro del presupuesto.
              </p>
              <ul className="space-y-4 md:space-y-6">
                {[
                    'Planificación estratégica con Primavera Project Planner.',
                    'Seguimiento de curvas de progreso físico (S-Curve).',
                    'Implementación del ciclo PHVA (Planear, Hacer, Verificar, Actuar).'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 md:gap-6 group">
                    <span className="w-8 h-8 md:w-10 md:h-10 border-2 border-red-bright text-red-bright flex items-center justify-center font-black group-hover:bg-red-bright group-hover:text-white transition-all shrink-0">
                        {idx + 1}
                    </span>
                    <span className="font-bold uppercase tracking-tight text-xs md:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="bg-white/10 p-1">
                    <div className="bg-[#330104] p-8 md:p-12 text-center flex flex-col items-center justify-center border border-white/10">
                        <div className="text-5xl md:text-7xl font-black text-red-bright mb-4">PMI</div>
                        <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-8">Project Management Excellence</div>
                        <Link to="/contacto" className="bg-white text-maroon-corp px-8 md:px-10 py-3 md:py-4 font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-red-bright hover:text-white transition-all">
                            SABER MÁS
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
