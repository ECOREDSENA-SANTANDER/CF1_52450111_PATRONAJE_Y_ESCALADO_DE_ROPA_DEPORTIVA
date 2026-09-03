export default {
  global: {
    Name: 'Sistemas de medidas y patronaje básico infantil',
    Description:
      'El componente formativo aborda los fundamentos del patronaje básico infantil aplicado a ropa deportiva, integrando el análisis de la estructura corporal, los sistemas de medidas, los cuadros de tallas y la construcción de patrones base para prendas superiores e inferiores, con base en criterios técnicos, antropométricos y metodológicos propios de la industria del vestuario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Estructura del cuerpo infantil',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'División del cuerpo',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis y clasificación de las medidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas de medidas – clasificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Las medidas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Análisis de medidas y cuadro de tallas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Universos del vestuario',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipología de prendas infantiles',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Aprovechamiento',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Prepatronaje y patronaje básico infantil',
        desarrolloContenidos: true,
        subMenu: [],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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

  glosario: [
    {
      termino: 'Amplitud de movimiento',
      significado:
        'rango articular que determina la libertad de desplazamiento del cuerpo en una dirección determinada, criterio técnico fundamental en el diseño de prendas deportivas infantiles.',
    },
    {
      termino: 'Antropometría',
      significado:
        'disciplina científica que estudia y mide las dimensiones físicas y proporciones del cuerpo humano en todas sus etapas de desarrollo, con aplicaciones en ergonomía, medicina y diseño de indumentaria.',
    },
    {
      termino: 'Biomecánica',
      significado:
        'disciplina que analiza los principios mecánicos que regulan el movimiento y la estructura del cuerpo humano, considerando las fuerzas internas y externas que actúan sobre el sistema musculoesquelético.',
    },
    {
      termino: 'Canon',
      significado:
        'prototipo de cuerpo físico que reúne características consideradas representativas de proporcionalidad en su género, utilizado como referencia en el trazado de figurines y patrones base.',
    },
    {
      termino: 'Contorno',
      significado:
        'medida tomada siguiendo la figura tridimensional del cuerpo humano alrededor de una zona específica, como cintura, pecho o cadera, empleada como referencia estructural en el patronaje.',
    },
    {
      termino: 'Cuadro de tallas',
      significado:
        'tabla técnica que organiza y clasifica las medidas corporales estandarizadas por rangos de edad o talla, utilizada como base para la construcción y escalado de patrones industriales.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'disciplina orientada a la adaptación de objetos, espacios y prendas a las condiciones de movilidad, comodidad y seguridad del cuerpo humano en situaciones de uso o actividad física.',
    },
    {
      termino: 'Escalado',
      significado:
        'proceso técnico mediante el cual un patrón base se amplía o se reduce proporcionalmente para obtener una serie de tallas a partir de una talla de referencia.',
    },
    {
      termino: 'Holgura',
      significado:
        'valor adicional que se incorpora a las medidas corporales en la construcción del patrón, con el fin de garantizar comodidad, funcionalidad y libertad de movimiento en la prenda.',
    },
    {
      termino: 'Molde',
      significado:
        'representación bidimensional en papel de cada pieza que compone una prenda, elaborada a partir del patrón base y utilizada como guía para el corte y la confección del tejido.',
    },
    {
      termino: 'Morfología',
      significado:
        'estudio de la forma externa del cuerpo humano y sus características visibles, cuyos rasgos particulares por grupo etario determinan la ubicación de medidas clave en el proceso de patronaje.',
    },
    {
      termino: 'Patrón base',
      significado:
        'molde estructural construido a partir de las medidas corporales de una talla determinada, que sirve como punto de origen para el desarrollo de moldes específicos y transformaciones de diseño.',
    },
    {
      termino: 'Proporción',
      significado:
        'relación matemática y armoniosa entre las partes del cuerpo humano, presente en todas las etapas del desarrollo y determinante para establecer las fórmulas de trazado en el patronaje infantil.',
    },
    {
      termino: 'Talle',
      significado:
        'medida vertical que expresa la longitud de un segmento corporal específico, como el talle posterior o el talle delantero, empleada como referencia principal en la construcción del rectángulo base del patrón.',
    },
    {
      termino: 'Tejido técnico',
      significado:
        'material textil con propiedades funcionales específicas, como elasticidad, transpirabilidad o resistencia, seleccionado según las exigencias de la actividad física para la que se destina la prenda deportiva infantil.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barnfield, J., y Richards, A. (2013). Manual de patronaje de moda: diseño, adaptación y personalización de los patrones de costura. Promopress. ISBN 978-84-92810-82-6.',
      link: '',
    },
    {
      referencia:
        'Donnanno, A. (2014). Técnicas de patronaje de moda, vol. 1: cómo realizar faldas, pantalones y camisas. Mujer/Hombre. Promopress. ISBN 978-84-15967-13-2.',
      link: '',
    },
    {
      referencia:
        'Drake, R. L., Vogl, A. W., y Mitchell, A. M. W. (2019). Gray. Anatomía para estudiantes (4.ª ed.). Elsevier. ISBN 978-84-9113-608-8.',
      link: '',
    },
    {
      referencia:
        'Esparza Ros, F. (Ed.). (1993). Manual de cineantropometría. Grupo Español de Cineantropometría; Federación Española de Medicina del Deporte (FEMEDE). ISBN 978-84-88100-08-5.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L. A., Moncayo Velazco, A. X., Tanaka, K., Kimura, F., y Moreno Brand, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje (SENA) y Agencia de Cooperación Internacional del Japón (JICA).',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2005). Fashion-ology: an introduction to fashion studies. Berg Publishers. ISBN 978-1-85973-814-6.',
      link: '',
    },
    {
      referencia:
        'Lorenzo, M. R. (2017). Patronaje industrial en textil y piel. Videocinco Editorial. ISBN 978-84-16852-03-1.',
      link: '',
    },
    {
      referencia:
        'Nakamichi, T. (2012). Pattern magic, vol. 1: la magia del patronaje. Editorial Gustavo Gili. ISBN 978-84-252-2438-6.',
      link: '',
    },
    {
      referencia:
        'Norton, K., y Eston, R. (Eds.). (2019). Kinanthropometry and exercise physiology (4.ª ed.). Routledge. ISBN 978-1-138-23052-1.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
