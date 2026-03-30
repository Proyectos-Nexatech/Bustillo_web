
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
  PencilRuler,
  Factory,
  Home,
  Paintbrush,
  Hammer,
  Waves,
  Key,
  FlaskConical,
  LocateFixed,
  ClipboardCheck,
  Wrench,
  Gauge,
  CheckCircle2
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
    subtitle: 'Soluciones integrales de infraestructura',
    category: 'civil',
    icon: 'HardHat',
    description: 'Construcción con los más altos estándares.',
    image: IMAGES.services.civil,
    details: [
      {
        title: 'Obras Civiles Industriales',
        description: 'Diseño y construcción especializado para plantas y complejos industriales con altos estándares de calidad.',
        items: [
          'Losas y Muros de contención',
          'Fundaciones y Columnas',
          'Bases para tanques y tolvas',
          'Soportes para bandas transportadoras'
        ],
        icon: 'Factory'
      },
      {
        title: 'Proyectos Arquitectónicos',
        description: 'Ejecución de proyectos residenciales, escolares y campamentos con atención al detalle y funcionalidad.',
        items: [
          'Diseños arquitectónicos integrales',
          'Construcciones residenciales',
          'Infraestructura escolar',
          'Campamentos y oficinas'
        ],
        icon: 'PencilRuler'
      },
      {
        title: 'Acabados y Terminaciones',
        description: 'Todo tipo de acabados arquitectónicos para entregar espacios listos para su uso y operación.',
        items: [
          'Pañetes, estuco y pintura',
          'Pisos y enchapes',
          'Carpintería en madera y metálica',
          'Cielorrasos y cubiertas'
        ],
        icon: 'Paintbrush'
      },
      {
        title: 'Mantenimiento de Edificaciones',
        description: 'Servicios preventivos y correctivos para preservar la vida útil de edificaciones e infraestructura.',
        items: [
          'Mantenimiento de campamentos',
          'Reparaciones locativas',
          'Mantenimiento de oficinas',
          'Instalaciones generales'
        ],
        icon: 'Hammer'
      },
      {
        title: 'Redes Hidrosanitarias',
        description: 'Construcción y mantenimiento de sistemas de manejo de aguas y redes de suministro.',
        items: [
          'Alcantarillados',
          'Líneas de conducción de agua potable',
          'Redes de acueducto',
          'Instalaciones hidrosanitarias internas'
        ],
        icon: 'Waves'
      },
      {
        title: 'Modalidades de Contratación',
        description: 'Flexibilidad en modelos de contratación adaptados a las necesidades de cada cliente y proyecto.',
        items: [
          'Contratos llave en mano',
          'Contratos marco civiles',
          'Precios unitarios',
          'Administración delegada'
        ],
        icon: 'Key'
      }
    ]
  },
  {
    id: 'concrete',
    title: 'Concreto Premezclado y Topografía',
    subtitle: 'Precisión técnica y materiales de calidad',
    category: 'specialized',
    icon: 'Droplets',
    description: 'Producción, suministro de concreto y topografía de alta precisión para proyectos de infraestructura.',
    image: IMAGES.services.concrete,
    details: [
      {
        title: 'Fabricación y Suministro de Concreto',
        description: 'Producción y transporte de concreto premezclado con equipos propios para garantizar la calidad.',
        items: [
          'Planta de concreto propia',
          'Flota de camiones mixers',
          'Servicio de bombeo de concreto',
          'Suministro en obra'
        ],
        icon: 'Truck'
      },
      {
        title: 'Diseño de Mezclas',
        description: 'Desarrollo de concretos especializados según requerimientos técnicos y estructurales del proyecto.',
        items: [
          'Resistencias a compresión y flexión',
          'Pavimentos hidráulicos',
          'Concretos refrigerados y bombeados',
          'Aditivos especiales y fibras'
        ],
        icon: 'FlaskConical'
      },
      {
        title: 'Levantamientos Topográficos',
        description: 'Servicios de topografía de precisión para obras de infraestructura civil y mecánica.',
        items: [
          'Uso de Estaciones Totales y GPS',
          'Elaboración de planos detallados',
          'Replanteo de obras',
          'Georreferenciación'
        ],
        icon: 'LocateFixed'
      },
      {
        title: 'Control de Calidad',
        description: 'Laboratorio y pruebas exhaustivas para certificar la conformidad del concreto suministrado.',
        items: [
          'Pruebas a compresión y flexión',
          'Toma de núcleos',
          'Ensayos de durabilidad',
          'Certificación de calidad'
        ],
        icon: 'ClipboardCheck'
      }
    ]
  },
  {
    id: 'metal',
    title: 'Metalmecánica y Tuberías',
    subtitle: 'Prefabricación y montaje industrial de alto nivel',
    category: 'industrial',
    icon: 'Settings',
    description: 'Soluciones expertas en fabricación, montaje y mantenimiento para la industria.',
    image: IMAGES.services.metal,
    details: [
      {
        title: 'Estructuras Metálicas',
        description: 'Fabricación y montaje de estructuras metálicas robustas para todo tipo de requerimientos industriales.',
        items: [
          'Cubiertas, vigas y columnas',
          'Cerramientos en malla',
          'Elementos metálicos estructurales',
          'Montaje especializado'
        ],
        icon: 'Hammer'
      },
      {
        title: 'Tuberías y Procesos',
        description: 'Soluciones integrales para sistemas de conducción de fluidos y procesos industriales complejos.',
        items: [
          'Prefabricación de tuberías',
          'Montaje de tuberías de procesos',
          'Pruebas hidrostáticas',
          'Certificación de soldaduras'
        ],
        icon: 'Wrench'
      },
      {
        title: 'Equipos Industriales',
        description: 'Montaje experto de maquinaria y equipos para plantas de producción y procesamiento.',
        items: [
          'Montaje de equipos rotativos',
          'Alineación y nivelación',
          'Soportes y anclajes',
          'Puesta en marcha'
        ],
        icon: 'Settings'
      }
    ]
  },
  {
    id: 'electric',
    title: 'Ingeniería Eléctrica',
    category: 'industrial',
    icon: 'Zap',
    description: 'Infraestructura eléctrica confiable para garantizar la energización segura de sus proyectos.',
    image: IMAGES.services.electric,
    details: [
      {
        title: 'Ingeniería Eléctrica',
        description: 'Soluciones integrales en sistemas eléctricos de potencia y distribución.',
        items: [
          'Montaje de subestaciones',
          'Acometidas de baja y media tensión',
          'Sistemas de puesta a tierra',
          'Tableros de control y distribución'
        ],
        icon: 'Zap'
      }
    ]
  },
  {
    id: 'specialized_engineering',
    title: 'Servicios de Ingeniería Especializados',
    category: 'specialized',
    icon: 'Settings',
    description: 'Soluciones técnicas avanzadas para la optimización y control de sistemas industriales.',
    image: IMAGES.services.specialized_engineering,
    details: [
      {
        title: 'Instrumentación Industrial',
        description: 'Precisión y control en sus procesos mediante servicios especializados de instrumentación.',
        items: [
          'Calibración de instrumentos',
          'Montaje de instrumentación',
          'Pruebas de lazo (Loop check)',
          'Configuración de transmisores'
        ],
        icon: 'Gauge'
      },
      {
        title: 'Puesta en Servicio',
        description: 'Acompañamiento final para asegurar el funcionamiento óptimo de todos los sistemas instalados.',
        items: [
          'Comisionamiento',
          'Pruebas funcionales',
          'Energización controlada',
          'Entrega y documentación final'
        ],
        icon: 'CheckCircle2'
      }
    ]
  },
  {
    id: 'valves',
    title: 'Mantenimiento y Pruebas de Válvulas y Calibración de Instrumentos',
    subtitle: 'Aseguramiento metrológico y confiabilidad operativa',
    category: 'industrial',
    icon: 'PencilRuler',
    description: 'Aseguramiento metrológico y confiabilidad operativa de sistemas de control.',
    image: IMAGES.services.valves,
    details: [
      'Mantenimiento integral de válvulas manuales, de control y de alivio (PSV/PRV).',
      'Calibración de instrumentos en variables de presión y temperatura con alta precisión.',
      'Precomisionamiento y comisionamiento de instrumentos de control y medición',
      'Certificación metrológica con patrones trazables bajo estándares internacionales'
    ]
  },
  {
    id: 'engineering',
    title: 'Ingeniería Básica y de Detalle',
    subtitle: 'Diseño técnico, normativo y supervisión de proyectos',
    category: 'engineering',
    icon: 'DraftingCompass',
    description: 'Desarrollamos soluciones integrando análisis técnicos, normativos y operativos para transformar ideas en proyectos ejecutables.',
    image: IMAGES.services.engineering,
    details: [
      'Ingenieria Civil',
      'Ingenieria Mecanica',
      'Ingenieria Electrica',
      'Instrumentacion y Control'
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
  },
  {
    id: '5',
    title: 'OBRAS CIVILES CENTRO ODONTOLOGICO',
    location: 'CÓRDOBA',
    client: 'CERRO MATOSO S.A.',
    image: IMAGES.projects.dentalCenter
  },
  {
    id: '6',
    title: 'Ductería extracción de gases compresor FSD 450',
    location: 'CARTAGENA',
    client: 'KAESER',
    image: IMAGES.projects.ductwork
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
  PencilRuler: <PencilRuler className="w-8 h-8" />,
  Factory: <Factory className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Paintbrush: <Paintbrush className="w-8 h-8" />,
  Hammer: <Hammer className="w-8 h-8" />,
  Waves: <Waves className="w-8 h-8" />,
  Key: <Key className="w-8 h-8" />,
  FlaskConical: <FlaskConical className="w-8 h-8" />,
  LocateFixed: <LocateFixed className="w-8 h-8" />,
  ClipboardCheck: <ClipboardCheck className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />,
  Gauge: <Gauge className="w-8 h-8" />,
  CheckCircle2: <CheckCircle2 className="w-8 h-8" />
};
