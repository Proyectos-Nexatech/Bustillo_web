
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header - Solid Maroon Corp Base */}
      <section className="bg-maroon-corp py-16 md:py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="h-1 w-16 md:w-20 bg-red-bright mb-6"></div>
          <h1 className="text-3xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            HABLEMOS DE <br/>SU <span className="text-red-bright">PROYECTO</span>
          </h1>
          <p className="text-red-100 text-base md:text-lg max-w-2xl font-bold uppercase tracking-tight">
            Estamos disponibles para asesorarle técnicamente. Contáctenos a través de nuestras sedes o formulario web.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-12 translate-x-1/2"></div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-20">
            {/* Contact Info - All icons unified to Vinotinto (maroon-corp) */}
            <div className="lg:w-1/3">
              <div className="mb-12 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-maroon-corp uppercase tracking-tighter">
                    INFO DE CONTACTO
                </h2>
                <div className="h-1 w-12 bg-red-bright mt-2 mx-auto lg:ml-0"></div>
              </div>
              
              <div className="space-y-10 md:space-y-12">
                {[
                    { 
                        icon: <MapPin className="text-white" size={24} />, 
                        color: 'bg-maroon-corp', // Vinotinto
                        title: 'SEDE PRINCIPAL', 
                        lines: ['KM 3 VÍA MONTELÍBANO-CMSA,', 'MONTELÍBANO, CÓRDOBA.'] 
                    },
                    { 
                        icon: <MapPin className="text-white" size={24} />, 
                        color: 'bg-maroon-corp', // Vinotinto
                        title: 'SEDE BOLÍVAR', 
                        lines: ['Bellevista Cra 56B #7A-69', 'CARTAGENA, BOLIVAR.'] 
                    },
                    { 
                        icon: <Phone className="text-white" size={24} />, 
                        color: 'bg-maroon-corp', // Vinotinto
                        title: 'TELÉFONO', 
                        lines: ['320 710 6148'] 
                    },
                    { 
                        icon: <Mail className="text-white" size={24} />, 
                        color: 'bg-maroon-corp', // Vinotinto
                        title: 'EMAIL', 
                        lines: ['gerencia@bustilloingenieria.com', 'proyectos.cartagena@bustilloingenieria.com'] 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                        <div className={`w-14 h-14 md:w-16 md:h-16 ${item.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-lg`}>
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                            {item.lines.map((line, lidx) => (
                                <p 
                                  key={lidx} 
                                  className={`text-slate-900 font-black text-xs md:text-sm tracking-tighter leading-tight mb-0.5 ${item.title !== 'EMAIL' ? 'uppercase' : 'lowercase'}`}
                                >
                                  {line}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Contact Form - Responsive optimization */}
            <div className="lg:w-2/3">
              <div className="bg-[#f9f9f9] p-6 md:p-12 lg:p-16 border-t-[12px] border-maroon-corp shadow-2xl">
                <form className="space-y-8 md:space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="relative">
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Nombre Completo</label>
                      <input 
                        type="text" 
                        placeholder="EJ. JUAN PÉREZ"
                        className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:outline-none focus:border-red-bright transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Empresa</label>
                      <input 
                        type="text" 
                        placeholder="EJ. CONSTRUCTORA X"
                        className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:outline-none focus:border-red-bright transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="relative">
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Correo Electrónico</label>
                      <input 
                        type="email" 
                        placeholder="JUAN@EJEMPLO.COM"
                        className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:outline-none focus:border-red-bright transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Teléfono</label>
                      <input 
                        type="tel" 
                        placeholder="300 000 0000"
                        className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:outline-none focus:border-red-bright transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Servicio de Interés</label>
                    <select className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:outline-none focus:border-red-bright transition-all font-black uppercase text-sm tracking-tight appearance-none cursor-pointer">
                      <option className="bg-white">SELECCIONE UN SERVICIO...</option>
                      <option className="bg-white">OBRAS CIVILES</option>
                      <option className="bg-white">METALMECÁNICA</option>
                      <option className="bg-white">ELECTRICIDAD</option>
                      <option className="bg-white">ALQUILER DE MAQUINARIA</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Mensaje</label>
                    <textarea 
                      rows={4}
                      placeholder="DESCRIPCIÓN DEL REQUERIMIENTO..."
                      className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:outline-none focus:border-red-bright transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300 resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full md:w-auto bg-maroon-corp text-white px-10 md:px-12 py-4 md:py-5 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-red-bright transition-all active:scale-[0.98] shadow-xl shadow-red-950/20">
                    ENVIAR SOLICITUD <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
