<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--system 7
      h1 Storytelling
    
    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-9
        .row.justify-content-center.mb-4.mb-lg-0(data-aos="fade-in")
          .col-lg-8
            p La narración de una buena historia genera emoción, inspiración y fidelización. Storytelling es el arte de contar historias a través de la publicidad. El mundo digital transformó el lenguaje de la publicidad, hoy las marcas no solo hablan de los beneficios, sino de los valores agregados de sus productos o servicios. Por ejemplo, productos que desaparecen las manchas de la ropa hay muchos, mejores resultados obtendrán quien narre de manera diferente la  historia por un canal digital.
            .crd.crd--mint.p-3.mb-4
              p.mb-0 <i>Storytelling</i> consiste en captar la atención de un público objetivo mediante la narración de una historia. Su propósito es generar compromiso (<i>engagement</i>) y reminiscencia de marca creando vínculos con los usuarios y leads en función del tiempo.  
          .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema7/t7_01.png", alt="alt")
          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/dots_01.svg", alt="alt")
            .col-lg
              p.mb-0 La narrativa transmedia hace referencia a los diferentes medios digitales (propios, ganados, pagados) y plataformas web que se utilizan para el relato de una historia.  #[span.txt--blue Jenkins] (2001), presenta las características principales que debe tener una historia transmediática:
      .col-lg-3.d-none.d-lg-flex(data-aos="fade-in")
        figure
          img(src="@/assets/curso/temas/tema7/t7_02.png", alt="alt")

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in")
      h5 Figura 4.
      span Características historia transmedia

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/tema7/t7_03.svg", alt="alt")

    p.mb-5(data-aos="fade-in") El universo de una historia transmedia tiene tres componentes clave como matriz de información para la expansión de los relatos:

    .bg_darkGreen.py-5
      .row.justify-content-center.mb-4
        .col-xl-3.col-7.mb-4
          .crd.crd--hole.p-5(data-crdNum="01")(data-aos="zoom-in")
            .row.align-items-center.mb-3
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema7/t7_04.svg", alt="alt").img70
              .col-lg
                p.mb-0 #[strong Mythos]
            p.mb-3 Hacen parte del o los conflictos, los personajes, los mitos, las leyes naturales y mágicas que rigen el universo, es decir, es la historia como tal. 
        .col-xl-3.col-7.mb-4
          .crd.crd--hole.p-5(data-crdNum="02")(data-aos="zoom-in")
            .row.align-items-center.mb-3
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema7/t7_05.svg", alt="alt").img70
              .col-lg
                p.mb-0 #[strong Etho]
            p.mb-3 Hacen parte de él: los sistemas de valores y las relaciones, protocolos que se permite y que no en el contexto del universo.  
        .col-xl-3.col-7.mb-4
          .crd.crd--hole.p-5(data-crdNum="03")(data-aos="zoom-in")
            .row.align-items-center.mb-3
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema7/t7_06.svg", alt="alt").img70
              .col-lg
                p.mb-0 #[strong Topos]
            p.mb-3 Hace referencia al tiempo o espacio en el que transcurre dicho universo.

      .row.justify-content-center.align-items-center
        .col-xl-9.order-2.order-xl-1(data-aos="fade-in")
          .cajon.cjn--mint.p-4
            p El protocolo para contar una buena historia está basado en las técnicas que se utilizan para generar un buen engagement; a continuación, se presentan siete técnicas para lograrlo:
            ol.lista-ol--cuadro.mb-0
              li 
                .lista-ol--cuadro__vineta.blue
                  span 1
                | Narrar una historia personal.
              li 
                .lista-ol--cuadro__vineta.blue
                  span 2
                | El usuario debe ser un personaje de la historia. 
              li 
                .lista-ol--cuadro__vineta.blue
                  span 3
                | Debe haber un sentido de humanidad en los hechos. 
              li 
                .lista-ol--cuadro__vineta.blue
                  span 4
                | Se deben superar obstáculos. 
              li 
                .lista-ol--cuadro__vineta.blue
                  span 5
                | Se debe usar un lenguaje natural y coloquial. 
              li 
                .lista-ol--cuadro__vineta.blue
                  span 6
                | Debe haber un llamado a la acción. 
              li 
                .lista-ol--cuadro__vineta.blue
                  span 7
                | Debe haber un final feliz. 
        .col-xl-3.col-8.order-1.order-xl-2.mb-4.mb-xl-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/tema7/t7_07.png", alt="alt")
        

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
