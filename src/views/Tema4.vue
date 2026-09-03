<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Textiles

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los textiles, en general, ya sea para uso de vestuario o industrial, se elaboran a partir de fibras que dan origen a un filamento. Este se hila, transformándose en un hilo y, posteriormente, a partir de diversas clases de tejidos, se elaboran las telas. A continuación, encontrará los procesos generales dentro de cada apartado.
          br
          br

    .cajon.color-secundario.p-4.mb-4
      p Se invita a consultar el video para conocer las características, usos y aplicaciones de los textiles en la creación de prendas, una base clave para tomar decisiones acertadas en diseño y confección.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left").mb-4        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/kL9UYOzJD3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Caracterización de los textiles

    separador
    #t_4_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.1  Aprovechamiento

    p El aprovechamiento por metro de tela consiste en determinar cuánta tela se utiliza realmente para confeccionar una prenda en relación con la cantidad total comprada. Este cálculo es fundamental para optimizar costos, minimizar desperdicios y mejorar la eficiencia en producción. 
    p Pasos para determinar el aprovechamiento:

    .tarjeta.fondo-banner2.p-4(data-aos="zoom-in-left")
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center.align-items-center(titulo="A").p-4
          .col-lg-5.mb-3.col-md-8
            figure
              img(src='@/assets/curso/Tema4/1.png', alt='')
          .col-lg-6.mb-4.mb-md-0.text-white
            h4 Trazado de las piezas del patrón 
            p Coloque las piezas del patrón sobre la tela respetando: 
            p • El sentido del hilo (dirección de la urdimbre). 
            p • Los márgenes de costura. 
            p • El sentido del diseño o estampado, si aplica. 
        .row.justify-content-center.align-items-center(titulo="B").p-4
          .col-lg-5.mb-3.col-md-8
            figure
              img(src='@/assets/curso/Tema4/2.png', alt='')
          .col-lg-6.mb-4.mb-md-0.text-white
            h4 Distribución y encaje de piezas 
            p Organice las piezas para que ocupen el menor espacio posible dentro del ancho de la tela (normalmente 1.40 m o 1.50 m). Aquí se busca una disposición eficiente, como encajar piezas en ángulos o rotarlas si el diseño lo permite. 
       
        .row.justify-content-center.align-items-center(titulo="C").p-4
          .col-lg-5.mb-3.col-md-8
            figure
              img(src='@/assets/curso/Tema4/3.png', alt='')
          .col-lg-6.mb-4.mb-md-0.text-white
            h4 Medición de tela usada  
            p Mida el largo total de tela utilizado una vez acomodadas todas las piezas. Por ejemplo, si las piezas distribuidas ocupan 0.95 metros del total de 1 metro adquirido, ese será su valor de uso real. 
          
      
        .row.justify-content-center.align-items-center(titulo="D").p-4
          .col-md-12.mb-2.mb-md-0.text-white
            h4 Cálculo del aprovechamiento 
            p La fórmula para calcular el aprovechamiento es: 
          .col-md-5.mb-3
            .titulo-sexto.color-acento-contenido.text-white(data-aos='fade-right')
              h5 Figura 14.
              span Fórmula de aprovechamiento
            figure
              img(src='@/assets/curso/Tema4/4.svg', alt='Fórmula para calcular el porcentaje de aprovechamiento de tela a partir de la relación entre el área útil ocupada por los patrones y el área total del metro de tela.')
          .col-md-5.mb-3
            .titulo-sexto.color-acento-contenido.text-white(data-aos='fade-right')
              h5 Figura 15.
              span Ejemplo de aplicación
            figure
              img(src='@/assets/curso/Tema4/5.svg', alt='Cálculo del porcentaje de aprovechamiento de tela, cuyo resultado es 76,67 %.')
          p.text-white • Tela: 1 metro de largo x 1.50 metros de ancho = 1.5 m²
          p.text-white • Área ocupada por los patrones: 1.15 m²

        .row.justify-content-center(titulo=" E").p-4
          .col-lg-5.mb-3.text-white.mb-3
            h4 Factores que afectan el aprovechamiento
            ul.lista-ul
              li.d-flex
                i.fas •
                P.mb-0 #[b Forma y número de piezas:] prendas con muchas piezas pequeñas tienden a generar más sobrantes.
              li.d-flex
                i.fas •
                p.mb-0 #[b Ancho de la tela:] a mayor ancho, más oportunidades de optimización.
              li.d-flex
                i.fas •
                p.mb-0 #[b Diseño o estampado:] telas con dibujos direccionados limitan la rotación de piezas.
              li.d-flex
                i.fas •
                p.mb-0 #[b Técnicas de corte:] el uso de #[em software] de corte o corte manual puede influir en el rendimiento.  
          .col-lg-5.mb-3.text-white.mb-3
            h4 Consideraciones adicionales
            ul.lista-ul
              li.d-flex
                i.fas •
                P Siempre se recomienda dejar un margen de seguridad del 5 - 10 % al comprar tela.
              li.d-flex
                i.fas •
                p  El uso de retales sobrantes en otras prendas o complementos puede mejorar el rendimiento general.






























































</template>

<script>
export default {
  name: 'Tema4',
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
