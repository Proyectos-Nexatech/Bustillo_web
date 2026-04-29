
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../images';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-maroon-corp py-24 text-white relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.about.hero}
            alt="Fondo Nosotros"
            className="w-full h-full object-cover opacity-40 mix-blend-multiply grayscale"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-corp via-maroon-corp/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="h-1 w-20 bg-red-bright mb-6"></div>
          <h1 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter">NOSOTROS</h1>
          <p className="text-red-100 text-lg max-w-2xl font-bold uppercase tracking-tight">Tres décadas de ingeniería de alto impacto.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-red-bright font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Nuestra Trayectoria</span>
              <h2 className="text-3xl md:text-5xl font-black text-maroon-corp mb-8 uppercase tracking-tighter">DESDE 1996 <br />CONSTRUYENDO PAÍS</h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  Bustillo Ingeniería SAS nació en Montelíbano, Córdoba, con la visión de proveer servicios de ingeniería y mantenimiento industrial de alta confiabilidad.
                </p>
                <p>
                  A lo largo de 30 años, hemos consolidado relaciones duraderas con gigantes de la industria como Cerro Matoso, Gecelca, Ocensa, Prodeco, Carbomax, Harinas 3 Castillo, Termocandelaria, Cabot, Kaeser, Lhoist, Ajover, ISA y Mexichem, adaptándonos a los cambios tecnológicos y fortaleciendo nuestra capacidad operativa en toda la región Caribe.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-slate-100 mt-12 border border-slate-100">
                <div className="bg-white p-8">
                  <span className="text-5xl font-black text-maroon-corp block mb-1">1996</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Año de Fundación</span>
                </div>
                <div className="bg-white p-8">
                  <span className="text-5xl font-black text-red-bright block mb-1">2030</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visión Líder</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="p-4 bg-white shadow-2xl relative z-10 border-l-[12px] border-maroon-corp">
                <img
                  src={IMAGES.about.history}
                  alt="Historia de la empresa"
                  className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    // Fallback to a placeholder if image is missing
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 600'%3E%3Crect fill='%23dddddd' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23555555'%3EImagen No Disponible%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-bright -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Designed exactly like the image provided */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl md:text-8xl font-black text-maroon-corp uppercase tracking-tighter mb-4">
              MISIÓN & <br /> <span className="text-maroon-corp">VISIÓN</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="relative">
              {/* Red Header Bar for "MISIÓN" as seen in image */}
              <div className="bg-red-bright text-white px-8 py-3 inline-block font-black text-3xl uppercase tracking-widest mb-10 relative">
                MISIÓN
                <div className="absolute top-0 right-0 w-8 h-full bg-maroon-corp translate-x-full"></div>
              </div>
              <p className="text-slate-700 leading-relaxed text-xl font-bold italic border-l-4 border-maroon-corp pl-8">
                Somos una organización especializada en la ejecución de obras civiles, arquitectónicas, eléctricas, instrumentación y metalmecánicas,
                orientada a satisfacer las necesidades de nuestros clientes mediante soluciones eficientes, seguras y oportunas. Operamos bajo altos estándares de calidad, cumplimiento
                normativo, innovación y mejora continua, promoviendo la Seguridad y Salud en el Trabajo, la protección del medio ambiente y el desarrollo integral de nuestro talento humano. Actuamos con ética,
                responsabilidad social y enfoque sostenible, generando valor para nuestros clientes, colaboradores y demás partes interesadas.
              </p>
            </div>

            <div className="relative">
              {/* Same header style for "VISIÓN" */}
              <div className="bg-maroon-corp text-white px-8 py-3 inline-block font-black text-3xl uppercase tracking-widest mb-10 relative">
                VISIÓN
                <div className="absolute top-0 right-0 w-8 h-full bg-red-bright translate-x-full"></div>
              </div>
              <p className="text-slate-700 leading-relaxed text-xl font-bold italic border-l-4 border-red-bright pl-8">
                Para el año 2030, ser una empresa líder y confiable en la región Caribe colombiana, con presencia estratégica a nivel nacional, reconocida por la excelencia en la ejecución de obras civiles,
                arquitectónicas, eléctricas, instrumentación y metalmecánicas. Nos distinguiremos por la eficacia de nuestro Sistema Integrado de Gestión, el uso de tecnologías innovadoras, el cumplimiento de los
                requisitos aplicables y una cultura organizacional enfocada en la seguridad, el bienestar, la sostenibilidad y la satisfacción de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-maroon-corp mb-4 uppercase tracking-tighter">GARANTÍA DE EXCELENCIA</h2>
            <div className="h-1 w-20 bg-red-bright mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
            {[
              { title: 'ISO 9001:2015', label: 'Gestión de Calidad', desc: 'Aseguramos procesos consistentes y satisfactorios para cada uno de nuestros clientes.' },
              { title: 'ISO 14001:2015', label: 'Gestión Ambiental', desc: 'Comprometidos con minimizar el impacto ambiental de nuestras operaciones industriales.' },
              { title: 'ISO 45001:2018', label: 'Seguridad y Salud', desc: 'Protegemos la integridad física de todos nuestros colaboradores en cada frente de obra.' }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white p-12 hover:bg-slate-50 transition-colors">
                <div className="inline-block p-4 bg-maroon-corp text-white rounded-sm mb-8">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">{cert.title}</h4>
                <p className="text-[10px] font-black text-red-bright uppercase tracking-[0.2em] mb-6">{cert.label}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
