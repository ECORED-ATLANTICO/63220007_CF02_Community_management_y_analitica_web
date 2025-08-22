<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métricas

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/tema2/img01.png', alt='imagen decorativa')
      .col-lg-8
        .bg-color-terciario-t5.p-4.tarjeta
          p.mb-0 Las métricas en redes sociales permiten evaluar el desempeño de una estrategia digital y ajustar las acciones para maximizar su efectividad, son indicadores clave que reflejan el comportamiento de los usuarios en redes sociales y permiten a las empresas comprender qué contenido funciona mejor y cómo interactúan sus audiencias (Kaushik, 2020). A través de la recopilación de datos, las empresas pueden medir el impacto de sus publicaciones, campañas y la interacción con los usuarios, logrando así optimizar su presencia en el entorno digital (Chaffey & Smith, 2022).

    p.mb-5 La analítica web permite evaluar de forma estratégica el comportamiento del público en redes sociales. Para ello, es fundamental diferenciar tres tipos clave de métricas:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-10.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img02.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            p.text-bold.mb-3.text-center Métrica de alcance
            p.mb-0.text-center Las métricas de alcance muestran cuántas personas han visto una publicación. Son esenciales para analizar la visibilidad del contenido en redes sociales. Por ejemplo, una publicación puede alcanzar 50.000 impresiones.

      .col-xl-4.col-lg-6.col-10.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img03.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            p.text-bold.mb-3.text-center Métrica de 
              i engagement
            p.mb-0.text-center Evalúan la interacción del público con el contenido, incluyendo 
              i likes, comentarios y compartidos. Reflejan qué tan atractivo resulta para la audiencia. Un ejemplo común es registrar 5.000 interacciones en una publicación determinada.

      .col-xl-4.col-lg-7.col-10.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img04.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            p.text-bold.mb-3.text-center Métrica de conversión
            p.mb-0.text-center Indican cuántos usuarios realizan acciones concretas como comprar o suscribirse. Miden el impacto comercial de una estrategia digital. Por ejemplo, una publicación puede generar una conversión en ventas del 1,2 %.

    .row.col-12.mx-auto.bg-color-secundario-s5.align-items-center.p-4.tarjeta.mb-5
      .col-3.col-md-3.col-lg-1.mx-auto
        figure
          img.mb-4.mb-lg-0(data-aos="fade-right")(src='@/assets/curso/tema2/img05.svg', alt='imagen decorativa')
      .col-12.col-md-12.col-lg-11.cajon(data-aos="fade-left")
        p.mb-0 A continuación, se presenta una tabla que detalla diversas métricas utilizadas en analítica web y redes sociales. Cada una incluye su descripción, un ejemplo práctico y su clasificación según el tipo de análisis: alcance, 
          i engagement o conversión. Esta información permite interpretar de forma precisa el rendimiento de las estrategias digitales.
    

    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="")
      .col-md-12.col-lg-11
        .titulo-sexto.mb-4
          h5 Tabla 1. 
            span IA: aplicaciones, beneficios y retos éticos

        .tabla-a
          table
            caption 
              b Fuente:
              | SENA (2025)
            thead
              tr
                th Nombre de la métrica
                th Descripción
                th Ejemplo
                th Tipo
            tbody
              tr
                td.text-left Alcance 
                  i (Reach).
                td.text-left Representa el número total de usuarios únicos que visualizaron una publicación. 
                td.text-left "El post alcanzó a 1,200 usuarios." 
                td.text-left Alcance. 
              tr
                td.text-left 
                  i Clicks 
                  | por enlace.
                td.text-left Registra los 
                  i clicks en enlaces incluidos en el contenido. 
                td.text-left "El 
                  i link recibió 150 
                  i clicks 
                  | desde Instagram." 
                td.text-left Conversión. 
              tr
                td.text-left Compartidos 
                  i (Shares).
                td.text-left Indica cuántas veces los usuarios redistribuyeron el contenido en sus redes. 
                td.text-left "El video fue compartido 300 veces." 
                td.text-left 
                  i Engagement. 
              tr
                td.text-left CPC (Costo por 
                  i Click
                  | ).
                td.text-left Determina el costo monetario por cada click en anuncios pagados. 
                td.text-left "$0.20 por clic (100 
                  i clicks 
                  | por $20)." 
                td.text-left Conversión. 
              tr
                td.text-left Crecimiento de seguidores.
                td.text-left Calcula el aumento neto de seguidores en un periodo determinado.
                td.text-left "+800 seguidores (600 orgánicos)."  
                td.text-left Estos 
              tr
                td.text-left Frecuencia de publicación.
                td.text-left Establece el promedio de publicaciones realizadas en un lapso.
                td.text-left "12 posts semanales (3 + 9 
                  i stories)."  
                td.text-left Alcance. 
              tr
                td.text-left Impresiones.
                td.text-left Cuenta las veces que una publicación apareció en pantallas, incluyendo visualizaciones repetidas.
                td.text-left "El anuncio generó 5,000 impresiones." 
                td.text-left Alcance. 
              tr
                td.text-left Menciones orgánicas.
                td.text-left Cuantifica las referencias no pagadas a la marca o contenido en redes. 
                td.text-left "120 menciones en tweets orgánicos."
                td.text-left 
                  i Engagement.
              tr
                td.text-left ROI (Retorno de inversión).
                td.text-left Evalúa la ganancia económica obtenida en comparación con el costo de la campaña. 
                td.text-left "$5,000 en ventas por $1,000 invertidos." 
                td.text-left Conversión. 
              tr
                td.text-left Tasa de 
                  i engagement.
                td.text-left Calcula la interacción total (
                  i likes, 
                  | comentarios, shares) en relación con el alcance. 
                td.text-left "La publicación tuvo un 8 % de 
                  i engagement." 
                td.text-left 
                  i Engagement. 
              tr
                td.text-left Tasa de retención (video).
                td.text-left Mide el porcentaje de espectadores que continúan viendo un video tras los primeros segundos. 
                td.text-left "70 % retención hasta el minuto 5." 
                td.text-left 
                  i Engagement. 
              tr
                td.text-left Tiempo de visualización.
                td.text-left Refleja la duración promedio que los usuarios permanecen en un video o contenido. 
                td.text-left "El video se vio 1 minuto (de 3 totales)." 
                td.text-left 
                  i Engagement. 
      
    .row.col-12.col-lg-8.mx-auto.bg-color-terciario-t5.align-items-center.p-4.tarjeta.mb-5
      .col-8.col-md-3.mx-auto
        figure
          img.mb-4.mb-lg-0(data-aos="fade-right")(src='@/assets/curso/tema2/img06.png', alt='imagen decorativa')
      .col-12.col-lg-9
        .cajon.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 
            b Ejemplo empresarial.  
            | Una tienda de tecnología lanza una campaña en Facebook para promocionar laptops. Al analizar las métricas, nota que la conversión en ventas es baja, pero el 
            i engagement es alto. Con base en estos datos, decide incluir códigos de descuento en las publicaciones para incentivar la compra.
      
    separador

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_2_1 2.1 Importancia

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/tema2/img07.png', alt='imagen decorativa')
      .col-lg-8
        p.mb-3 Las métricas digitales han revolucionado la forma en que las empresas toman decisiones estratégicas. Antes, muchas decisiones de marketing se basaban en intuiciones o tendencias generales, pero ahora al interpretar estos indicadores, los equipos de marketing pueden ajustar sus estrategias y mejorar el rendimiento de sus campañas (Muñoz & Elosegui, 2018). Al contar con información precisa sobre la interacción de los usuarios, las marcas pueden identificar qué tácticas están funcionando y cuáles necesitan ajustes, optimizando sus esfuerzos para lograr mejores resultados.

        .bg-color-terciario-t5.p-4.tarjeta.mb-3
          p.mb-0 El verdadero valor de las métricas no está solo en su recopilación, sino en su interpretación. Analizar indicadores como tasas de conversión, niveles de 
            i engagement 
            | y alcance permite detectar patrones y oportunidades de mejora. Por ejemplo, si una empresa observa que ciertas publicaciones generan más interacción en un horario específico, puede adaptar su estrategia para aprovechar ese comportamiento. Así, la toma de decisiones se vuelve más efectiva, basada en datos concretos y alineada con los hábitos de consumo del público objetivo.
        p.mb-3 Además, el análisis de métricas no solo impacta el rendimiento inmediato de una estrategia digital, sino que también contribuye a la construcción de relaciones más sólidas con los clientes. Al comprender qué contenido les interesa, cómo interactúan con la marca y qué plataformas prefieren, las empresas pueden personalizar sus mensajes y mejorar la experiencia del usuario. En un mundo digital cada vez más competitivo, el uso inteligente de métricas es una ventaja clave para cualquier negocio que busque crecer y consolidarse en el mercado. 
    

    .row.col-12.col-lg-8.mx-auto.bg-color-secundario-s5.align-items-center.p-4.tarjeta.mb-5
      .col-12.col-lg-9
        .cajon.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 
            b Ejemplo empresarial.  
            | Un gimnasio lanza una campaña de publicidad en Instagram. Tras evaluar las métricas, nota que los anuncios con testimonios de clientes tienen más interacción que los anuncios tradicionales. Con esta información, deciden enfocarse en contenido generado por usuarios para mejorar su estrategia publicitaria.
      .col-8.col-md-3.mx-auto
        figure
          img.mb-4.mb-lg-0(data-aos="fade-right")(src='@/assets/curso/tema2/img08.png', alt='imagen decorativa')
    
    
    separador


    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_2_2 2.2 Tipos

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/tema2/img09.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-color-terciario-t5
            p.mb-0 El tipo de métricas está alineado con los objetivos de marketing de una empresa, ya que son la clave para evaluar si una estrategia realmente está cumpliendo su propósito. Cada estrategia tiene indicadores específicos que ayudan a medir su efectividad (Chaffey & Smith, 2022). No basta con recopilar datos sin sentido, es fundamental identificar aquellos indicadores específicos que reflejan el desempeño de cada acción y que permiten tomar decisiones informadas.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/tema2/img10.png', alt='imagen decorativa')
      .col-lg-8
          p.mb-3 Cada campaña tiene objetivos distintos, ya sea aumentar el reconocimiento de marca, generar tráfico web, mejorar la conversión o fortalecer la fidelidad del cliente. En este sentido, las métricas deben seleccionarse estratégicamente para medir aspectos relevantes de cada iniciativa. Por ejemplo, en una estrategia enfocada en redes sociales, el 
            i engagement,
            | el alcance y la tasa de interacción son métricas esenciales; mientras que en una campaña de email marketing, la tasa de apertura y el porcentaje de clics resultan determinantes.
          p.mb-0 Cuando las empresas alinean sus métricas con sus objetivos, pueden realizar ajustes oportunos y optimizar sus esfuerzos en función de datos reales, evitando decisiones basadas en suposiciones. Este enfoque les permite adaptarse a cambios en el mercado, identificar oportunidades de mejora y garantizar que cada inversión en marketing tenga un impacto tangible en el crecimiento del negocio.


    .bg-color-secundario-s5.align-items-center.p-4.tarjeta.mb-5
     p.mb-0 Comprender cómo se relacionan las métricas digitales con los objetivos de 
      i marketing 
      | permite enfocar las acciones y evaluar los resultados con base en datos relevantes. A continuación, se muestran ejemplos de esta relación:


    .row.mb-4
      .col-12.col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--morado")
          div(titulo="Aumentar el reconocimiento de marca.")
              p Alcance, tráfico web.
          div(titulo="Mejorar la interacción con la audiencia.")
              p 
                i Engagement: 
                | comentarios, compartidos.
          div(titulo="Incrementar las ventas.")
              p Conversión: compras, registros.
         
      .col-12.col-lg-4
          img(src='@/assets/curso/tema2/img11.png', alt='Imagen decorativa')
    
    p.mb-5 Las métricas digitales pueden clasificarse según el tipo de información que ofrecen. Esta categorización facilita su interpretación y permite tomar decisiones más acertadas en función del comportamiento del usuario en entornos digitales.

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Métricas de alcance" :icono="require('@/assets/curso/tema2/img12.svg')")
        .row
          .col-12.col-lg-10.m-auto
            p.text-bold Métricas de alcance
            p Estas métricas permiten conocer cuántas personas han visto un contenido en redes o plataformas digitales. Son clave para medir la visibilidad de una campaña. Ejemplos comunes incluyen impresiones, alcance total y visualizaciones.
      .py-4.py-md-5(titulo="Métricas de <em>engagement</em> (interacción)." :icono="require('@/assets/curso/tema2/img13.svg')")      
        .row
          .col-12.col-lg-10.m-auto
            p.text-bold Métricas de 
              i engagement 
              | (interacción).
            p Evalúan el nivel de participación del público con el contenido publicado. Reflejan el interés, la conexión y la respuesta de la audiencia. Se manifiestan en indicadores como likes, comentarios, compartidos y clicks.
      .py-4.py-md-5(titulo="Métricas de conversión" :icono="require('@/assets/curso/tema2/img14.svg')")      
        .row
          .col-12.col-lg-10.m-auto
            p.text-bold Métricas de conversión
            p Indican si los usuarios realizaron una acción específica luego de interactuar con el contenido, como comprar, registrarse o descargar un recurso. Muestran el impacto directo de la estrategia digital en los objetivos del negocio.
      .py-4.py-md-5(titulo="Métricas de retención o fidelización" :icono="require('@/assets/curso/tema2/img15.svg')")      
        .row
          .col-12.col-lg-10.m-auto
            p.text-bold Métricas de retención o fidelización
            p Miden si los usuarios continúan consumiendo contenido o regresan a la plataforma. Son esenciales para entender el compromiso sostenido. Ejemplos incluyen la tasa de rebote, el tiempo de permanencia y la recurrencia de visitas.
      .py-4.py-md-5(titulo="Métricas de tráfico" :icono="require('@/assets/curso/tema2/img16.svg')")      
        .row
          .col-12.col-lg-10.m-auto
            p.text-bold Métricas de tráfico
            p Analizan cuántas personas visitan un sitio web, desde dónde llegan y qué páginas consumen. Ayudan a comprender el comportamiento de navegación y la efectividad de las fuentes de atracción de usuarios.

    .row.col-12.col-lg-8.mx-auto.bg-color-terciario-t5.align-items-center.p-4.tarjeta.mb-5
      .col-8.col-md-3.mx-auto
        figure
          img.mb-4.mb-lg-0(data-aos="fade-right")(src='@/assets/curso/tema2/img17.png', alt='imagen decorativa')
      .col-12.col-lg-9
        .cajon.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 
            b Ejemplo empresarial.  
            | Un hotel analiza sus métricas y descubre que su contenido visual (fotografías de habitaciones y servicios) tiene un alto alcance pero bajo 
            i engagement.
            | Como solución, decide incluir historias con testimonios de clientes para mejorar la interacción.
     
    
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
