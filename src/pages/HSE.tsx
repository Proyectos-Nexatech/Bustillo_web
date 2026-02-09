
import React from 'react';
import { Shield, Leaf, HeartPulse, UserCheck, AlertTriangle, FileText } from 'lucide-react';

const HSE: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-maroon-corp py-16 md:py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="h-1 w-16 md:w-20 bg-red-bright mb-6"></div>
          <h1 className="text-3xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            HSE & <span className="text-red-bright">CALIDAD</span>
          </h1>
          <p className="text-red-100 text-base md:text-xl max-w-3xl font-bold uppercase tracking-tight">
            La seguridad industrial, la salud ocupacional y la gestión ambiental son los pilares innegociables de nuestra operación diaria.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-black/10 skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Main Pillars */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="p-8 md:p-10 bg-[#f9f9f9] border-t-8 border-maroon-corp shadow-lg">
              <Shield className="w-12 h-12 text-maroon-corp mb-6" />
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Seguridad Industrial</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                Implementamos protocolos estrictos para garantizar un entorno de trabajo libre de riesgos. Nuestra meta es siempre: Cero Accidentes.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-[#f9f9f9] border-t-8 border-red-bright shadow-lg">
              <Leaf className="w-12 h-12 text-red-bright mb-6" />
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Gestión Ambiental</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                Operamos bajo la norma ISO 14001, asegurando que cada intervención en campo respete la biodiversidad y el ecosistema local.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-[#f9f9f9] border-t-8 border-slate-900 shadow-lg">
              <HeartPulse className="w-12 h-12 text-slate-900 mb-6" />
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Salud Ocupacional</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                Programas de bienestar continuo para nuestros trabajadores, vigilando su salud física y mental mediante revisiones periódicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Protocols */}
      <section className="py-16 md:py-24 bg-maroon-corp text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter">COMPROMISO SSOMA</h2>
            <div className="h-1 w-16 md:w-20 bg-red-bright mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {[
              { 
                icon: <UserCheck />, 
                title: 'Competencia del Personal', 
                desc: 'Todo nuestro equipo técnico está certificado y recibe capacitación continua en riesgos específicos.' 
              },
              { 
                icon: <AlertTriangle />, 
                title: 'Identificación de Riesgos', 
                desc: 'Análisis de trabajo seguro (ATS) realizado antes de iniciar cada jornada en todos nuestros frentes.' 
              },
              { 
                icon: <FileText />, 
                title: 'Cumplimiento Legal', 
                desc: 'Apegados al 100% a la legislación colombiana vigente en materia de seguridad y trabajo.' 
              },
              { 
                icon: <Shield />, 
                title: 'Elementos de Protección', 
                desc: 'Dotación de EPP de alta gama para asegurar la máxima protección en ambientes hostiles.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 md:p-8 flex gap-4 md:gap-6 items-start hover:bg-white/10 transition-colors">
                <div className="p-3 md:p-4 bg-red-bright text-white rounded-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-red-100/70 text-sm md:text-base font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f4f4f4] p-8 md:p-16 border-l-[12px] md:border-l-[20px] border-red-bright flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-black mb-4 text-maroon-corp uppercase tracking-tighter">ESTÁNDARES INTERNACIONALES</h2>
              <p className="text-slate-600 font-bold uppercase text-sm tracking-tight">Nuestra operación está avalada por certificaciones ISO 9001, 14001 y 45001, garantizando procesos seguros y eficientes.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-white border border-slate-200 flex items-center justify-center text-maroon-corp font-black text-xs md:text-sm">ISO 9001</div>
              <div className="w-12 h-12 md:w-20 md:h-20 bg-white border border-slate-200 flex items-center justify-center text-maroon-corp font-black text-xs md:text-sm">ISO 14001</div>
              <div className="w-12 h-12 md:w-20 md:h-20 bg-white border border-slate-200 flex items-center justify-center text-maroon-corp font-black text-xs md:text-sm">ISO 45001</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HSE;
