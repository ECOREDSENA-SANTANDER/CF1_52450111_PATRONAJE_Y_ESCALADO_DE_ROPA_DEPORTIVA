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

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 16.
          span Plano en 3D
        figure
          img(src='@/assets/curso/Tema5/fig14.svg', alt='Dos representaciones de un cubo: una en perspectiva simple y otra ubicada en un sistema de coordenadas tridimensional con ejes x, y, z.')
      .col-lg-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 17.
          span Plano en 2D
        figure
          img(src='@/assets/curso/Tema5/fig15.svg', alt='Desarrollo en plano de un cubo formado por seis cuadrados unidos, dispuesto en forma de cruz con pestañas laterales para su armado.')
      .col-lg-4
        img(src='@/assets/curso/Tema5/img02.png', alt='Texto que describa la imagen')
    p Teniendo en cuenta lo abordado hasta ahora, es pertinente preguntarse: ¿para qué sirve el patronaje? Su utilidad radica en trasladar la estructura del cuerpo humano a planos técnicos, que luego se convierten en moldes para la confección de prendas.

    .tarjeta.fondo-banner.p-4.mb-4(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.mb-3
          img(src="@/assets/curso/Tema2/hoja.svg")
        .col-lg-10
          .row.justify-content-between.align-items-center.text-white
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


    .cajon.color-acento-contenido.p-4.mb-4
      p El manual de patronaje del SENA fue elaborado por expertos con el respaldo de profesionales especializados en el área, con el objetivo de ofrecer una metodología clara para comprender el patronaje a partir del análisis del cuerpo humano. Si se desea consultar el contenido completo, se puede acceder al manual en su versión oficial.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
          h3.bg1.py-2.w-card-text.text-white Metodología – convenciones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-3
        .row  
          .col-lg-2.mb-3
            img(src="@/assets/curso/Tema5/img03.svg")
          .col-lg-12
            p En el patronaje, es esencial conocer y aplicar una serie de símbolos que facilitan la interpretación técnica de los patrones y el proceso de corte. Estas convenciones gráficas permiten leer los planos sin necesidad de textos extensos o referencias alfanuméricas, además de indicar cómo deben posicionarse las piezas al momento del corte.
            p Al despiezar un patrón, cada pieza debe estar claramente identificada con:
      .col-lg-5
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-4
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
          | En cuanto al trazo, se utilizan formas geométricas básicas como horizontal, vertical, perpendicular, rectángulo, cuadrado, paralelo, ángulo recto, diagonal, vértice, radio, curva cóncava, convexa, entre otras. Toda construcción parte de un rectángulo base, considerando el contorno y el largo del patrón principal.

    p Las escalas permiten representar piezas a tamaño real o reducido. Las más comunes son:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4
        .cajon.color-secundario.p-1
          p.text-center.align-items-center Escala 1:1 (tamaño real).
      .col-lg-4
        .cajon.color-secundario.p-1
          p.text-center.align-items-center Escala 1:2 (mitad).
      .col-lg-4
        .cajon.color-secundario.p-1
          p.text-center.align-items-center Escala 1:4 (cuarta parte).

    p El trazo a escala es útil para construir patrones base en versiones reducidas y facilitar su análisis.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
          h3.bg1.py-2.w-card-text.text-white Materiales recomendados para trabajar el manual

    .row.justify-content-center.align-items-center.mb-4.bg3.p-5
      .col-lg-6
        ul.lista-ul.lista-ul--separador
          li
            i.fas.fa-angle-right2
            | Regla técnica o regla mágica con cuadrícula y ángulos de referencia.
          li
            i.fas.fa-angle-right2
            | Curvígrafo para el desarrollo de curvas anatómicas.
          li
            i.fas.fa-angle-right2
            | Cinta métrica graduada en centímetros.
          li
            i.fas.fa-angle-right2
            | Instrumentos de marcación como lápiz técnico o portaminas.
          li
            i.fas.fa-angle-right2
            | Cinta adhesiva para montaje de piezas.
          li
            i.fas.fa-angle-right2
            | Tijeras destinadas exclusivamente al corte de papel.
          li
            i.fas.fa-angle-right2
            | Papel técnico que facilite claridad y precisión en el trazo.
          li
            i.fas.fa-angle-right2
            |Juego de reglas de patronaje, incluyendo escuadra, curvas y sisómetro.
      .col-lg-6
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
          p El trazado de moldes infantiles se ejecuta sobre papeles especializados, siendo el papel trazo o manifold el material de uso técnico estándar. Este tipo de papel presenta dos caras diferenciadas: una lisa y brillante, y otra opaca y corrugada. Se recomienda trabajar sobre la superficie opaca, ya que ofrece mejor adherencia al grafito y reduce los reflejos de luz que generan fatiga ocular durante el trazado. El uso de papel blanco contribuye adicionalmente a la legibilidad y claridad de las líneas del molde.
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
