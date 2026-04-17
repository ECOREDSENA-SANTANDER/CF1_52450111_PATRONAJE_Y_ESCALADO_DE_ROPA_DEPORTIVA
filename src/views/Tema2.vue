<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis y clasificación de las medidas

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dentro del análisis de medidas se hace necesario traducir las medidas obtenidas del cuerpo humano, dado que esto guiará todo el proceso de patronaje en la elaboración de moldería; por ello, es importante establecer un sistema de medidas claro para poder clasificarlas y a partir de sus características emplearlas en la elaboración de patrones. 
          br
          br
    
    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1  Sistemas de medidas – clasificacións

    .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
      p El sistema de medidas en el área de patronaje hace referencia al conjunto de técnicas y procesos que se utilizan para obtener y dar aplicación con los datos obtenidos de las medidas corporales, las cuales han de ser precisas en la elaboración de patrones de prendas de vestir. 
      p Del proceso de medición dependerá el ajuste y horma de una prenda sobre el cuerpo en donde la proporcionalidad, comodidad y estética se conjuguen con el objetivo de tener un resultado esperado.

    p El sistema de medidas se clasifica en:

    .row.mb-4(data-aos="zoom-in-left")
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/1.svg' alt='')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Sistema inglés
                p.mb-0.text-center Se contempla como unidad básica de medida la pulgada, aplicada en procesos de patronaje en países como Estados Unidos, Inglaterra y Australia.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/2.svg' alt='')
            .tarjeta.color-acento-botones
              .p-4
                h4.text-center Sistema internacional o métrico decimal
                p.mb-0.text-center Se contempla como unidad básica de medida el metro, aplicado en la gran mayoría de países latinoamericanos. 


    .tarjeta.fondo-banner.p-4.mb-0(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.mb-3
          img(src="@/assets/curso/Tema2/hoja.svg")
        .col-lg-10
          .row.justify-content-between.align-items-center.text-white
            .col.mb-3.mb-sm-0
              h4.mb-1 Clasificación de las medidas
              p.mb-0 Conozca sobre los sistemas de medidas empleados en la confección de prendas de vestir.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/1_Anexo_1_Clasificacion_de_las_medidas.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2  Las medidas

    p La obtención precisa de medidas corporales representa uno de los pilares técnicos del patronaje industrial. Una medida es una unidad numérica que expresa el tamaño de una figura, objeto o segmento corporal, y su correcta toma determina la calidad del ajuste y la funcionalidad de la prenda resultante. En el patronaje infantil deportivo, esta precisión cobra mayor relevancia dado que el cuerpo en crecimiento presenta variaciones constantes que deben ser capturadas con rigor metodológico.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
      p Para la obtención de datos corporales se emplea la cinta métrica de forma lineal, instrumento que permite registrar dimensiones de largo, ancho y contorno sobre las distintas partes del cuerpo. En Colombia, la práctica estándar establece el registro de estas dimensiones en centímetros o pulgadas, según la metodología adoptada por cada proceso productivo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        img(src="@/assets/curso/Tema2/img02.png")
      .col-lg-12
        .bg2.p-4
          h5 Las medidas corporales
          p las medidas corporales se toman considerando los puntos de anclaje del cuerpo humano, a partir de parámetros antropométricos y anatómicos que garantizan la reproducibilidad y consistencia de los datos. En este proceso se tienen en cuenta los volúmenes y protuberancias corporales como referencias estructurales para la ubicación correcta de la cinta métrica. Según su dirección y naturaleza, las medidas corporales se clasifican en tres grupos:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.col-md-6
        img(src="@/assets/curso/Tema2/img03.png")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Largos")
            p Corresponden a las medidas tomadas en dirección vertical sobre el cuerpo. Registran los talles y longitudes de los distintos segmentos corporales, como el talle delantero, el talle trasero, el largo de manga o el largo total de una prenda. En el patronaje deportivo infantil, estas medidas son determinantes para establecer la proporción y la caída de la prenda sobre el cuerpo en movimiento.
           
          .tarjeta.color-acento-botones--borde.p-4(titulo="Anchos ")
            p Se obtienen en dirección horizontal y expresan las dimensiones transversales del cuerpo, tales como el ancho de pecho, el ancho de espalda o el ancho de hombros. Estas medidas inciden directamente en la amplitud de las piezas del patrón y en la libertad de movimiento que la prenda ofrece en actividades deportivas, donde la zona del tronco superior requiere especial atención técnica.
         
          .tarjeta.color-acento-botones--borde.p-4(titulo="Contornos")
            p Los contornos se registran siguiendo la figura tridimensional del cuerpo humano, rodeando completamente una zona específica. El contorno de cintura, el contorno de pecho y el contorno de cadera son ejemplos representativos. En prendas deportivas infantiles, el correcto registro de los contornos garantiza que la prenda envuelva el cuerpo sin generar presiones indebidas ni restricciones al movimiento, condición esencial en tejidos de alto desempeño funcional.


    p En la siguiente figura se presentan largos, anchos y contornos de la figura humana infantil. 

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4.
          span Toma de medidas infantil
      .col-lg-12
        img(src="@/assets/curso/Tema2/fig4.svg", alt="Diagrama de una figura femenina con líneas y números que señalan puntos clave de medición corporal, incluyendo contornos, anchos, largos y estatura total, utilizados como referencia en patronaje y confección.")

    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3  Análisis de medidas y cuadro de tallas

    p Teniendo claro el análisis y la toma de medidas, en este apartado se abordará cómo se construye un cuadro de tallas y cómo este tiene aplicabilidad en el área del patronaje.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
            h3.bg1.py-2.w-card-text.text-white Proporción versus canon

    p La proporción versus el canon hace referencia a cuantas cabezas caben en la altura del cuerpo, para ello es importante precisar: 

    .row.mb-0(data-aos="zoom-in-left")
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/3.svg' alt='')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Canon
                p.mb-0.text-center Prototipo de cuerpo físico que reúne características consideradas casi perfectas en su género, referidas específicamente a la figura humana en relación a la percepción de proporcionalidad. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/4.svg' alt='')
            .tarjeta.color-acento-botones
              .p-4
                h4.text-center Proporción
                p.mb-0.text-center Hace referencia a la relación de correspondencia entre equilibrio o simetría que están presentes entre las partes de un todo. Es esencial en disciplinas como el arte, la moda, la arquitectura entre otras. 


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
            h3.bg1.py-2.w-card-text.text-white Proporciones corporales

    p La proporción corporal hace referencia a la relación matemática y armoniosa entre las partes del cuerpo humano (Esparza, 1993). Esta proporción está dada en todas las etapas del desarrollo del ser humano, desde su nacimiento hasta la vejez. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5.
          span Proporción de acuerdo con las etapas de crecimiento
      .col-lg-10
        img(src="@/assets/curso/Tema2/fig5.svg", alt="Serie de figuras humanas que representan el crecimiento desde recién nacido hasta adultez, comparando las proporciones corporales mediante el número de cabezas utilizadas como unidad de medida: 4 en recién nacidos, 5 a los 2 años, 6 a los 6 años, 7 a los 12 años y 8 a los 25 años.")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
            h3.bg1.py-2.w-card-text.text-white Importancia de la proporción en el diseño
    
    p El concepto y aplicación de la proporcionalidad en el diseño es fundamental para lograr un equilibrio armonioso dentro de las composiciones de una prenda de vestir, dado que relacionan las diferentes partes de un modelo entre sí y con el cuerpo humano. 
    p A continuación, se presenta un ejemplo de la figura humana infantil masculina en canon y proporción.


    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6.
          span Canon infantil masculino por años
      .col-lg-10
        img(src="@/assets/curso/Tema2/fig6.svg", alt="Cuatro figuras de un modelo anatómico infantil en escala de grises. A la izquierda, el cuerpo está dividido en proporciones basadas en la medida de la cabeza.")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
            h3.bg1.py-2.w-card-text.text-white Medidas deducidas

    .cajon.color-secundario.p-4.mb-4
      p Las medidas deducidas hacen alusión a un proceso que se realiza una vez ya se han obtenido las medidas corporales del cliente, estas se utilizan para calcular un cuadro de tallas completo.  Por lo general se hace uso de dos medidas; la altura o estatura total y el contorno superior prominente. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
            h3.bg1.py-2.w-card-text.text-white Normatividad

    p A nivel internacional y nacional se plantean diversas normas para la toma de medidas corporales, entre las que se encuentran: 
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
      .row.justify-content-center(titulo="Norma Técnica Colombiana NTC-ISO 8559:1995")
        .col-lg-6.mb-2.mb-md-0
          p Fabricación de vestuario y estudios antropométricos. Dimensiones corporales.
        .col-lg-5.col-11.col-md-10
          figure
            img(src='@/assets/curso/Tema2/img04.png', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Norma UNE-EN 13402-3")
        .col-lg-6.mb-2.mb-md-0
          p Etiquetado de tallas de prendas de vestir, enfocadas al beneficio del consumidor. 
        .col-lg-5.col-11.col-md-10
          figure
            img(src='@/assets/curso/Tema2/img05.png', alt='Texto que describa la imagen')

    p A continuación, encontrará tablas de fórmulas que le permitirán comprender cómo se realiza la deducción de medidas.

    .tarjeta.fondo-banner.p-4.mb-5(data-aos="zoom-in-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.mb-3
          img(src="@/assets/curso/Tema2/hoja.svg")
        .col-lg-10
          .row.justify-content-between.align-items-center.text-white
            .col.mb-3.mb-sm-0
              h4.mb-1 Análisis de cuadro de tallas
              p.mb-0 Conozca sobre el cuadro de tallas y la deducción de medidas.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/2_Anexo_2_Analisis_de_cuadro_de_tallas.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema2',
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
