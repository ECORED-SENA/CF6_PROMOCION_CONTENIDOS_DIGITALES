<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--system 6
      h1 Netiqueta

    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.clr_01.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/t6_01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Un buen comportamiento como usuario en cualquier contexto del ciberespacio es la mejor forma de presentarnos. Etiqueta significa conjunto de normas prescritas por una autoridad para ser tenidas en cuenta en la vida social o la oficial. 
            p Netiqueta, entonces, hace referencia a las normas de comportamiento que deben ser aplicadas por los cibernautas cuando se encuentran en línea. 

    .row.justify-content-center.mb-5
      .col-xl-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema6/t6_02.png", alt="alt")
      .col-xl-7(data-aos="fade-in")
        h3.cstmH3 Protocolos
        p Interactuar en una nueva cultura como es la del ciberespacio puede ocasionar malas interpretaciones sobre el contenido y como consecuencia de ello, llevar a cometer algunos errores de comportamiento por parte de los usuarios. Es importante resaltar que detrás de cada dispositivo hay un ser humano que piensa y actúa diferente a nosotros, y por ello se hace indispensable establecer un conjunto de reglas como protocolo. 
        p Algunas reglas básicas son:

    h3.cstmH3.mb-5 Reglas básicas del protocolo(data-aos="zoom-in")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      



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
