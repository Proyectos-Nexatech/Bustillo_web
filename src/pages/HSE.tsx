
import React from 'react';
import { 
  Shield, 
  Leaf, 
  UserCheck, 
  AlertTriangle, 
  FileText, 
  Award, 
  HardHat, 
  CheckCircle2 
} from 'lucide-react';

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

      {/* Nuestras Certificaciones Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div className="flex items-center gap-4">
              <div className="h-10 md:h-12 w-1.5 bg-orange-500"></div>
              <h2 className="text-3xl md:text-5xl font-black text-maroon-corp uppercase tracking-tighter leading-tight">Nuestras Certificaciones</h2>
            </div>
            <div className="bg-[#10b981] text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-emerald-500/20 border border-emerald-400/30">
              <CheckCircle2 size={14} /> Certificado Vigente
            </div>
          </div>
          
          <p className="max-w-5xl text-slate-600 text-sm md:text-lg mb-20 font-bold leading-relaxed opacity-80 decoration-red-bright/20 decoration-2 underline-offset-8">
            En Bustillo Ingeniería SAS estamos comprometidos con la excelencia. Nuestro Sistema de Gestión Integral está certificado bajo estándares internacionales, garantizando la calidad en nuestros procesos, el cuidado del medio ambiente y la seguridad de nuestros colaboradores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* ISO 9001 */}
            <div className="bg-white p-8 md:p-12 border-t-[12px] border-blue-500 shadow-2xl shadow-slate-200/60 text-center group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center mx-auto mb-10 text-blue-500 bg-blue-50/50 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-500">
                 <Award size={44} className="mb-1" />
                 <span className="text-[14px] md:text-[18px] font-black leading-none">ISO</span>
                 <span className="text-[8px] md:text-[10px] font-black tracking-widest opacity-80">9001:2015</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-maroon-corp mb-5 uppercase tracking-tighter">Gestión de Calidad</h3>
              <p className="text-slate-500 text-xs md:text-sm font-bold leading-relaxed opacity-90 group-hover:text-slate-800 transition-colors">
                Enfoque en la satisfacción del cliente y mejora continua de procesos constructivos.
              </p>
            </div>

            {/* ISO 14001 */}
            <div className="bg-white p-8 md:p-12 border-t-[12px] border-emerald-500 shadow-2xl shadow-slate-200/60 text-center group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-emerald-500 flex flex-col items-center justify-center mx-auto mb-10 text-emerald-500 bg-emerald-50/50 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-xl group-hover:shadow-emerald-500/40 transition-all duration-500">
                 <Leaf size={44} className="mb-1" />
                 <span className="text-[14px] md:text-[18px] font-black leading-none">ISO</span>
                 <span className="text-[8px] md:text-[10px] font-black tracking-widest opacity-80">14001:2015</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-maroon-corp mb-5 uppercase tracking-tighter">Gestión Ambiental</h3>
              <p className="text-slate-500 text-xs md:text-sm font-bold leading-relaxed opacity-90 group-hover:text-slate-800 transition-colors">
                Compromiso con la sostenibilidad y minimización del impacto ambiental en obras.
              </p>
            </div>

            {/* ISO 45001 */}
            <div className="bg-white p-8 md:p-12 border-t-[12px] border-orange-500 shadow-2xl shadow-slate-200/60 text-center group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-orange-500 flex flex-col items-center justify-center mx-auto mb-10 text-orange-500 bg-orange-50/50 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-xl group-hover:shadow-orange-500/40 transition-all duration-500">
                 <HardHat size={44} className="mb-1" />
                 <span className="text-[14px] md:text-[18px] font-black leading-none">ISO</span>
                 <span className="text-[8px] md:text-[10px] font-black tracking-widest opacity-80">45001:2018</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-maroon-corp mb-5 uppercase tracking-tighter">Seguridad y Salud</h3>
              <p className="text-slate-500 text-xs md:text-sm font-bold leading-relaxed opacity-90 group-hover:text-slate-800 transition-colors">
                Prevención de riesgos laborales y protección de la integridad de nuestros trabajadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Protocols */}
      <section className="py-20 md:py-32 bg-maroon-corp text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <div className="h-1 w-20 bg-red-bright mb-6"></div>
            <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter">NUESTRO COMPROMISO</h2>
            <p className="text-red-100/60 font-black uppercase tracking-[0.2em] text-xs">Salud, Seguridad, Medio Ambiente y Calidad (SSOMA)</p>
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
                title: 'Identificación y Control de Riesgos',
                desc: 'Análisis de trabajo seguro (ATS) realizado antes de iniciar cada jornada en todos nuestros frentes.'
              },
              {
                icon: <FileText />,
                title: 'Cumplimiento Legal',
                desc: 'Cumplimos con la legislación colombiana vigente en Seguridad y Salud en el Trabajo (SST) y gestión ambiental, garantizando la protección del personal y el cuidado del entorno.'
              },
              {
                icon: <Shield />,
                title: 'Elementos de Protección',
                desc: 'Nuestro personal opera con Elementos de Protección Personal (EPP) adecuados, asegurando su protección en condiciones de alto riesgo y ambientes exigentes.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 md:p-10 flex gap-4 md:gap-10 items-start hover:bg-white/10 transition-all group group cursor-default">
                <div className="p-4 bg-red-bright text-white rounded-sm shrink-0 shadow-lg group-hover:scale-110 transition-transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl md:text-3xl font-black mb-4 uppercase tracking-tighter group-hover:text-red-bright transition-colors">{item.title}</h4>
                  <p className="text-red-100/70 text-sm md:text-base font-bold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Banner / Final CTA */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-red-bright/10 text-maroon-corp px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-10 border border-red-bright/20">
             <CheckCircle2 size={16} className="text-red-bright" /> Cero Accidentes es nuestra meta diaria
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-maroon-corp uppercase tracking-tighter mb-12 leading-none">
            EXCELENCIA <br /><span className="text-red-bright">SIN EXCEPCIONES</span>
          </h2>
          <p className="max-w-4xl mx-auto text-slate-500 font-bold uppercase text-sm md:text-base tracking-tight mb-16 leading-relaxed">
            Nuestros procesos están diseñados bajo estándares globales para ser eficientes, seguros y responsables, cumpliendo con los marcos regulatorios más exigentes.
          </p>
          <div className="flex flex-wrap justify-center gap-6 opacity-30">
             <span className="font-black text-2xl">ISO 9001</span>
             <span className="font-black text-2xl">ISO 14001</span>
             <span className="font-black text-2xl">ISO 45001</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HSE;
