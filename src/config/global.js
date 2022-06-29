export default {
  global: {
    componenteFormativo: 'Fundamentos del <i>marketing</i> de contenidos',
    descripcionCurso:
      'Optimizar la comunicación digital como propósito para el intercambio de información mediante la utilización de herramientas digitales y dispositivos electrónicos, permite un mejor posicionamiento de la marca en el ciberespacio. El presente componente formativo abarca otros temas de interés en la producción de contenidos como la promoción, tipos de contenido, la parrilla de contenidos y su utilidad, la edición, la netiqueta, <i>storytelling</i> y <i>hashtag</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comunicación digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto comunicación digital',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas y estrategias de la comunicación digital',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Lenguaje y narrativa de la comunicación digital',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Concepto comunicación digital',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'El contenido digital',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Tipos de contenido digital',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Generalidades y conceptualización de post y etiquetas',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Promoción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de promoción',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Importancia de la promoción y su diferencia con el concepto de publicidad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Producción de contenido para medios digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'La parrilla de contenido',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Edición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Netiqueta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: '<i>Storytelling</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: '<i>Hastag</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      tema: 'Concepto comunicación digital',
      referencia:
        'Fernando Felix Solís Cortés. (2020).<i>100 herramientas digitales para la educación versión 2020</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/-8TowElIV4Q',
    },
    {
      tema: 'Lenguaje y narrativa de la comunicación digital',
      referencia:
        'Fernández, D. (s.f.). <i>Los cinco mejores ejemplos de narrativas digitales. Eterdigital.</i>',
      tipo: 'Blog',
      link:
        'https://eterdigital.com.ar/los-cinco-mejores-ejemplos-de-narrativas-digitales/',
    },
  ],
  glosario: [
    {
      termino: 'Alcance orgánico',
      significado:
        'porcentaje que evalúa el impacto y el número de personas que han visto una publicación de manera natural, sin ningún tipo de promoción o publicidad de pago. ',
    },
    {
      termino: 'Alcance viral',
      significado: 'Definición',
    },
    {
      termino: 'Analítica <em>web</em>',
      significado:
        'forma de medir y analizar los datos de tráfico de un sitio web.',
    },
    {
      termino: '<em>Blog post</em>',
      significado:
        'nombre técnico que recibe la acción de publicar una entrada o un artículo en un blog.',
    },
    {
      termino: '<em>Blog roll</em>',
      significado:
        'es un <em>widget</em> (programa integrado de una web externa) que podemos instalar en nuestros blogs y visualiza en forma de lista los blogs que seguimos y que recomendamos a nuestros lectores.',
    },
    {
      termino: 'Comunidad <em>online</em>',
      significado:
        'conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente en torno a una marca o temática.',
    },
    {
      termino: '<em>Cookies</em>',
      significado:
        'pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios.',
    },
    {
      termino: '<em>Crowdsourcing</em>',
      significado:
        'acción por la cual las empresas y marcas generan contenido creativo a través de los propios clientes, fans o usuarios de internet. Este término se ha generalizado y puesto en práctica sobre todo para fomentar la participación en redes sociales.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'área de administración de un blog, conocido por todos como escritorio, desde donde se pueden gestionar todas las opciones.',
    },
    {
      termino: '<em>Engagement</em>',
      significado: 'Definición',
    },
    {
      termino: '<em>Término</em>',
      significado:
        'sensación de pertenencia y unión emocional entre una marca y un usuario. Es el objetivo de toda marca o empresa en redes sociales a través de basar la estrategia en <em>marketing</em> de contenidos y generar en cada una de las redes la mayor participación posible.',
    },
    {
      termino: '<em>Fanpage</em>',
      significado:
        'también llamada “página de fans”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una fan page no tiene límite de fans y es posible tener acceso a la información estadística de la página.',
    },
    {
      termino: 'Geolocalización',
      significado:
        'término que hace referencia al posicionamiento y a la localización geográfica de un negocio, una persona o un lugar a través de coordenadas que permite situar cualquier elemento en el mapa. Es una herramienta fundamental para aplicaciones y comercial a través del <em>mobile marketing.</em>',
    },
    {
      termino: '<em>Hashtag</em>',
      significado:
        'etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que transmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o texto. Su uso se ha extendido principalmente en redes sociales como Twitter, Instagram o Google Plus.',
    },
    {
      termino: 'Influenciador',
      significado:
        'en <em>ocial media</em> es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas.',
    },
    {
      termino: '<em>Infografía</em>',
      significado:
        'imagen que, con un conjunto de gráficos y textos, conforman un esquema visual que transmite, de forma rápida e intuitiva, conceptos e información.',
    },
    {
      termino: 'KPI',
      significado:
        'siglas de <em>Key Performance Indicator</em>; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia del social media marketing.',
    },
    {
      termino: '<em>Marketing de contenidos</em>',
      significado:
        'estrategias de <em>marketing</em> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del blog y del <em>social media marketing</em>.',
    },
    {
      termino: 'Metadatos',
      significado:
        'código que se estructura al inicio de un sitio web para clasificar el tipo de información que describe a su vez otro elemento del cual se puede obtener información detallada de sus características.',
    },
    {
      termino: 'Reputación <em>online</em>',
      significado:
        'conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales.',
    },
    {
      termino: '<em>Retargeting</em>',
      significado:
        'nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo a recibir información. Este tipo de prácticas se hacen posible si, y solo si, los usuarios admiten voluntariamente que aceptan <em>cookies</em> cuando navegan en determinado sitio.',
    },
    {
      termino: '<em>ROI</em>',
      significado:
        'siglas en inglés de <em>Return on Investment</em>, que significa retorno de la inversión. Es un indicador que mide el beneficio frente al gasto de la inversión de un proyecto de social <em>media marketing</em> en función de los objetivos y las metas logrados.',
    },
    {
      termino: 'Segmentar',
      significado:
        'en redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo.',
    },
    {
      termino: '<em>Status report</em>',
      significado:
        'documento informativo del estado de los planes de acción en las diferentes estrategias de social media, que incluye datos cuantitativos y cualitativos provenientes del resultado de la analítica <em>web</em>. ',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'técnica de <em>marketing</em> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual.',
    },
    {
      termino: 'TT',
      significado:
        'siglas de <em>Trending Topic</em>; es una de las abreviaturas más famosas de Twitter para asignar los temas más importantes e influyentes del momento. Se pueden ver los <em>trending topic</em> según el país o la ciudad a través de http://www.trends 24.in.',
    },
    {
      termino: 'Viral',
      significado:
        'contenido, del tipo que sea, que se difunde y se comparte como la pólvora entre diferentes usuarios y a través de diferentes medios y redes sociales. El objetivo de cualquier campaña de marketing es “viralizar” sus contenidos.',
    },
    {
      termino: '<em>Webinars</em>',
      significado:
        'son eventos o conferencias que tienen lugar en el medio online. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales.',
    },
    {
      termino: '<em>Youtubers</em>',
      significado:
        'personas que crean y suben videos a YouTube y han convertido su canal en algo más que una afición. El youtuber gana dinero por los anuncios de los videos o por mostrar productos patrocinados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Armstrong, G. y Kotler, P. (2003). Mercadotecnia: una introducción. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Bertolotti, S. P. (2014). Conceptos básicos comunicación digital.',
      link: '',
    },
    {
      referencia: 'Interserver. (2016). Protocolos de red comunes.',
      link:
        'https://www.interserver.net/tips/kb/common-network-protocols-ports/',
    },
    {
      referencia:
        'Jenkins, H. (2001). La cultura se vuelve global. Revisión de tecnología, 104(6), 89-89.',
      link: '',
    },
    {
      referencia: 'Kotler, P. (1997). Marketing Management. Prentice- Hall.',
      link: '',
    },
    {
      referencia: 'Rouse, M. (s. f.). Protocolos de red.',
      link: 'https://searchnetworking.techtarget.com/definition/protocol',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Navarro Macias',
        cargo: 'Experto temático',
        centro: 'Centro CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andrés Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
