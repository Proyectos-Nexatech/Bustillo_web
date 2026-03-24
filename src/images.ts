
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
      'images/Imagen civil 2.jpg',
      'images/Imagen civil 3.jpg',
      'images/Imagen civil 4.jpg',
      'images/Imagen civil 5.jpg',
      'images/Imagen civil 6.jpg',
      'images/Imagen civil 7.jpg',
      'images/Imagen civil 8.jpg',
      'images/Imagen civil 9.jpg',
      'images/Imagen3.jpg'
    ],
    metal: 'images/Metalmecanica.png?v=2',
    electric: 'images/Electricidad_Instrumentacion.png',
    earth: 'images/Movimiento_Tierras.png',
    topo: 'images/Topografia.png',
    machinery: 'images/Maquinaria.png',
    valves: [
      'images/Valvulas.png',
      'images/Valvulas 1.jpg',
      'images/valvulas 2.jpg',
      'images/valvulas 3.jpg',
      'images/valvulas 4.jpg',
      'images/valvulas 5.jpg',
      'images/valvulas 6.jpg',
      'images/valvulas 7.jpg'
    ],
    engineering: 'images/Ingenieria.png',
    // Nueva imagen para sección de Gestión de Proyectos
    management: 'images/proyectos.png',
  },
  projects: {
    // Fotos de la galería de proyectos - Nombres descriptivos para evitar confusión
    heapLeaching: 'images/heap_leaching_cordoba.png',
    maintenance: 'images/Gecelca.jpg',
    library: 'images/library.jpg',
    paving: 'images/paving.jpg',
    dentalCenter: 'images/Imagen civil 5.jpg',
  }
};
