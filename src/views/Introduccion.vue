<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.txt--system
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-9        
        p.mb-0 El componente #[strong Fundamentos del marketing] de contenidos integra elementos comunicacionales de promoción, proyección de parrilla de contenidos edición e integración de usos de herramientas digitales para la optimización de la interacción; a continuación se entrega una presentación detallada de elementos fundamentales de este componente.
      .col-lg-3.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/intro/intro.svg", alt="alt")

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SgQDF9rcCQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
