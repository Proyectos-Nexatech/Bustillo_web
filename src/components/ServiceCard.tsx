
import React from 'react';
import { Service } from '../types';
import { ICON_MAP } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
      <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {ICON_MAP[service.icon]}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 text-sm mb-6 line-clamp-2">
        {service.description}
      </p>
      <ul className="space-y-2 mb-8">
        {service.details.slice(0, 3).map((detail, idx) => (
          <li key={idx} className="text-xs text-slate-500 flex items-center">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
            {typeof detail === 'string' ? detail : detail.title}
          </li>
        ))}
      </ul>
      <button className="flex items-center text-blue-900 font-bold text-sm group-hover:translate-x-2 transition-transform">
        MÁS INFORMACIÓN <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
};

export default ServiceCard;
