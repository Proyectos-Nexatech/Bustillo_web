
/* 
  INSTRUCCIONES PARA IMÁGENES:
  1. Crea una carpeta llamada 'public' en la raíz del proyecto.
  2. Dentro crea una carpeta llamada 'images'.
  3. Asegúrate de que los nombres de archivo coincidan EXACTAMENTE (incluyendo extensión .jpg o .png).
  
  Nota: En Vite, los archivos en 'public' se sirven desde la raíz '/'.
*/

export const IMAGES = {
  // Logo de la empresa
  logo: 'images/Logo Bustillo.png', 

  home: {
    // Foto de portada principal
    hero: 'images/hero.jpg', 
    // Foto de la sección "Liderazgo Técnico"
    team: 'images/calidad.png',
  },
  about: {
    // Foto de cabecera de la página Nosotros
    hero: 'images/Nosotros.png',
    // Foto de la sección "Nuestra Trayectoria"
    history: 'images/Nosotros.png',
  },
  services: {
    // Fotos para cada tarjeta de servicio
    civil: [
      'images/Imagen civil 1.jpg',
      'images/Imagen civil 3.jpg',
      'images/Imagen civil 5.jpg',
      'images/Imagen civil 6.jpg',
      'images/Imagen civil 7.jpg',
      'images/Imagen civil 8.jpg',
      'images/Imagen civil 9.jpg',
      'images/Imagen3.jpg'
    ],
    metal: [
      'images/Imagen civil 4.jpg',
      'images/Imagen civil 2.jpg',
      'images/Metalmecanica 7.jpeg',
      'images/Metalmecanica.png',
      'images/Metalmecanica 5.jpeg',
      'images/Metalmecanica 6.jpeg',
      'images/Metalmecanica 8.png'
    ],
    electric: [
      'images/Electrico 1.jpeg',
      'images/Electrico 2.jpeg',
      'images/Electrico 3.jpeg',
      'images/Electrico 4.jpeg',
      'images/Electrico 5.png',
      'images/Electrico 6.jpeg',
      'images/malla 3.png',
      'images/apantallamiento.png',
      'images/incendios.png',
      'images/CCTV.png',
      'images/encerramiento.png'
    ],
    earth: 'images/Movimiento_Tierras.png',
    topo: 'images/Topografia.png',
    machinery: 'images/Maquinaria.png',
    valves: [
      'images/Valvulas 1.jpg',
      'images/valvulas 2.jpg',
      'images/valvulas 3.jpg',
      'images/valvulas 4.jpg',
      'images/valvulas 5.jpg',
      'images/valvulas 6.jpg',
      'images/valvulas 7.jpg',
      'images/Instrumentacion1.jpeg',
      'images/Instrumentacion2.jpeg',
      'images/Instrumentacion3.jpeg'
    ],
    engineering: 'images/Ingenieria.png',
    concrete: 'images/concretera.png',
    specialized_engineering: 'images/pruebas lazo.png',
    // Nueva imagen para sección de Gestión de Proyectos
    management: 'images/proyectos.png',
  },
  projects: {
    // Fotos de la galería de proyectos - Nombres descriptivos para evitar confusión
    heapLeaching: [
      'images/heapleaching1.jpg',
      'images/heapleaching2.jpg',
      'images/heapleaching3.jpg',
      'images/heapleaching4.jpg'
    ],
    maintenance: [
      'images/gecelca1.jpg',
      'images/gecelca2.jpg'
    ],
    library: 'images/library.jpg',
    paving: 'images/paving.jpg',
    dentalCenter: 'images/Imagen civil 5.jpg',
    ductwork: 'images/Instalacion Ducteria.jpg',
    asphaltWorks: 'images/Imagen_asfalto1.jpg',
    kaeser: [
      'images/kaeser1.jpeg',
      'images/kaeser 2.jpeg',
      'images/kaeser3.jpeg',
      'images/kaeser4.jpeg'
    ],
    osmoc: 'images/osmoc.jpg'
  },
  clients: {
    yara: 'images/yara.png',
    cabot: 'images/cabot.png',
    proelectrica: 'images/proelectrica.png',
    orbia: 'images/orbia.jpg',
    gyplac: 'images/gyplac.webp',
    mondi: 'images/mondi.webp',
    termo_candelaria: 'images/Termocandelaria.webp',
    kaeser: 'images/kaeser.webp',
    ecopetrol: 'images/ecopetrol.png',
    taghleef: 'images/taghleef.webp',
    oiltanking: 'images/oiltanking.png',
    cerromatoso: 'images/cerromatoso.webp',
    gecelca: 'images/gecelca.webp',
    ocensa: 'images/ocensa.png',
    carbomax: 'images/carbomax.png',
    isa: 'images/isa.png',
    prodeco: 'images/prodeco.jpg'
  }
};
