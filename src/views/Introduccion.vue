<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El presente componente formativo aborda los fundamentos técnicos del patronaje y escalado de ropa deportiva infantil, con énfasis en el estudio de la estructura corporal, los sistemas de medidas y la construcción de patrones base. Su desarrollo parte del reconocimiento del cuerpo infantil como objeto de análisis técnico, considerando las particularidades morfológicas, antropométricas y biomecánicas que caracterizan cada etapa del crecimiento y que inciden directamente sobre las decisiones de trazado, proporcionalidad y ajuste de las prendas.
          br
          br
          | A partir de este fundamento, el componente integra el análisis de los sistemas de medidas y los cuadros de tallas, la comprensión del sistema moda, sus universos de vestuario, el conocimiento básico de los textiles y su aprovechamiento, y la aplicación metodológica del prepatronaje y el patronaje básico infantil, tanto para prendas superiores como inferiores. 
    
    p.mb-4 La metodología empleada toma como referencia el Manual de patronaje básico e interpretación de diseños del SENA, adaptando sus lineamientos a las condiciones morfológicas del cuerpo infantil y a las exigencias funcionales del vestuario deportivo. El dominio de los contenidos aquí desarrollados sienta las bases para abordar con rigor técnico los procesos de construcción, transformación y escalado de patrones.
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
