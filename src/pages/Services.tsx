
// Update March 12, 2026 - Management Section Redesign
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { ServiceDetail } from '../types';
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
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  HardHat,
  Settings,
  Zap,
  Cpu
} from 'lucide-react';

const ImageCarousel: React.FC<{ images: string[], alt: string }> = ({ images, alt }) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${alt} ${i + 1}`}
            className={`w-full h-full ${img.includes('apantallamiento.png') ? 'object-contain' : 'object-cover'} shrink-0`}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-maroon-corp text-white flex items-center justify-center rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-maroon-corp text-white flex items-center justify-center rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-white w-6' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const DetailCard: React.FC<{ detail: ServiceDetail }> = ({ detail }) => {
  return (
    <div className="flex flex-col bg-white p-5 md:p-6 border border-slate-100 shadow-sm border-b-4 border-b-maroon-corp hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-slate-50 text-maroon-corp rounded-sm flex items-center justify-center group-hover:bg-maroon-corp group-hover:text-white transition-colors duration-300 shadow-sm shrink-0 mt-1">
          <div className="scale-75">
            {detail.icon && ICON_MAP[detail.icon]}
          </div>
        </div>
        <h3 className="text-base md:text-lg font-black text-maroon-corp uppercase tracking-tighter leading-tight pt-0.5">
          {detail.title}
        </h3>
      </div>
      
      {detail.description && (
        <p className="text-slate-600 text-[11px] md:text-xs font-medium mb-4 leading-snug">
          {detail.description}
        </p>
      )}

      {detail.items && detail.items.length > 0 && (
        <ul className="space-y-1.5">
          {detail.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-bright mt-1.5 shrink-0" />
              <span className="text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-tighter leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header - Fixed to Maroon Corp to match other pages */}
      <section className="bg-maroon-corp py-16 md:py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="h-1 w-16 md:w-20 bg-red-bright mb-6"></div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            PORTAFOLIO DE <br /><span className="text-red-bright">SERVICIOS</span>
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
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                        {service.id === 'valves' || service.id === 'specialized_engineering' ? 'Servicio Especializado' : 'Servicios de Ingeniería'}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-5xl font-black text-maroon-corp mb-2 uppercase tracking-tighter">{service.title}</h2>
                    {service.subtitle && (
                      <div className="flex items-center gap-2 mb-6">
                        <div className="h-[2px] w-8 bg-red-bright/30"></div>
                        <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{service.subtitle}</span>
                      </div>
                    )}
                    <p className="text-slate-600 text-lg md:text-xl font-medium mb-8 md:mb-10 leading-relaxed border-l-4 border-red-bright pl-6 md:pl-8">
                      {service.description}
                    </p>
                    <div className={service.id === 'civil' ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"}>
                      {service.details.map((detail, idx) => {
                        if (typeof detail === 'string') {
                          return (
                            <div key={idx} className="flex items-center gap-3 p-3 md:p-4 bg-[#f9f9f9] border-b-2 border-slate-200">
                              <Check className="text-red-bright shrink-0" size={16} />
                              <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-tighter">{detail}</span>
                            </div>
                          );
                        } else if (!detail.description && (!detail.items || detail.items.length === 0)) {
                          // Simple card with icon if no description/items
                          return (
                            <div key={idx} className="flex items-center gap-3 p-3 md:p-4 bg-[#f9f9f9] border-b-2 border-slate-200 group hover:bg-[#f2f2f2] transition-colors">
                              <div className="text-red-bright shrink-0 transition-transform group-hover:scale-110">
                                {detail.icon ? (
                                  <div className="scale-75">
                                    {ICON_MAP[detail.icon]}
                                  </div>
                                ) : (
                                  <Check size={16} />
                                )}
                              </div>
                              <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-tighter">{detail.title}</span>
                            </div>
                          );
                        } else {
                          return <DetailCard key={idx} detail={detail} />;
                        }
                      })}
                    </div>
                  </div>
                  <div className={service.id === 'civil' ? "w-full lg:w-1/2 lg:self-start lg:sticky lg:top-32" : "w-full lg:w-1/2 relative"}>
                    <div className="p-2 md:p-4 bg-white shadow-xl relative z-10 overflow-hidden border border-slate-100 h-[400px] md:h-[600px]">
                      {Array.isArray(imageSrc) ? (
                        <ImageCarousel images={imageSrc} alt={service.title} />
                      ) : (
                        <img
                          src={imageSrc}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      )}
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
      <section className="py-16 md:py-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tighter text-maroon-corp">
                  GESTIÓN DE <br /> PROYECTOS
                </h2>
              </div>

              <p className="text-slate-600 text-sm md:text-base mb-8 md:mb-10 leading-relaxed font-bold border-l-4 border-red-bright pl-6 md:pl-8">
                Operamos bajo los lineamientos del Project Management Institute (PMI), integrando herramientas digitales avanzadas y software especializado que permiten un control riguroso y una trazabilidad completa de cada proyecto. Nuestra gestión se orienta a garantizar entregas oportunas, cumplimiento presupuestal y una supervisión proactiva basada en indicadores clave.
              </p>

              <div className="space-y-4">
                {/* List items transformed into colored badges */}
                <div className="flex items-center bg-slate-100 border-l-[12px] border-maroon-corp py-2 px-5 group hover:bg-slate-200 transition-all rounded-r-md">
                  <div className="mr-5 text-red-600 group-hover:scale-110 transition-transform">
                    <Map size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-red-600 block mb-0.5">Alcance:</span>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-slate-800">Estructura de Desglose de Trabajo (WBS) y Control de Entregables.</p>
                  </div>
                </div>

                <div className="flex items-center bg-slate-100 border-l-[12px] border-maroon-corp py-2 px-5 group hover:bg-slate-200 transition-all rounded-r-md">
                  <div className="mr-5 text-orange-600 group-hover:scale-110 transition-transform">
                    <Calendar size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-orange-600 block mb-0.5">Tiempo:</span>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-slate-800">Planificación Integrada de Cronograma y Seguimiento de Curva S.</p>
                  </div>
                </div>

                <div className="flex items-center bg-slate-100 border-l-[12px] border-maroon-corp py-2 px-5 group hover:bg-slate-200 transition-all rounded-r-md">
                  <div className="mr-5 text-blue-600 group-hover:scale-110 transition-transform">
                    <BarChart3 size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-blue-600 block mb-0.5">Costo:</span>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-slate-800">Análisis y Control Presupuestario con Valor Ganado.</p>
                  </div>
                </div>

                <div className="flex items-center bg-slate-100 border-l-[12px] border-maroon-corp py-2 px-5 group hover:bg-slate-200 transition-all rounded-r-md">
                  <div className="mr-5 text-green-600 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-green-600 block mb-0.5">Calidad:</span>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-slate-800">Gestión y seguimiento de planes de calidad.</p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Overlay: Ciclos del Proyecto */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 border border-slate-200 shadow-2xl">
                  <div className="inline-block bg-maroon-corp text-[10px] font-black px-2 py-0.5 mb-4 uppercase tracking-widest text-white">
                    Ciclos del Proyecto
                  </div>
                  <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-2 md:gap-0 px-1">
                    {[
                      { label: 'Inicio', icon: <Play size={12} />, color: 'text-slate-800' },
                      { label: 'Planificación', icon: <Compass size={12} />, color: 'text-slate-800' },
                      { label: 'Ejecución', icon: <Users size={12} />, color: 'text-slate-800' },
                      { label: 'Monitoreo y Control', icon: <Search size={12} />, color: 'text-slate-800' },
                      { label: 'Cierre', icon: <CheckCircle2 size={12} />, color: 'text-slate-800' }
                    ].map((cycle, i, arr) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-1.5 group/item cursor-help">
                          <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center bg-slate-50 group-hover/item:border-maroon-corp group-hover/item:bg-maroon-corp/10 transition-all ${cycle.color}`}>
                            {cycle.icon}
                          </div>
                          <span className="text-[7px] md:text-[8px] font-black uppercase text-center leading-tight text-slate-600 group-hover/item:text-maroon-corp transition-colors whitespace-nowrap">{cycle.label}</span>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="hidden md:block flex-1 h-px bg-slate-200 mx-2 mb-4"></div>
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

      {/* Multidisciplinary Supervision Section */}
      <section className="py-16 md:py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 md:gap-20 items-center">
            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tighter text-maroon-corp">
                  INTERVENTORÍA TÉCNICA <br /> MULTIDISCIPLINARIA
                </h2>
              </div>

              <p className="text-slate-600 text-sm md:text-base mb-8 md:mb-10 leading-relaxed font-bold border-l-4 border-red-bright pl-6 md:pl-8">
                Control Riguroso y Sistemático para el Aseguramiento de Calidad, Cumplimiento Normativo y Mitigación de Riesgos Operativos
              </p>

              <div className="space-y-4">
                {/* Obras Civiles */}
                <div className="flex items-center bg-slate-100 border-l-[12px] border-maroon-corp py-2 px-5 group hover:bg-slate-200 transition-all rounded-r-md">
                  <div className="mr-5 text-red-600 group-hover:scale-110 transition-transform">
                    <HardHat size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-red-600 block mb-0.5">Obras Civiles:</span>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-slate-800">Aseguramiento de cimentaciones, estructuras de concreto, metálicas, geotecnia y control de materiales.</p>
                  </div>
                </div>

                {/* Montaje Mecánico */}
                <div className="flex items-center bg-slate-100 border-l-[12px] border-maroon-corp py-2 px-5 group hover:bg-slate-200 transition-all rounded-r-md">
                  <div className="mr-5 text-orange-600 group-hover:scale-110 transition-transform">
                    <Settings size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-orange-600 block mb-0.5">Montaje Mecánico y Tuberías (Piping):</span>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-slate-800">Verificación de alineación de equipos rotativos y estáticos, control de soldadura (ENDs) y especificaciones técnicas.</p>
                  </div>
                </div>

                {/* Sistemas Eléctricos */}
                <div className="flex items-center bg-slate-100 border-l-[12px] border-maroon-corp py-2 px-5 group hover:bg-slate-200 transition-all rounded-r-md">
                  <div className="mr-5 text-blue-600 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-blue-600 block mb-0.5">Sistemas Eléctricos:</span>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-slate-800">Supervisión de redes de media y baja tensión, tableros, y comisionamiento pre-operativo (RETIE).</p>
                  </div>
                </div>

                {/* Instrumentación y Control */}
                <div className="flex items-center bg-slate-100 border-l-[12px] border-maroon-corp py-2 px-5 group hover:bg-slate-200 transition-all rounded-r-md">
                  <div className="mr-5 text-green-600 group-hover:scale-110 transition-transform">
                    <Cpu size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-green-600 block mb-0.5">Instrumentación y Control:</span>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-slate-800">Validación de lazos de control, calibración de instrumentos y puesta en marcha de sistemas SCADA/DCS.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative p-2 bg-slate-100 border border-slate-200 shadow-2xl">
                <img
                  src={IMAGES.services.engineering}
                  alt="Interventoría Técnica Multidisciplinaria"
                  className="w-full h-auto min-h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0.5';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-red-bright opacity-50 group-hover:w-full group-hover:h-full transition-all duration-1000 -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
