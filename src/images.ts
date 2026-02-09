
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
    civil: 'images/Foto-Obras-civiles.png',
    metal: 'images/Metalmecanica.png',
    electric: 'images/Electricidad_Instrumentacion.png',
    earth: 'images/Movimiento_Tierras.png',
    topo: 'images/Topografia.png',
    machinery: 'images/Maquinaria.png',
    valves: 'images/calibracion.png',
  },
  projects: {
    // Fotos de la galería de proyectos - Nombres descriptivos para evitar confusión
    heapLeaching: 'images/heap_leaching_cordoba.png',
    maintenance: 'images/Gecelca.jpg',
    library: 'images/library.jpg',
    paving: 'images/paving.jpg',
  }
};
