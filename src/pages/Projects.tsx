
import React from 'react';
import { PROJECTS } from '../constants';
import { MapPin, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel: React.FC<{ images: string[], alt: string }> = ({ images, alt }) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group w-full h-[500px] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${alt} ${i + 1}`}
            className="w-full h-full object-cover shrink-0"
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

const Projects: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-maroon-corp py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="h-1 w-20 bg-red-bright mb-6"></div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">NUESTRAS <span className="text-red-bright">OBRAS</span></h1>
          <p className="text-slate-300 text-lg max-w-3xl font-bold">
            Resultados que hablan por sí solos: reflejo de nuestra experiencia, precisión técnica y compromiso en cada proyecto.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A1A1A]/30 skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Project Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-800">
              {/* Image or Carousel */}
              {Array.isArray(project.image) ? (
                <ImageCarousel images={project.image} alt={project.title} />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110 bg-zinc-800"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}

              {/* Gradient Overlay - ensuring text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-corp via-maroon-corp/40 to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex items-center gap-2 mb-4">
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-6 group-hover:text-red-bright transition-colors uppercase tracking-tighter">
                  {project.title}
                </h3>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin size={20} className="text-red-bright" />
                    <div>
                      <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Ubicación</p>
                      <p className="text-sm font-bold uppercase tracking-tighter">{project.location}</p>
                    </div>
                  </div>
                  {project.client && (
                    <div className="flex items-center gap-3 text-white/80">
                      <Briefcase size={20} className="text-red-bright" />
                      <div>
                        <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Cliente</p>
                        <p className="text-sm font-bold uppercase tracking-tighter">{project.client}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Banner */}
        <div className="mt-24 p-12 bg-[#1A1A1A] border-l-[16px] border-red-bright text-white flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">¿TIENE UN PROYECTO EN MENTE?</h4>
            <p className="text-slate-400 max-w-lg font-bold">Hemos pavimentado vías, construido plantas industriales y mantenido infraestructura crítica. Su proyecto está en buenas manos.</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-red-bright text-5xl font-black tracking-tighter leading-none">30</p>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Años Operando</p>
            </div>
            <div className="w-px h-16 bg-white/10"></div>
            <button className="bg-red-bright text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-maroon-corp transition-all">
              CONTACTAR AHORA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
