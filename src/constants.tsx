
import React from 'react';
import { 
  HardHat, 
  Settings, 
  Zap, 
  Truck, 
  Map, 
  Droplets, 
  Building2,
  Users,
  DraftingCompass,
  PencilRuler // Using PencilRuler instead of DraftingCompass to ensure visibility
} from 'lucide-react';
import { Service, Project, Stat } from './types';
import { IMAGES } from './images';

export const STATS: Stat[] = [
  { label: 'Años de Experiencia', value: '30' },
  { label: 'Grandes Clientes', value: '7+' },
  { label: 'Sedes en Colombia', value: '2' },
  { label: 'Proyectos Exitosos', value: '100+' }
];

export const SERVICES: Service[] = [
  {
    id: 'civil',
    title: 'Obras Civiles y Arquitectura',
    category: 'civil',
    icon: 'HardHat',
    description: 'Diseño y construcción con los más altos estándares.',
    image: IMAGES.services.civil,
    details: [
      'Construcción industrial y residencial',
      'Mantenimiento de edificaciones',
      'Sistemas de alcantarillado y drenaje',
      'Diseño arquitectónico y estructural',
      'Movimiento de Tierra',
      'Levantamiento Topografico'
    ]
  },
  {
    id: 'metal',
    title: 'Metalmecánica y Tuberías',
    category: 'industrial',
    icon: 'Settings',
    description: 'Prefabricación y montajes industriales.',
    image: IMAGES.services.metal,
    details: [
      'Prefabricación y montaje de estructuras metálicas',
      'Prefabricación y montaje Tuberías de procesos industriales',
      'Pruebas hidrostáticas certificadas',
      'Montajes industriales especializados'
    ]
  },
  {
    id: 'electric',
    title: 'Electricidad e Instrumentación',
    category: 'industrial',
    icon: 'Zap',
    description: 'Sistemas de potencia y control avanzado.',
    image: IMAGES.services.electric,
    details: [
      'Montaje de subestaciones eléctricas',
      'Sistemas de puesta a tierra (SPT)',
      'Automatización de procesos',
      'Apantallamiento Electrico',
      'Diseño y montaje de instalaciones electricas de media y baja tension',
      'Montaje de instrumentacion industrial'
    ]
  },
  {
    id: 'valves',
    title: 'Mantenimiento y Pruebas de Válvulas y Calibración de Instrumentos',
    category: 'industrial',
    icon: 'PencilRuler',
    description: 'Aseguramiento metrológico y operatividad de elementos de control.',
    image: IMAGES.services.valves,
    details: [
      'Mantenimiento de válvulas Manuales, de control y alivio (PSV)',
      'Calibración de transmisores y manómetros',
      'Diagnóstico y reparación en sitio',
      'Certificación con patrones trazables'
    ]
  },
  {
    id: 'engineering',
    title: 'Ingeniería Conceptual, Básica y de Detalle',
    category: 'engineering',
    icon: 'DraftingCompass',
    description: 'Desarrollamos soluciones integrando análisis técnicos, normativos y operativos para transformar ideas en proyectos ejecutables.',
    image: IMAGES.services.engineering,
    details: [
      'Ingeniería Conceptual, Básica y de Detalle',
      'Reducción de incertidumbre y riesgos en campo',
      'Optimización de recursos y costos',
      'Proyectos eficientes y sostenibles'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Planta Heap Leaching',
    location: 'Córdoba',
    client: 'Cerro Matoso S.A.',
    image: IMAGES.projects.heapLeaching
  },
  {
    id: '2',
    title: 'Mantenimiento Hidráulico Gecelca',
    location: 'Puerto Libertador',
    client: 'Gecelca',
    image: IMAGES.projects.maintenance
  },
  {
    id: '3',
    title: 'Bibliotecas Municipales',
    location: 'Montelíbano',
    client: 'Gobernación de Córdoba',
    image: IMAGES.projects.library
  },
  {
    id: '4',
    title: 'Pavimentación Vías Urbanas',
    location: 'Montería',
    client: 'Alcaldía de Montería',
    image: IMAGES.projects.paving
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  HardHat: <HardHat className="w-8 h-8" />,
  Settings: <Settings className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  Map: <Map className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  DraftingCompass: <DraftingCompass className="w-8 h-8" />,
  PencilRuler: <PencilRuler className="w-8 h-8" />
};
