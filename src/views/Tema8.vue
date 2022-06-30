<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--system 8
      h1 #[em Hashtag]

    .crd.crd--banner_01.p-5(data-aos="zoom-in").mb-5
      .row
        .col-lg-6
          p Es la combinación del símbolo (#) y una palabra o conjunto de palabras que una vez indexadas en una plataforma de red social cumple el propósito de conducir al usuario internauta mediante un hyperlink a una o varias páginas #[em web] donde encontrará información de su interés. 
          p.mb-0 El #[em hashtag] nace en el año 2007 en la red social Twitter y todos los 23 de agosto de cada año se celebra el #[em #hashtagDay]. Es utilizado en las redes sociales especialmente Twitter, pero también en Instagram, Facebook, Google+, Tumblr, Pinterest y Tik Tok.
    
    .row.justify-content-center
      .col-lg-5.col-8.mb-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema8/t8_02.png", alt="alt")
      .col-lg-7(data-aos="fade")
        p En el material complementario encontrará el top de los #[em hashtags] más relevantes del momento en la red social Instagram. En la red social Twitter los #[em hashtag] permitirán identificar mensajes con un tema específico. 

        p Etiquetar las publicaciones trae ciertos beneficios en las redes sociales, una manera de organizarlos es bajo la utilización del #[em hashtag], cada etiqueta al contenido producido permitirá dar alcance a un público objetivo como implementación de la estrategia de #[em marketing] digital.

        p.mb-0 Para Sebastián Raidán autor del #[em e-book] Potencia tu Instagram etiquetar el contenido permitirá dar alcance y obtener los siguientes beneficios “1.- Optimización para el descubrimiento; 2.- Incremento del tráfico; 3.- Exhibición de los Brand Advocates; 4.- Medición; 5.- Esfuerzos cruzados” 

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
