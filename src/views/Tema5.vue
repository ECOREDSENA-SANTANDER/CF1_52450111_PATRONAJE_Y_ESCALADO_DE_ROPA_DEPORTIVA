<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Prepatronaje y patronaje básico infantil

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema5/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El patronaje es la representación bidimensional de un volumen tridimensional, lo que permite definir la estructura de una prenda a través de planos. Este proceso es clave para desarrollar moldes o patrones que se ajusten correctamente al cuerpo.
            br
            br

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.col-md-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 16.
          span Plano en 3D
        figure
          img(src='@/assets/curso/Tema5/fig14.svg', alt='Dos representaciones de un cubo: una en perspectiva simple y otra ubicada en un sistema de coordenadas tridimensional con ejes x, y, z.')
      .col-lg-4.mb-4.col-md-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 17.
          span Plano en 2D
        figure
          img(src='@/assets/curso/Tema5/fig15.svg', alt='Desarrollo en plano de un cubo formado por seis cuadrados unidos, dispuesto en forma de cruz con pestañas laterales para su armado.')
      .col-lg-4.col-8.col-md-6
        img(src='@/assets/curso/Tema5/img02.png', alt='Texto que describa la imagen')
    p Teniendo en cuenta lo abordado hasta ahora, es pertinente preguntarse: ¿para qué sirve el patronaje? Su utilidad radica en trasladar la estructura del cuerpo humano a planos técnicos, que luego se convierten en moldes para la confección de prendas.

    .tarjeta.fondo-banner.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.mb-3
          img(src="@/assets/curso/Tema2/hoja.svg")
        .col-lg-10
          .row.justify-content-between.align-items-center.text-white(data-aos='fade-right')
            .col.mb-3.mb-sm-0
              h4.mb-1 Conceptos de prepatronaje
              p.mb-0 Consulte las generalidades del patronaje y sus diferentes métodos.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/3_Anexo_3_Conceptos_de_prepatronaje.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
          h3.bg1.py-2.w-card-text.text-white Procedimiento y entorno


    P Para lograr un producto que responda a las necesidades del cliente, es fundamental seguir una secuencia de pasos que aseguren el cumplimiento de los criterios técnicos y de calidad en la confección de prendas sobre medidas. Por tanto, se recomienda el siguiente procedimiento:
    .tarjeta.fondo-banner.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.mb-3
          img(src="@/assets/curso/Tema2/hoja.svg")
        .col-lg-10
          .row.justify-content-between.align-items-center.text-white
            .col.mb-3.mb-sm-0
              h4.mb-1 Pasos para definir el patronaje 
              p.mb-0 Pasos que se deben seguir para realizar el procedimiento de patronaje.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/4_Anexo_4_Pasos_para_definir_el_patronaje.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
          h3.bg1.py-2.w-card-text.text-white Metodología – manual de patronaje SENA


    .cajon.color-acento-contenido.p-4.mb-4(data-aos='fade-right')
      p El manual de patronaje del SENA fue elaborado por expertos con el respaldo de profesionales especializados en el área, con el objetivo de ofrecer una metodología clara para comprender el patronaje a partir del análisis del cuerpo humano. Si se desea consultar el contenido completo, se puede acceder al manual en su versión oficial.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
          h3.bg1.py-2.w-card-text.text-white Metodología – convenciones

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-7.mb-3
        .row  
          .col-lg-2.mb-3.col-4.col-md-2
            img(src="@/assets/curso/Tema5/img03.svg")
          .col-lg-12
            p En el patronaje, es esencial conocer y aplicar una serie de símbolos que facilitan la interpretación técnica de los patrones y el proceso de corte. Estas convenciones gráficas permiten leer los planos sin necesidad de textos extensos o referencias alfanuméricas, además de indicar cómo deben posicionarse las piezas al momento del corte.
            p Al despiezar un patrón, cada pieza debe estar claramente identificada con:
      .col-lg-5
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-8.mb-4.col-md-4
              img(src="@/assets/curso/Tema5/img04.svg")
            .col-lg-8
              ul.lista-ul
                li
                  i
                  |• Nombre de la pieza.
                li
                  i
                  |• Referencia.
                li
                  i
                  |• Talla.
                li
                  i
                  |• Nombre del patronista.
                li
                  i
                  |• Simbología de corte.
                li
                  i
                  |• Cantidad de veces a cortar.
                li
                  i
                  |• Piquetes de confección.
                li
                  i
                  |• Líneas de aplome.
            
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema5/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 También pueden añadirse otras especificaciones, como detalles de estampación, cambios de color o material, acabados especiales y ubicación de elementos como bolsillos.
          br
          br
          | En cuanto al trazo, se utilizan #[b formas geométricas básicas] como horizontal, vertical, perpendicular, rectángulo, cuadrado, paralelo, ángulo recto, diagonal, vértice, radio, curva cóncava, convexa, entre otras. Toda construcción parte de un rectángulo base, considerando el contorno y el largo del patrón principal.

    p Las escalas permiten representar piezas a tamaño real o reducido. Las más comunes son:
    .row.justify-content-center.align-items-center.mb-2(data-aos='fade-right')
      .col-lg-4
        .cajon.color-secundario.p-1.mb-3
          p.text-center.align-items-center Escala 1:1 (tamaño real).
      .col-lg-4
        .cajon.color-secundario.p-1.mb-3
          p.text-center.align-items-center Escala 1:2 (mitad).
      .col-lg-4
        .cajon.color-secundario.p-1.mb-3
          p.text-center.align-items-center Escala 1:4 (cuarta parte).

    p El trazo a escala es útil para construir patrones base en versiones reducidas y facilitar su análisis.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
          h3.bg1.py-2.w-card-text.text-white Materiales recomendados para trabajar el manual

    .row.justify-content-center.align-items-center.mb-4.bg3.p-5(data-aos='fade-right')
      .col-lg-6
        ul.lista-ul.lista-ul--separador
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            | Regla técnica o regla mágica con cuadrícula y ángulos de referencia.
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            | Curvígrafo para el desarrollo de curvas anatómicas.
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            | Cinta métrica graduada en centímetros.
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            | Instrumentos de marcación como lápiz técnico o portaminas.
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            | Cinta adhesiva para montaje de piezas.
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            | Tijeras destinadas exclusivamente al corte de papel.
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            | Papel técnico que facilite claridad y precisión en el trazo.
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            |Juego de reglas de patronaje, incluyendo escuadra, curvas y sisómetro.
      .col-lg-6.col-md-9
        img(src="@/assets/curso/Tema5/img06.png")

    p Estas convenciones y herramientas son fundamentales para garantizar precisión, claridad y estandarización en el desarrollo técnico de los patrones.

    .tarjeta.fondo-banner.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.mb-3
          img(src="@/assets/curso/Tema2/hoja.svg")
        .col-lg-10
          .row.justify-content-between.align-items-center.text-white
            .col.mb-3.mb-sm-0
              h4.mb-1 Manual de patronaje básico e interpretación de diseños
              p.mb-0 Se invita a consultar el manual para fortalecer la comprensión de los fundamentos técnicos y el desarrollo de habilidades en la elaboración e interpretación de prendas de vestir.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/5_Anexo_5_Manual_de_patronaje_basico_e_interpretacion_de_disenos.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
          h3.bg1.py-2.w-card-text.text-white Análisis prepatronaje


    .bloque-texto-g.bg4.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema5/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El proceso de construcción de moldes para moda infantil requiere una fase preparatoria que establezca las condiciones técnicas necesarias para el desarrollo adecuado de las prendas. Este análisis previo permite definir los parámetros metodológicos sobre los cuales se estructura el patronaje, respondiendo a las particularidades morfológicas del cuerpo infantil. El análisis prepatronaje y la definición del patrón base constituyen los dos elementos fundamentales de esta etapa.
          br
          br
          | La construcción de patrones infantiles parte de moldes base que derivan progresivamente en moldes específicos según el tipo de prenda. Para garantizar la coherencia técnica de este proceso, se deben considerar los siguientes aspectos:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
      .row.justify-content-center(titulo="Tipo de plano")
        .col-lg-6.mb-2.mb-md-0
          p Antes de iniciar el trazado, se identifica el tipo de plano sobre el cual se desarrollará el molde. Este puede ser unido, separado o montado, y su definición depende de las características estructurales de la prenda que se esté construyendo, tanto superior como inferior. La correcta identificación del plano condiciona la disposición de las piezas y la relación entre ellas durante el proceso de trazado.
        .col-lg-5.col-11.col-md-10
          figure
            img(src='@/assets/curso/Tema5/1.png', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Rectángulo inicial")
        .col-lg-6.mb-2.mb-md-0
          p Todo trazo básico se origina en la construcción de un rectángulo, figura geométrica que actúa como estructura de referencia del molde. Sus dimensiones se establecen a partir de la medida de contorno más prominente y el largo principal de la zona corporal a trabajar. Según el tipo de prenda, las medidas de referencia varían, en prendas superiores se emplean el contorno de pecho y el talle posterior, mientras que en prendas inferiores se utilizan el contorno de cadera y el largo de pierna o tiro, según corresponda.
        .col-lg-5.col-11.col-md-10
          figure
            img(src='@/assets/curso/Tema5/2.png', alt='Texto que describa la imagen')
      .row.justify-content-center(titulo=" Medida de contorno más prominente")
        .col-lg-6.mb-2.mb-md-0
          p La medida de contorno más prominente varía según el tipo de prenda que se esté trazando. En prendas superiores infantiles, el contorno de pecho constituye la referencia estructural central del patrón base; en prendas inferiores, esta función la cumple el contorno de cadera. En ambos casos, dicha medida se representa mediante convenciones o letras que facilitan y estandarizan el proceso de trazado.
          p #[b • Ejemplo:] P = contorno de pecho de la talla seleccionada / C = contorno de cadera de la talla seleccionada.
        .col-lg-5.col-11.col-md-10
          figure
            img(src='@/assets/curso/Tema5/3.png', alt='Texto que describa la imagen')
      .row.justify-content-center(titulo="Medida de largo principal")
        .col-lg-6.mb-2.mb-md-0
          p El largo inicial del rectángulo se determina a partir de la medida más extensa de la zona corporal a trabajar. En prendas superiores se emplea el largo de talle posterior como referencia de equilibrio estructural del molde; en prendas inferiores, el largo de pierna o el largo total según la tipología de la prenda. Esta medida garantiza la correcta distribución de las piezas sobre el cuerpo en cada caso.
        .col-lg-5.col-11.col-md-10
          figure
            img(src='@/assets/curso/Tema5/4.png', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Medidas empleadas en el trazo")
        .col-lg-6.mb-2.mb-md-0
          p La metodología del patronaje infantil trabaja predominantemente con medidas deducidas mediante fórmulas, complementando los datos extraídos directamente de los cuadros de tallas. Del cuadro se toman las medidas de contorno y largo principales, mientras que dimensiones secundarias como anchos de espalda, cuello, hombro, tiro o rodilla se obtienen por cálculo derivado. Este enfoque garantiza la proporcionalidad del molde frente a las variaciones morfológicas propias de cada grupo etario.
        .col-lg-5.col-11.col-md-10
          figure
            img(src='@/assets/curso/Tema5/5.png', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Manejo del papel")
        .col-lg-6.mb-2.mb-md-0
          p El trazado de moldes infantiles se ejecuta sobre papeles especializados, siendo el papel trazo o #[em manifold] el material de uso técnico estándar. Este tipo de papel presenta dos caras diferenciadas: una lisa y brillante, y otra opaca y corrugada. Se recomienda trabajar sobre la superficie opaca, ya que ofrece mejor adherencia al grafito y reduce los reflejos de luz que generan fatiga ocular durante el trazado. El uso de papel blanco contribuye adicionalmente a la legibilidad y claridad de las líneas del molde.
        .col-lg-5.col-11.col-md-10
          figure
            img(src='@/assets/curso/Tema5/6.png', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Siluetas")
        .col-lg-6.mb-2.mb-md-0
          p El tratamiento de siluetas en el patronaje infantil sigue la misma lógica procedimental que en otras líneas de patronaje, con pasos y guías metodológicas equivalentes. La distinción técnica radica en las fórmulas de proporción, ajustadas a las características morfológicas del cuerpo infantil y a los rangos de talla correspondientes a cada etapa del desarrollo, tanto para prendas superiores como inferiores.
        .col-lg-5.col-11.col-md-10
          figure
            img(src='@/assets/curso/Tema5/7.png', alt='Texto que describa la imagen')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
          h3.bg1.py-2.w-card-text.text-white Patrón básico superior infantil

    p El estudio del patronaje infantil inicia con la explicación del trazo del patrón básico superior, entendido como la base estructural a partir de la cual se desarrollan moldes más complejos y prendas de mayor detalle. Siguiendo la orientación del Manual de patronaje básico e interpretación de diseños del SENA, este primer acercamiento permite comprender las proporciones, líneas y referencias necesarias para trabajar sobre el cuerpo en crecimiento de los niños, considerando tanto su ergonomía como los principios de comodidad y ajuste.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="")
          h3.titulo.py-2.w-card-text2.text-white Paso 1
    .bg5.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.col-md-9
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 18.
            span Trazo del paso 1 del patrón básico infantil
          img(src="@/assets/curso/Tema5/fig18.svg",alt="Diagrama técnico de un trazado de patronaje donde se representan rectángulos, líneas de referencia y curvas que corresponden al cálculo de escote y hombros. Incluye medidas expresadas en función del ancho y del largo de espalda.")

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3.
      span Pasos para el trazo del rectángulo
    .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
      table
        thead
          tr
            th.w-10.text-izq Paso
            th.text-izq Fórmula o medida
            th.text-izq Trazado
            th.text-izq Función en el patrón básico infantil
        tbody
          tr
            td.text-center 1
            td Ancho = B/2 + 3 cm.
            td Construcción del ancho del rectángulo base.
            td Define la amplitud del patrón considerando la mitad del contorno de busto más una holgura de 3 cm.
          tr
            td.text-center 2
            td Alto = B/4 + 0.5 cm.
            td Construcción del alto del rectángulo base (largo de espalda).
            td Determina la proporción vertical del molde a partir del contorno de busto dividido en cuatro más 0.5 cm.
          tr
            td.text-center 3
            td División en 4 partes iguales.
            td Trazar tres líneas verticales internas en el rectángulo.
            td Sirve como referencia para ubicar sisas, espalda y delantero.
          tr
            td.text-center 4
            td 0.7 cm desde el primer punto.
            td Marcar y bajar 0.7 cm en la primera división vertical.
            td Representa la caída de hombro en la zona de espalda.
          tr
            td.text-center 5
            td 1.5 cm desde el segundo punto.
            td Marcar y bajar 1.5 cm en la segunda división vertical.
            td Define la profundidad de la sisa delantera.
          tr
            td.text-center 6
            td Arcos superiores.
            td Dibujar curvas desde la parte superior hacia los puntos de 0.7 cm y 1.5 cm.
            td Permiten modelar la forma de la sisa, adaptada a la ergonomía infantil.
          tr
            td.text-center 7
            td Curvas punteadas internas.
            td Conectar con líneas curvas los puntos de referencia hacia la base del rectángulo.
            td Indican el desarrollo interno de la sisa y diferencian espalda y delantero.
          tr
            td.text-center 8
            td División final del rectángulo.
            td Separar la zona izquierda (espalda) y la derecha (delantero).
            td Define las dos partes fundamentales del patrón básico superior infantil.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="")
          h3.titulo.py-2.w-card-text2.text-white Paso 2
    .bg5.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-lg-6.col-md-9
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 19.
            span Segundo paso del trazo del básico superior infantil 
          img(src="@/assets/curso/Tema5/fig19.svg",alt="Trazado técnico de un patrón básico infantil donde se incorporan medidas, puntos de referencia y desplazamientos específicos en hombros, escote y sisa, señalados con líneas, símbolos y valores numéricos.")


    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 4.
      span Pasos para el trazo del segundo paso del patrón básico superior
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.w-10.text-izq Paso
            th.text-izq Fórmula o medida
            th.text-izq Trazado
            th.text-izq Función en el patrón básico infantil
        tbody
          tr
            td.text-center 1
            td 
              ul.lista-ul--color
                li
                  i.fas
                  | Ancho = B/2 + 3 cm.
                li
                  i.fas
                  | Alto = B/4 + 0.5 cm.
            td Rectángulo inicial del patrón.
            td Define la base estructural a partir del contorno de busto y largo de espalda.
          tr
            td.text-center 2
            td Escote posterior = B/20 cm + 2.5 cm.
            td Marcar horizontal y bajar 1 cm; unir con curva suave.
            td Forma el escote de espalda con proporción ergonómica.
          tr
            td.text-center 3
            td Escote delantero = B/20 cm + 2.5 cm.
            td Marcar horizontal y bajar 0.5 cm; unir con curva más profunda.
            td Define el escote delantero, más abierto que el posterior.
          tr
            td.text-center 4
            td Caída de hombro: espalda = 1 cm; delantero = 0.5 cm.
            td Bajar en cada extremo y unir hacia la línea de hombro.
            td Permite la inclinación natural de los hombros en niños.
          tr
            td.text-center 5
            td Ancho de hombro con inclinación ±1 cm.
            td Proyectar desde escote hacia afuera: espalda con -1 cm y delantero con +1 cm.
            td Diferencia anatómica entre hombro de espalda y delantero.
          tr
            td.text-center 6
            td Sisa: espalda = 0.7 cm; delantero = 1.5 cm.
            td Ajustar curvas desde línea superior hacia el costado.
            td Forma la cavidad de la sisa: menos profunda en espalda, más pronunciada en delantero.
          tr
            td.text-center 7
            td Pinzas: -0.5 cm en espalda y en delantero.
            td Marcar reducciones en el talle (espalda y delantero).
            td Aseguran ajuste y moldeado en prendas superiores.
          tr
            td.text-center 8
            td Márgenes inferiores = +0.5 cm.
            td Añadir en los extremos inferiores del rectángulo.
            td Se utilizan como margen de costura y dobladillo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
          h3.bg1.py-2.w-card-text.text-white Patrón básico de manga


    .bg5.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.col-md-9
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 20.
            span Trazo de patrón básico de manga
          img(src="@/assets/curso/Tema5/fig20.svg",alt="Patrón técnico de una manga infantil donde se representan el largo total, el alto de copa y las medidas de ancho, acompañado de curvas y puntos de referencia que definen la forma de la sisa y el contorno de la manga.")


    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 5.
      span Pasos para el trazo del patrón básico de manga
    .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
      table
        thead
          tr
            th.w-10.text-izq Paso
            th.text-izq Fórmula o medida
            th.text-izq Trazado
            th.text-izq Función en el patrón básico infantil
        tbody
          tr
            td.text-center 1
            td
              ul.lista-ul.mb-0
                li
                  i.fas
                  | Ancho = circunferencia de brazo/2 + 2.5. 
                li
                  i.fas
                  | Alto = largo de manga.
            td Trazar el rectángulo base con ancho y alto según medidas.
            td Define la estructura inicial de la manga a partir de las medidas infantiles.
          tr
            td.text-center 2
            td En este paso no se aplica fórmula.
            td Dividir el rectángulo en dos mitades verticales.
            td Establece la línea central de referencia para la copa de la manga.
          tr
            td.text-center 3
            td Altura de copa = B/4 + 0.5 cm.
            td Medir sobre la línea central y marcar punto; trazar línea horizontal auxiliar.
            td Determina la altura de la copa de la manga infantil según proporción del busto.
          tr
            td.text-center 4
            td Subir +1 cm en el centro.
              p Bajar -1 cm en los extremos.
            td Dibujar curva superior de la copa uniendo los puntos con suavidad.
            td Forma la parte superior de la manga; curva más pronunciada en delantero.
          tr
            td.text-center 5
            td En este paso no se aplica fórmula.
            td Desde extremos de la copa, bajar recto hasta la base; ensanchar +1.2 cm a cada lado.
            td Define los laterales de la manga y otorga amplitud en el puño.
          tr
            td.text-center 6
            td Curva inferior = +1 cm en el centro.
            td Dibujar curva ascendente en la base del rectángulo.
            td Genera mejor movilidad y caída natural de la manga infantil.


    .cajon.color-acento-contenido.p-4.mb-4(data-aos='fade-right')
      p Se invita a consultar los videos sobre la base superior infantil, el básico de pantalón infantil y la base de falda infantil, donde se presentan los fundamentos para la construcción de patrones esenciales. A través de estos contenidos, podrá comprender el paso a paso y fortalecer sus habilidades en el desarrollo de prendas infantiles.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left").mb-3      
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/IFVssuNFdEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Base superior infantil

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left").mb-3      
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/LK1Q-kl812Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Básico de pantalón infantil


    .row.justify-content-center.align-items-center(data-aos="zoom-in-left").mb-3      
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/4CuZvqrSnJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Base de falda infantil






























































































</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
