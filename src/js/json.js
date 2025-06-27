export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del servicio técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Protocolos de atención al cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión de peticiones y escalamiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Documentación y trazabilidad del servicio',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de incidentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación y ciclo de vida de incidentes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos de resolución y <em>troubleshooting</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tiempos de atención y <em>SLAs</em>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistemas <em>Help Desk</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Formato y registros de servicio',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Métricas y evaluación del servicio',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Conclusiones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF01_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Soporte técnico y atención al cliente en la reparación de equipos',
    Description:
      'Este componente ofrece una descripción de los procesos que conforman el soporte técnico y la atención al cliente en la reparación de equipos. Abarca protocolos de atención al cliente, manejo de escalamiento y documentación de incidencias. Asimismo, se destacan estrategias de gestión de incidentes, clasificación y ciclo de vida de los problemas, y aplicación de métodos de resolución efectivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
}
