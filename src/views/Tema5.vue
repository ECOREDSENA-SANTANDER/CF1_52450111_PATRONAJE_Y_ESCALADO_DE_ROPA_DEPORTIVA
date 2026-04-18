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
