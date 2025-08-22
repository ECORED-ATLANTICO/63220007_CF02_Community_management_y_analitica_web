<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-10.col-sm-7.col-lg-4
        figure
          img(data-aos="fade-in")(src="../assets/curso/intro/img01.png" alt="Imagen decorativa")
      .col-lg-8
        p En un mundo donde la presencia digital define la competitividad de las empresas, la analítica web se ha convertido en una herramienta clave para comprender el comportamiento de los usuarios en plataformas digitales. Ya no basta con publicar contenido; es esencial analizar los datos generados para mejorar estrategias y lograr objetivos de negocio.
        .row.px-4.py-3.bg-color-terciario-t5.rounded-3.align-items-center.justify-content-center
          .col-lg-9.p-0
            p.mb-0 Este componente formativo busca proporcionar los conocimientos y habilidades necesarias para evaluar el comportamiento de las redes sociales mediante herramientas de analítica web, permitiendo la implementación de acciones de mejora. A lo largo de este componente, se explorarán conceptos fundamentales, métricas clave, estándares de analítica y herramientas utilizadas por los profesionales del marketing digital.
          .col-lg-3.d-none.d-lg-block
            figure
              img(data-aos="fade-in")(src="../assets/curso/intro/img02.svg" alt="Imagen decorativa")

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/OFIskkY1D68" title="Análisis estratégico del mercado internacional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)

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
