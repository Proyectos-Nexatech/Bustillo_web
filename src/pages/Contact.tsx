
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error once user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre completo es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del correo no es válido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Número de teléfono no válido';
    }
    
    if (!formData.service || formData.service === '' || formData.service === 'SELECCIONE UN SERVICIO...') {
      newErrors.service = 'Seleccione un servicio de interés';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje o requerimiento es requerido';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    // Simulate sending email/request
    setTimeout(() => {
      try {
        const existingRequests = JSON.parse(localStorage.getItem('contact_requests') || '[]');
        existingRequests.push({
          ...formData,
          date: new Date().toISOString(),
        });
        localStorage.setItem('contact_requests', JSON.stringify(existingRequests));
      } catch (err) {
        console.error('Error saving contact request:', err);
      }
      setStatus('success');
    }, 1800);
  };

  return (
    <div className="bg-white">
      {/* Header - Solid Maroon Corp Base */}
      <section className="bg-maroon-corp py-16 md:py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="h-1 w-16 md:w-20 bg-red-bright mb-6"></div>
          <h1 className="text-3xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            HABLEMOS DE <br />SU <span className="text-red-bright">PROYECTO</span>
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
                    lines: ['gerencia@bustilloingenieria.com', 'proyectos.cartagena@bustilloingenieria.com', 'comercial@bustilloingenieria.com']
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

            {/* Contact Form - Responsive optimization & premium interactive behaviors */}
            <div className="lg:w-2/3">
              <div className="bg-[#f9f9f9] p-6 md:p-12 lg:p-16 border-t-[12px] border-maroon-corp shadow-2xl min-h-[500px] flex flex-col justify-center transition-all duration-300">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-6 animate-in fade-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce shadow-lg shadow-green-100">
                      <CheckCircle2 size={44} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-black text-maroon-corp uppercase tracking-tight mb-2">
                      ¡SOLICITUD ENVIADA!
                    </h3>
                    
                    <div className="h-1 w-16 bg-red-bright mb-6"></div>
                    
                    <p className="text-slate-700 text-xs md:text-sm max-w-md font-bold mb-8 uppercase tracking-wide leading-relaxed">
                      Gracias por contactar a <span className="text-maroon-corp">Bustillo Ingeniería SAS</span>. Hemos recibido sus datos y un ingeniero experto se pondrá en contacto con usted en un plazo no mayor a 24 horas.
                    </p>

                    <div className="bg-white p-6 border border-slate-100 shadow-md text-left w-full max-w-md mb-8 rounded-sm">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 border-b pb-2">RESUMEN DE SU SOLICITUD</h4>
                      <div className="space-y-2 text-xs text-slate-800">
                        <p className="font-bold uppercase"><span className="text-slate-400">Cliente:</span> {formData.name}</p>
                        {formData.company && <p className="font-bold uppercase"><span className="text-slate-400">Empresa:</span> {formData.company}</p>}
                        <p className="font-bold"><span className="text-slate-400 uppercase">Correo:</span> {formData.email.toLowerCase()}</p>
                        <p className="font-bold"><span className="text-slate-400 uppercase">Teléfono:</span> {formData.phone}</p>
                        <p className="font-bold uppercase"><span className="text-slate-400">Servicio:</span> {formData.service}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
                        setStatus('idle');
                      }}
                      className="bg-maroon-corp text-white px-8 py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-red-bright transition-all active:scale-95 shadow-xl shadow-red-950/20"
                    >
                      ENVIAR OTRA SOLICITUD
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <div className="relative">
                        <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Nombre Completo</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="EJ. JUAN PÉREZ"
                          className={`w-full bg-transparent border-b-2 py-3 focus:outline-none transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300 ${
                            errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-red-bright'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1.5 flex items-center gap-1">
                            <AlertCircle size={12} className="shrink-0" /> {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div className="relative">
                        <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Empresa</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
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
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="JUAN@EJEMPLO.COM"
                          className={`w-full bg-transparent border-b-2 py-3 focus:outline-none transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300 ${
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-red-bright'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1.5 flex items-center gap-1">
                            <AlertCircle size={12} className="shrink-0" /> {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="relative">
                        <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Teléfono</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="300 000 0000"
                          className={`w-full bg-transparent border-b-2 py-3 focus:outline-none transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300 ${
                            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-red-bright'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1.5 flex items-center gap-1">
                            <AlertCircle size={12} className="shrink-0" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Servicio de Interés</label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full bg-transparent border-b-2 py-3 focus:outline-none transition-all font-black uppercase text-sm tracking-tight appearance-none cursor-pointer ${
                            errors.service ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-red-bright'
                          }`}
                        >
                          <option value="" className="bg-white">SELECCIONE UN SERVICIO...</option>
                          <option value="OBRAS CIVILES Y ARQUITECTURA" className="bg-white">OBRAS CIVILES Y ARQUITECTURA</option>
                          <option value="MOVIMIENTO DE TIERRA Y VIAS" className="bg-white">MOVIMIENTO DE TIERRA Y VIAS</option>
                          <option value="CONCRETO PREMEZCLADO Y TOPOGRAFÍA" className="bg-white">CONCRETO PREMEZCLADO Y TOPOGRAFÍA</option>
                          <option value="METALMECÁNICA Y TUBERÍAS" className="bg-white">METALMECÁNICA Y TUBERÍAS</option>
                          <option value="INGENIERÍA ELÉCTRICA" className="bg-white">INGENIERÍA ELÉCTRICA</option>
                          <option value="INSTRUMENTACIÓN INDUSTRIAL" className="bg-white">INSTRUMENTACIÓN INDUSTRIAL</option>
                          <option value="MANTENIMIENTO DE VÁLVULAS" className="bg-white">MANTENIMIENTO DE VÁLVULAS Y CALIBRACIÓN</option>
                          <option value="INGENIERÍA BÁSICA Y DE DETALLE" className="bg-white">INGENIERÍA BÁSICA Y DE DETALLE</option>
                          <option value="GESTIÓN DE PROYECTOS / INTERVENTORÍA" className="bg-white">GESTIÓN DE PROYECTOS / INTERVENTORÍA</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                      {errors.service && (
                        <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} className="shrink-0" /> {errors.service}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">Mensaje</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="DESCRIPCIÓN DEL REQUERIMIENTO..."
                        className={`w-full bg-transparent border-b-2 py-3 focus:outline-none transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300 resize-none ${
                          errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-red-bright'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} className="shrink-0" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full md:w-auto bg-maroon-corp text-white px-10 md:px-12 py-4 md:py-5 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-red-bright transition-all active:scale-[0.98] shadow-xl shadow-red-950/20 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          PROCESANDO... <Loader2 className="animate-spin" size={16} />
                        </>
                      ) : (
                        <>
                          ENVIAR SOLICITUD <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
