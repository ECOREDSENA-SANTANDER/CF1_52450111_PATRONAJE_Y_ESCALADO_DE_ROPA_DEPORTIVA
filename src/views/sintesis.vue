<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo integra los fundamentos del sistema de medidas y el patronaje básico infantil, articulando el estudio de la estructura del cuerpo (desde la antropometría, anatomía y ergonomía) con el análisis y clasificación de las medidas. Asimismo, incorpora elementos de moda, textiles y prepatronaje, permitiendo comprender las tipologías de prendas, los universos del vestuario y la construcción de patrones básicos infantiles, como base para el desarrollo técnico en la industria del vestuario.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre el sistema de medidas y patronaje básico infantil, que relaciona estructura corporal, sistemas de medidas, moda, textiles y patronaje infantil.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
