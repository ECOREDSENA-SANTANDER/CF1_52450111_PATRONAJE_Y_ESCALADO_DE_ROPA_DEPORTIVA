<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Prepatronaje y patronaje básico infantil

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema5/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El patronaje es la representación bidimensional de un volumen tridimensional, lo que permite definir la estructura de una prenda a través de planos. Este proceso es clave para desarrollar moldes o patrones que se ajusten correctamente al cuerpo.
            br
            br

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
