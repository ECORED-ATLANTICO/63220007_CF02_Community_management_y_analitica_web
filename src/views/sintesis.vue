<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo ofrece una visión general sobre los fundamentos de la analítica web aplicada al entorno digital y a las redes sociales. A lo largo del curso se abordan aspectos esenciales como la comprensión de métricas y su relación con objetivos SMART, la interpretación de datos y la generación de 
      i insights 
      | útiles para la toma de decisiones estratégicas.
    p También se exploran estándares clave de análisis, herramientas digitales para medición y reporte, y la implementación de acciones de mejora basadas en resultados. El contenido del componente permite conectar conceptos técnicos con su aplicación práctica, orientando a los aprendices en el diseño de estrategias más efectivas para el entorno digital. 
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="el componente formativo 'Optimización digital mediante analítica web', se ofrece una visión general del uso estratégico de datos en entornos digitales. Se abordan temas como analítica web, tipos e importancia de las métricas, análisis en redes sociales, aplicación de estándares e indicadores, herramientas para el análisis y generación de informes, finalizando con acciones de mejora orientadas a evaluar la efectividad de los cambios implementados. ")
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
