
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
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Thermometer,
  FileCheck,
  BadgeCheck,
  Tractor,
  Layers,
  Navigation,
  BarChart3,
  Calendar,
  Play,
  Search,
  Compass
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
    description: 'Soluciones integrales en construcción.',
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
      }
    ]
  },
  {
    id: 'earth',
    title: 'Movimiento de Tierra y Vias',
    category: 'civil',
    icon: 'Tractor',
    description: 'Ejecución integral de movimientos de tierra para proyectos de gran escala.',
    image: IMAGES.services.earth,
    details: [
      {
        title: 'Movimiento de Tierras',
        description: 'Ejecución integral de movimientos de tierra para proyectos de gran escala con maquinaria especializada.',
        items: [
          'Proyectos industriales y residenciales',
          'Excavaciones y rellenos',
          'Conformación de taludes',
          'Nivelación de terrenos'
        ],
        icon: 'Tractor'
      },
      {
        title: 'Vías en Concreto Hidráulico',
        description: 'Construcción de pavimentos rígidos diseñados para alta durabilidad y tránsito pesado.',
        items: [
          'Pavimentación de vías principales',
          'Vías internas industriales',
          'Placas huella',
          'Andenes y bordillos'
        ],
        icon: 'Navigation'
      },
      {
        title: 'Vías en Asfalto',
        description: 'Soluciones en pavimento flexible para diferentes tipos de tráfico y necesidades viales.',
        items: [
          'Construcción de vías nuevas',
          'Reparcheo y mantenimiento',
          'Carpeta asfáltica',
          'Fresado y recuperación'
        ],
        icon: 'Layers'
      },
      {
        title: 'Vías Secundarias y Terciarias',
        description: 'Intervención y mejoramiento de redes viales para garantizar la conectividad rural y de acceso.',
        items: [
          'Adecuación y mantenimiento',
          'Afirmado y compactación',
          'Obras de drenaje y cunetas',
          'Estabilización de suelos'
        ],
        icon: 'Map'
      },
      {
        title: 'Alquiler de Maquinaria',
        items: [
          'Excavadoras y retrocargadores',
          'Bulldozer y Dobletroques',
          'Mixers y bombas de concreto',
          'Equipos de compactación',
          'Plantas eléctricas e iluminación',
          'Contenedores tipo oficina'
        ],
        icon: 'Truck'
      }
    ]
  },
  {
    id: 'concrete',
    title: 'Concreto Premezclado y Topografía',
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
        icon: 'IBeam'
      },
      {
        title: 'Tuberías de Procesos',
        description: 'Soluciones integrales para sistemas de conducción de fluidos y procesos industriales complejos.',
        items: [
          'Prefabricación de tuberías',
          'Montaje de tuberías de procesos',
          'Pruebas hidrostáticas',
          'Certificación de soldaduras'
        ],
        icon: 'Pipes'
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
        icon: 'FactoryGear'
      }
    ]
  },
  {
    id: 'electric',
    title: 'Ingeniería Eléctrica',
    category: 'industrial',
    icon: 'Zap',
    description: 'Soluciones integrales en energía, seguridad y conectividad para su operación.',
    image: IMAGES.services.electric,
    details: [

      {
        title: 'MONTAJES ELECTRICOS',
        items: [
          'Sistemas de apantallamiento y malla puesta a tierra.',
          'Montaje de Subestaciones de media tensión tipo interior y exterior.',
          'Redes de distribución de energía de media y baja tensión.',
          'Sistema de canalizaciones (bandejas portacables, ductos, tubería metálicas y PVC).',
          'Instalación de sistemas de iluminación.'
        ],
        icon: 'Zap'
      },
      {
        title: 'MONTAJES CONEXOS',
        items: [
          'Sistemas de detección y Alarma contra incendio.',
          'CCTV (circuito cerrado de televisión).',
          'Sistemas de control de acceso.',
          'Redes de datos y cableado estructurado.'
        ],
        icon: 'CCTV'
      },
      {
        title: 'COBERTURA',
        description: 'INSTALACIONES ELÉCTRICAS INDUSTRIALES, COMERCIALES, RESIDENCIALES Y HOSPITALARIOS.',
        items: [], // <- Mantén esta línea exactamente así
        icon: 'Umbrella'
      }
    ]
  },
  {
    id: 'specialized_engineering',
    title: 'INSTRUMENTACION INDUSTRIAL',
    category: 'industrial',
    icon: 'GaugeCustom',
    description: 'Impulsamos tu producción desde la medición hasta la puesta en marcha.',
    image: IMAGES.services.specialized_engineering,
    details: [
      {
        title: 'Instrumentación Industrial',
        description: 'Precisión y control en sus procesos mediante servicios especializados de instrumentación.',
        items: [
          'Verificacion de instrumentos',
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
    category: 'industrial',
    icon: 'Valve',
    description: 'Aseguramiento metrológico y confiabilidad operativa de sistemas de control.',
    image: IMAGES.services.valves,
    details: [
      {
        title: 'Mantenimiento integral de válvulas manuales, de control y de alivio (PSV/PRV).',
        icon: 'Valve'
      },
      {
        title: 'Calibración de instrumentos en variables de presión y temperatura con alta precisión.',
        icon: 'Gauge'
      },
      {
        title: 'Certificación metrológica con patrones trazables bajo estándares internacionales',
        icon: 'BadgeCheck'
      }
    ]
  },
  {
    id: 'engineering',
    title: 'Ingeniería Básica y de Detalle',
    category: 'engineering',
    icon: 'DraftingCompass',
    description: 'Desarrollamos soluciones integrando análisis técnicos, normativos y operativos para transformar ideas en proyectos ejecutables.',
    image: IMAGES.services.engineering,
    details: [
      { title: 'Ingenieria Civil', icon: 'HardHat' },
      { title: 'Ingenieria Mecanica', icon: 'Settings' },
      { title: 'Ingenieria Electrica', icon: 'Zap' },
      { title: 'Instrumentacion y Control', icon: 'Cpu' }
    ]
  },
  {
    id: 'management',
    title: 'Gestión de Proyectos',
    category: 'specialized',
    icon: 'Layers',
    description: 'Operamos bajo los lineamientos del Project Management Institute (PMI), integrando herramientas digitales avanzadas y software especializado.',
    image: IMAGES.services.management,
    details: [
      {
        title: 'Alcance',
        description: 'Estructura de Desglose de Trabajo (WBS) y Control de Entregables.',
        icon: 'Map'
      },
      {
        title: 'Tiempo',
        description: 'Planificación Integrada de Cronograma y Seguimiento de Curva S.',
        icon: 'Calendar'
      },
      {
        title: 'Costo',
        description: 'Análisis y Control Presupuestario con Valor Ganado.',
        icon: 'BarChart3'
      },
      {
        title: 'Calidad',
        description: 'Gestión y seguimiento de planes de calidad.',
        icon: 'ShieldCheck'
      }
    ]
  },
  {
    id: 'supervision',
    title: 'Interventoría Técnica Multidisciplinaria',
    category: 'specialized',
    icon: 'FileCheck',
    description: 'Control Riguroso y Sistemático para el Aseguramiento de Calidad, Cumplimiento Normativo y Mitigación de Riesgos Operativos.',
    image: IMAGES.services.engineering,
    details: [
      {
        title: 'Obras Civiles',
        description: 'Aseguramiento de cimentaciones, estructuras de concreto, metálicas, geotecnia y control de materiales.',
        icon: 'HardHat'
      },
      {
        title: 'Montaje Mecánico y Tuberías',
        description: 'Verificación de alineación de equipos rotativos y estáticos, control de soldadura (ENDs) y especificaciones técnicas.',
        icon: 'Settings'
      },
      {
        title: 'Sistemas Eléctricos',
        description: 'Supervisión de redes de media y baja tensión, tableros, y comisionamiento pre-operativo (RETIE).',
        icon: 'Zap'
      },
      {
        title: 'Instrumentación y Control',
        description: 'Validación de lazos de control, calibración de instrumentos y puesta en marcha de sistemas SCADA/DCS.',
        icon: 'Cpu'
      }
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
    image: IMAGES.projects.kaeser
  },
  {
    id: '7',
    title: 'OBRAS DE REPARCEHEO EN ASFALTO-VIAS',
    location: 'CORDOBA',
    client: 'CERRO MATOSO S.A.',
    image: IMAGES.projects.asphaltWorks
  },
  {
    id: '8',
    title: 'OSMOC',
    location: 'PLANETA RICA',
    client: 'OSMOC',
    image: IMAGES.projects.osmoc
  },
  {
    id: '9',
    title: 'CONSTRUCCION BIBLIOTECA MUNICIPAL ETAPA 2',
    location: 'CAUCASIA',
    client: 'ALCALDÍA DE CAUCASIA',
    image: IMAGES.projects.municipalLibrary
  },
  {
    id: '10',
    title: 'MANTENIMIENTO EN PARADA DE PLANTA SECADOR INDUSTRIAL',
    location: 'MAMONAL CARTAGENA',
    image: IMAGES.projects.dryerMaintenance
  }
];

export const CLIENTS = [
  { name: 'LHOIST', logo: IMAGES.clients.lhoist },
  { name: 'SYNGENTA', logo: IMAGES.clients.syngenta },
  { name: 'Cabot Colombiana', logo: IMAGES.clients.cabot },
  { name: 'Orbia', logo: IMAGES.clients.orbia },
  { name: 'Gyplac', logo: IMAGES.clients.gyplac },
  { name: 'Mondi', logo: IMAGES.clients.mondi },
  { name: 'Termo Candelaria', logo: IMAGES.clients.termo_candelaria },
  { name: 'KAESER', logo: IMAGES.clients.kaeser },
  { name: 'Cerro Matoso', logo: IMAGES.clients.cerromatoso },
  { name: 'Gecelca', logo: IMAGES.clients.gecelca },
  { name: 'OCENSA', logo: IMAGES.clients.ocensa },
  { name: 'Carbomax', logo: IMAGES.clients.carbomax },
  { name: 'Prodeco', logo: IMAGES.clients.prodeco },
  { name: 'ISA', logo: IMAGES.clients.isa }
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
  CheckCircle2: <CheckCircle2 className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Thermometer: <Thermometer className="w-8 h-8" />,
  FileCheck: <FileCheck className="w-8 h-8" />,
  BadgeCheck: <BadgeCheck className="w-8 h-8" />,
  Tractor: <Tractor className="w-8 h-8" />,
  Navigation: <Navigation className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
  Calendar: <Calendar className="w-8 h-8" />,
  Play: <Play className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
  Compass: <Compass className="w-8 h-8" />,
  Valve: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M6 4h12" />
      <path d="M12 4v6" />
      <path d="M8 10h8v10H8z" />
      <path d="M2 13h6" />
      <path d="M16 13h6" />
      <path d="M5 11v4" />
      <path d="M19 11v4" />
    </svg>
  ),
  IBeam: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
    >
      {/* Cara Frontal (Perfil en I) */}
      <path d="M2 11h7v2H7v4h2v2H2v-2h2v-4H2v-2z" />

      {/* Cara Superior (Perspectiva de Profundidad) */}
      <path d="M2 11l9-8h11l-9 8z" />

      {/* Caras Laterales Derechas (Perspectiva) */}
      {/* Lateral de ala superior */}
      <path d="M9 11l13-11v2l-13 11z" />
      {/* Lateral del alma */}
      <path d="M7 13l13-11v6l-13 11z" />
      {/* Lateral de ala inferior */}
      <path d="M9 17l13-11v2l-13 11z" />
    </svg>
  ),
  Pipes: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
    >
      {/* Tubo Inferior Izquierdo */}
      <circle cx="7" cy="17" r="4" />
      <circle cx="7" cy="17" r="2.5" />
      <path d="M11 17l10-10" />
      <path d="M10 13.5l10-10" />

      {/* Tubo Inferior Derecho */}
      <circle cx="17" cy="17" r="4" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M21 17l2-2" />

      {/* Tubo Superior */}
      <circle cx="12" cy="8" r="4" />
      <circle cx="12" cy="8" r="2.5" />
      <path d="M16 8l5-5" />
      <path d="M9 11l1.5-1.5" />
    </svg>
  ),
  FactoryGear: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
    >
      {/* Fábrica */}
      <path d="M2 20h12v-6l-3-2-3 2-3-2-3 2v6z" />
      <rect x="3.5" y="15.5" width="1.5" height="1.5" />
      <rect x="7.25" y="15.5" width="1.5" height="1.5" />
      <rect x="11" y="15.5" width="1.5" height="1.5" />
      {/* Chimeneas y Humo */}
      <path d="M4.5 12v-5h2v4.5" />
      <path d="M8.5 12v-4h2v3.5" />
      <path d="M4.5 5c.5-.5 1.5-.5 2 0s3 2 4 0" />

      {/* Engranaje Superpuesto */}
      <circle cx="17.5" cy="15.5" r="5" />
      <circle cx="17.5" cy="15.5" r="1.5" />
      <path d="M17.5 9.5v1M17.5 20.5v1M11.5 15.5h1M22.5 15.5h1" />
      <path d="M13.3 11.3l.7.7M13.3 19.7l.7-.7M21 12l.7-.7M21 19l.7.7" />
    </svg>
  ),
  Flange: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
    >
      {/* Círculo exterior */}
      <circle cx="12" cy="12" r="11" />

      {/* Tubería Horizontal */}
      <path d="M1 12h8" />
      <path d="M15 12h8" />

      {/* Brida Izquierda */}
      <rect x="9" y="8" width="2" height="8" />
      {/* Pernos Izquierda */}
      <path d="M8 9h1M8 12h1M8 15h1" />

      {/* Brida Derecha */}
      <rect x="13" y="8" width="2" height="8" />
      {/* Pernos Derecha */}
      <path d="M15 9h1M15 12h1M15 15h1" />

      {/* Conexión central bolts */}
      <path d="M11 9h2M11 12h2M11 15h2" />
    </svg>
  ),
  CCTV: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      {/* Cuerpo de la cámara */}
      <path d="M7 15l-4-3 12-7 4 3-12 7z" />
      {/* Lente frontal */}
      <path d="M3 12v3c0 .5.5 1 1 1h2a1 1 0 0 0 .5-.1l-1.5-2.9" />
      {/* Ranuras laterales */}
      <path d="M12 9l3 2" />
      <path d="M13.5 8l3 2" />
      {/* Soporte/Brazo */}
      <path d="M15 13l3 2 4-1" />
      <path d="M22 13v6" />
      <path d="M21 16h2" />
    </svg>
  ),
  Umbrella: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      {/* Cúpula del paraguas */}
      <path d="M22 12a10 10 0 0 0-20 0c0 .5.5 1 1 1 .5 0 1-.5 1.5-1 .5.5 1 1 1.5 1 .5 0 1-.5 1.5-1 .5.5 1 1 1.5 1 .5 0 1-.5 1.5-1 .5.5 1 1 1.5 1 .5 0 1-.5 1.5-1 .5.5 1 1 1.5 1 .5 0 1-.5 1.5-1 .5.5 1 1 1 .5 0 1-1 1-1" />
      {/* Mango */}
      <path d="M12 11v8a2 2 0 1 1-4 0" />
    </svg>
  ),
  GaugeCustom: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
    >
      {/* Círculos de borde doble */}
      <circle cx="12" cy="12" r="10.5" />
      <circle cx="12" cy="12" r="8.5" />

      {/* Centro y Aguja */}
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <path d="M12 12l5-5" />

      {/* Marcas de graduación (ticks) */}
      <path d="M12 4.5v1.5M12 18v1.5M4.5 12h1.5M18 12h1.5" />
      <path d="M6.5 6.5l1.5 1.5M16 16l1.5 1.5M6.5 17.5l1.5-1.5M16 8l1.5-1.5" />

      {/* Pantalla digital inferior (óvalo) */}
      <rect x="9.5" y="15" width="5" height="1.5" rx="0.75" />
    </svg>
  )
};
