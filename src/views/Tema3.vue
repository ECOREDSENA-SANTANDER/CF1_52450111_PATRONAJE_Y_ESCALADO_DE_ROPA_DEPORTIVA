<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Moda

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema3/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La moda trasciende la dimensión material de las prendas de vestir para constituirse en un fenómeno de carácter social, cultural y simbólico. Más allá de ser un conjunto de elementos indumentarios o una sucesión de tendencias, la moda funciona como un sistema construido socialmente, sustentado en normas sobre lo que se considera aceptable en determinados contextos históricos, geográficos y culturales (Kawamura, 2005). En este sentido, una prenda no comunica únicamente su función utilitaria, sino que expresa identidad, pertenencia y posicionamiento dentro de un entramado social más amplio.
            br
            br
            | Desde esta perspectiva, distintos teóricos y especialistas en el campo coinciden en denominar este fenómeno como #[b sistema moda], concepto que reconoce la complejidad de sus interrelaciones y la amplitud de sus componentes.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/icono.svg")
            h3.bg1.py-2.w-card-text.text-white Sistema moda

    .cajon.color-acento-contenido.p-4.mb-4
      p El sistema moda se concibe como una estructura que engloba no solo las prendas de vestir, sino también accesorios, complementos y calzado, junto con todas las áreas susceptibles de transformarse y adaptarse según las tendencias vigentes. Su carácter sistémico implica que cada elemento que lo compone guarda relación con los demás, y que los cambios en una parte del sistema generan efectos sobre el conjunto. En el patronaje industrial infantil deportivo, comprender este sistema permite situar el producto dentro de un contexto de mercado específico y orientar las decisiones técnicas de diseño y construcción hacia criterios coherentes con la demanda actual.
    
    separador
    #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.1 Universos del vestuario

    p Los universos del vestuario constituyen agrupaciones de prendas organizadas en categorías que responden a contextos específicos de uso. Cada universo presenta coherencia interna en tipologías de prendas, materiales textiles y criterios técnicos de aplicación. La clasificación del vestuario según la ocasión de uso estructura el proceso de desarrollo del producto y delimita con precisión el segmento de mercado al que se dirige. En el vestuario deportivo infantil, esta clasificación determina las propiedades funcionales exigibles a la prenda, los tejidos técnicos pertinentes y los parámetros de movimiento que deben considerarse en la construcción del patrón base.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1.
      span Clasificación de universos del vestuario por ocasión de uso
    .tabla-a.color-acento-contenido.mb-5
      table
        caption Fuente: (Sena, 2025)
        thead
          tr
            th.text-izq Universo
            th.text-izq Uso
            th.text-izq Ejemplos
        tbody
          tr
            td Formal
            td Eventos elegantes, reuniones importantes, fiestas de etiqueta.
            td Trajes de gala, trajes de ocasión (noche, día).
          tr
            td Informal casual
            td Vida cotidiana, actividades diarias.
            td Pantalones en #[em denim], camisetas, camisas, zapatillas, vestidos ligeros.
          tr
            td Deportivo o funcional
            td Actividad física, trabajo especializado.
            td Ropa deportiva, uniformes médicos, overoles.
          tr
            td Oficina o ejecutivo
            td Entornos laborales, negocios.
            td Trajes ejecutivos, blusas, pantalones de vestir.
          tr
            td Ceremonia y festivo
            td Bodas, graduaciones, eventos religiosos.
            td Vestidos largos, trajes formales, indumentaria cultural.
          tr
            td Fantasía
            td Teatro, cine, #[em cosplay], carnaval.
            td Disfraces, vestuario teatral, trajes de época.
          tr
            td #[em Swimwear]
            td Playa, piscina, eventos recreativos.
            td Vestidos de baño, salidas de baño, atuendos para la playa y la piscina.
          tr
            td #[em Underwear]
            td Prendas interiores.
            td Ropa interior.
          tr
            td #[em Sleepwear]
            td Para dormir o descansar.
            td Ropa de descanso, pijamas.

    .cajon.color-secundario.p-4.mb-4
      p #[b Ocasión de uso:] contempla los posibles escenarios en los que una persona o grupos de personas usan una prenda de acuerdo al contexto, esto es pactado culturalmente y hace parte de la identidad culturar individual y grupal.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span Clasificación de universos del vestuario por ocasión de uso
        .tabla-a.color-acento-contenido.mb-4
          table
            caption Fuente: (Sena, 2025)
            thead
              tr
                th.w-25.text-izq Ocasión de uso
                th.w-75.text-izq Universo de vestuario
            tbody
              tr
                td Protocolario
                td 
                  ul.lista-ul
                    li
                      i
                      |Gala
                    li
                      i
                      |Formal
              tr
                td Multiocasión
                td Casual

              tr
                td Informal
                td 
                  ul.lista-ul
                    li
                      i
                      | #[em Kakiwear]
                    li
                      i
                      | #[em Jeanswear]
                    li
                      i
                      | #[em Sportswear]
                    li
                      i
                      | #[em Activewear]
              tr
                td Oficina o ejecutivo
                td
                  ul.lista-ul
                    li
                      i
                      | #[em Swimwear]
                    li
                      i
                      | #[em beachwear]
                    li
                      i
                      | #[em Sleepwear]
                    li
                      i
                      | #[em Underwear]
      .col-lg-6.col-10.col-md-8
        img(src="@/assets/curso/Tema3/img02.png")

    .cajon.color-acento-contenido.p-4.mb-4
      p Se invita a consultar el video para comprender cómo el vestuario se adapta a diferentes contextos, estilos y funciones, según las ocasiones de uso y las necesidades del mercado.
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/VsTacEciP3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Gamas de mercado - universos de vestuarios - ocasiones de uso

    separador
    #t_3_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.2  Tipología de prendas infantiles

    p Las tipologías de las prendas se clasifican en función de la estructura corporal. Por esta razón, para completar la etapa de conceptualización, resulta necesario realizar una clasificación que permita identificar las partes de las prendas según la arquitectura del cuerpo. En este sentido, se presenta el siguiente video.

    .cajon.color-acento-contenido.p-4.mb-4
      p Se invita a consultar el video para comprender cómo el vestuario se adapta a diferentes contextos, estilos y funciones, según las ocasiones de uso y las necesidades del mercado.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left").mb-4        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/leHGYnfUxGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Categorías de prendas – tipologías – bitácora de formas

    p A continuación, se presentan prendas deportivas para niños:

    .fondo3
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          .tarjeta.bg3(data-aos="zoom-in-left")
            SlyderA(tipo="a").p-4
              .row.justify-content-center
                .col-lg-8.mb-2.mb-md-0.col-12
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 7.
                    span Prendas deportivas infantiles
                .col-lg-8.col-10.col-md-8
                  figure
                    img(src='@/assets/curso/Tema3/1.png', alt='Dos niños pequeños de pie al aire libre, vistiendo conjuntos deportivos a juego.')
              .row.justify-content-center
                .col-lg-8.mb-4.mb-md-0.col-12
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 8.
                    span Chaqueta para niña
                .col-lg-8.col-10.col-md-8
                  figure
                    img(src='@/assets/curso/Tema3/2.png', alt='Niña vistiendo una chaqueta deportiva.')
              
              .row.justify-content-center
                .col-lg-8.mb-4.mb-md-0.col-12
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 9.
                    span Conjuntos de camiseta con pantaloneta
                .col-lg-8.col-10.col-md-8
                  figure
                    img(src='@/assets/curso/Tema3/3.png', alt='Dos niños vistiendo conjuntos deportivos de camiseta y pantaloneta, masculino y femenino. ')
              
              .row.justify-content-center
                .col-lg-8.mb-4.mb-md-0.col-12
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 10.
                    span Conjunto de falda y camiseta 
                .col-lg-8.col-10.col-md-8
                  figure
                    img(src='@/assets/curso/Tema3/4.png', alt='Niña vistiendo conjunto deportivo de falda y camiseta.')
              
              .row.justify-content-center
                .col-lg-8.mb-4.mb-md-0.col-12
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 11.
                    span Conjunto chándal
                .col-lg-8.col-10.col-md-8
                  figure
                    img(src='@/assets/curso/Tema3/5.png', alt='Niña vistiendo conjunto deportivo chándal.')
              
              .row.justify-content-center
                .col-lg-8.mb-4.mb-md-0.col-12
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 12.
                    span Conjunto licrado de #[em leggins]
                .col-lg-8.col-10.col-md-8
                  figure
                    img(src='@/assets/curso/Tema3/6.png', alt='Niña vistiendo un conjunto licrado de leggins.')              
              
              .row.justify-content-center
                .col-lg-8.mb-4.mb-md-0.col-12
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 13.
                    span Conjunto deportivo #[em sport] casual
                .col-lg-8.col-10.col-md-8
                  figure
                    img(src='@/assets/curso/Tema3/7.png', alt='Niño vistiendo un conjunto deportivo tipo sport casual.')              





























































































































</template>

<script>
export default {
  name: 'Tema3',
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
