export default {
  global: {
    Name: 'Optimización digital mediante analítica web',
    Description:
      'Este componente formativo proporciona los conocimientos esenciales para analizar y optimizar estrategias digitales mediante la analítica web. A través de métricas precisas, los aprendices aprenderán a interpretar datos de redes sociales, identificar oportunidades de mejora y aplicar acciones correctivas que maximicen el impacto de los contenidos. Con herramientas especializadas, convertirán la analítica web en una ventaja competitiva en el entorno digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
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
        titulo: 'Analítica <em>web</em>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ecosistema digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estándares',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Aplicación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Interpretación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Indicadores',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ejemplos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Informes',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Acciones de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Aplicabilidad',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Efectividad de cambios',
            hash: 't_6_2',
          },
        ],
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
        download: 'downloads/CFA2_63220007_DU.pdf',
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
  complementario: [
    {
      tema: 'Herramientas de análisis.',
      referencia:
        '<em>Emagister.</em> (2025). <em>7 herramientas para la analítica de redes sociales. Emagister Blog.</em>',
      tipo: 'Artículo',
      link:
        'https://www.emagister.com/blog/7-herramientas-para-la-analitica-de-redes-sociales/',
    },
    {
      tema: 'Redes sociales.',
      referencia:
        '<em>Metricool.</em> (2024). <em>Analítica en redes sociales: qué es y cómo medirla. Metricool Blog.</em>',
      tipo: 'Artículo',
      link: 'https://metricool.com/es/analitica-en-redes-sociales/',
    },
  ],
  glosario: [
    {
      termino: 'Analítica <em>web</em>',
      significado:
        'proceso de recopilación y análisis de datos digitales para evaluar el comportamiento de los usuarios en plataformas <em>online.</em>',
    },
    {
      termino: '<em>Business suite</em>',
      significado:
        'herramienta de Meta que permite gestionar y analizar métricas de redes sociales como Facebook e Instagram.',
    },
    {
      termino: 'Conversión',
      significado:
        'acción realizada por un usuario que cumple un objetivo digital, como una compra, suscripción o descarga.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'nivel de interacción que los usuarios tienen con el contenido de una marca en redes sociales, expresado en <em>likes</em>, comentarios y compartidos.',
    },
    {
      termino: 'Google <em>Analytics</em>',
      significado:
        'plataforma de análisis web que permite monitorear el tráfico y el comportamiento de los usuarios en un sitio web.',
    },
    {
      termino: '<em>Insight</em>',
      significado:
        'conocimiento clave obtenido del análisis de datos, que permite tomar decisiones estratégicas para mejorar el rendimiento digital.',
    },
    {
      termino: 'KPIs <em>(Key Performance Indicators)</em>',
      significado:
        'indicadores clave de rendimiento utilizados para medir el éxito de una estrategia digital.',
    },
    {
      termino: '<em>Landing page</em>',
      significado:
        'página web diseñada específicamente para captar la atención de los visitantes y fomentar conversiones.',
    },
    {
      termino: 'Meta <em>business suite</em>',
      significado:
        'plataforma de Meta que permite administrar métricas y contenido en Facebook e Instagram desde un solo lugar.',
    },
    {
      termino: 'Métricas accionables',
      significado:
        'indicadores que ofrecen información útil para mejorar estrategias digitales, como la tasa de conversión o el tiempo de permanencia.',
    },
    {
      termino: 'Métricas superficiales <em>(vanity metrics)</em>',
      significado:
        'datos que parecen relevantes pero no ofrecen información clave para la toma de decisiones, como el número total de seguidores.',
    },
    {
      termino: 'Pruebas A/B',
      significado:
        'método de análisis que compara dos versiones de contenido o estrategia digital para identificar cuál obtiene mejores resultados.',
    },
    {
      termino: 'ROI <em>(Return on Investment)</em>',
      significado:
        'métrica utilizada para evaluar el retorno de inversión en campañas digitales y estrategias de <em>marketing</em>.',
    },
    {
      termino: 'SEM <em>(Search Engine Marketing)</em> ',
      significado:
        'publicidad pagada en buscadores que ayuda a aumentar el tráfico y mejorar la presencia digital de una empresa. ',
    },
    {
      termino: 'SEO <em>(Search Engine Optimization)</em>',
      significado:
        'estrategia enfocada en mejorar la visibilidad de un sitio web en motores de búsqueda como Google.',
    },
  ],
  referencias: [
    {
      referencia:
        'Coutinho, V. (2015, 14 de septiembre).<em> KPIs: descubre qué son los indicadores clave de rendimiento y cómo usarlos para orientar tus estrategias.</em> Rock Content. ',
      link: 'https://rockcontent.com/es/blog/kpis/',
    },
    {
      referencia:
        'Sordo, A. I. (2023, enero 20).<em> 12 indicadores para métricas ROI en redes sociales.</em> HubSpot. ',
      link:
        'https://blog.hubspot.es/marketing/medir-roi-marketing-redes-sociales',
    },
    {
      referencia:
        'Kaushik, A. (2010). <em>Web analytics 2.0: The art of online accountability & science of customer centricity.</em> Wiley. ',
      link: 'https://archive.org/details/webanalytics20ar0000kaus',
    },
    {
      referencia:
        'Chaffey, D., & Smith, P. (2022). <em>Digital marketing excellence: Planning, optimizing and integrating online marketing (6.ª ed.).</em> Routledge. ',
      link:
        'https://api.pageplace.de/preview/DT0400.9781000610918_A43003547/preview-9781000610918_A43003547.pdf',
    },
    {
      referencia:
        'Muñoz, G., & Elósegui, T. (2011). <em>El arte de medir: Manual de analítica web.</em> Profit Editorial. ',
      link:
        'https://books.google.com/books/about/El_arte_de_medir.html?id=NsK5wAEACAAJ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
