<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Analítica <em>web</em>

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/tema1/img01.png', alt='imagen decorativa')
      .col-lg-8
        p.mb-4 La analítica web se refiere al proceso de recopilación, medición, análisis e interpretación de datos generados por la interacción de los usuarios en sitios web y redes sociales (Kaushik, 2020). Más allá de la simple recolección de números y estadísticas, su verdadero valor radica en la capacidad de convertir datos en conocimiento útil, proporcionando información que ayuda a comprender el comportamiento de los usuarios, sus preferencias y patrones de navegación.
        p Cada clic, cada reacción y cada minuto de navegación cuentan una historia sobre los intereses y necesidades del usuario. La analítica web transforma estos datos en información valiosa, permitiendo a las empresas mejorar sus estrategias de contenido, ajustar campañas publicitarias y optimizar la experiencia digital.
    
    .row.col-12.col-lg-8.mx-auto.bg-color-secundario-s5.align-items-center.p-4.tarjeta.position-relative.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        .cajon.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 
            b Ejemplo empresarial.  
            | Una marca de ropa puede analizar qué publicaciones generan más 
            i engagement y ajustar su estrategia para potenciar ese tipo de contenido. Un 
            i e-commerce, 
            | en cambio, puede detectar en qué paso del proceso de compra los usuarios abandonan su carrito y hacer ajustes para mejorar la conversión.
      .col-8.col-md-3.position-relative.end-0.position-xs-absolute.mx-auto.order-1.order-lg-2
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/tema1/img02.png', alt='imagen decorativa')

    .col-lg-6.mb-4.col-12.mx-auto.mb-5
      .titulo-sexto.mb-4
        h5 Figura 1. 
        span.text-dark Características de la analítica web 
      figure.mb-4
        figure.mb-3
          img(src='@/assets/curso/tema1/img03.svg', alt='En la figura 1 se describen acciones a desarrollar en el  ciclo del servicio al cliente de la siguiente manera: Preventa: detectar necesidades, presentar solución, informar, generar confianza. Venta: atender, demostrar, resolver dudas, gestionar pago/entrega. Postventa: confirmar entrega, solucionar problemas, recibir feedback, ofrecer más.').mx-auto.d-block.d-xs-none
          img(src='@/assets/curso/tema1/img03m.svg', alt='En la figura 1 se describen acciones a desarrollar en el  ciclo del servicio al cliente de la siguiente manera: Preventa: detectar necesidades, presentar solución, informar, generar confianza. Venta: atender, demostrar, resolver dudas, gestionar pago/entrega. Postventa: confirmar entrega, solucionar problemas, recibir feedback, ofrecer más.').mx-auto.d-none.d-xs-block

        figcaption 
          b Fuente: 
          | SENA, 2025.


    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/tema1/img04.png', alt='imagen decorativa')
      .col-lg-8
        p.mb-4 Las redes sociales se han convertido en el principal canal de comunicación entre empresas y consumidores, analizar datos de estas plataformas permite tomar decisiones basadas en información real en lugar de suposiciones (Muñoz & Elosegui, 2018).
        p Son múltiples los beneficios de la analítica web en redes sociales, algunos de ellos son la segmentación precisa, la cual permite conocer el perfil de la audiencia y adaptar estrategias, la optimización del contenido que ayuda a identificar qué tipo de publicaciones generan más interacción y la medición del retorno de inversión (ROI) que facilita la evaluación del impacto de campañas digitales.
  

    .row.col-12.col-lg-8.mx-auto.bg-color-secundario-s5.align-items-center.p-4.tarjeta.position-relative.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        .cajon.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 
            b Ejemplo empresarial.  
            | Un restaurante utiliza analítica web para medir la efectividad de sus publicaciones en redes sociales. Descubre que sus historias de Instagram sobre "platos del día" generan más pedidos, por lo que decide enfocarse en contenido similar para aumentar ventas.
      .col-12.col-md-3.position-relative.end-0.position-xs-absolute.mx-auto.order-1.order-lg-2
          figure
            img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/tema1/img05.png', alt='imagen decorativa')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
