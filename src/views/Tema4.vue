<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--system 4
      h1 La parrilla de contenido

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema4/t4_01.png", alt="alt")
      .col-lg-7(data-aos="fade-in")
        p Es un #[span.txt--blue diagrama de Gantt] donde se proyectan las publicaciones de contenido que se van a realizar en las diferentes redes sociales o canales digitales de acuerdo con la estrategia de #[em marketing] digital y el objetivo propuesto por la marca para un periodo de tiempo.
        p La parrilla de contenidos o calendario de contenidos como también se le denomina permitirá:

        ol.lista-ol--cuadro.mb-0
          li 
            .lista-ol--cuadro__vineta
              span a
            | Identificar los horarios de publicaciones y llevar un registro de estos.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Programar eventos y fechas importantes.
          li 
            .lista-ol--cuadro__vineta
              span c
            | Realizar mezclas de contenidos en los diferentes canales digitales.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Estar en permanente contacto con los usuarios actualizando el contenido.
          li 
            .lista-ol--cuadro__vineta
              span e
            | Medir el impacto del contenido por canal digital.
          li 
            .lista-ol--cuadro__vineta
              span f
            | Apropiar adecuadamente los recursos conforme a la campaña a implementar. 

        p Conforme al objetivo que se haya trazado como plan de mercadotecnia digital dentro de una empresa o para hacer seguimiento a una marca en particular, encontramos los siguientes tipos de calendarios de contenidos como herramienta de trabajo administrativa.


    .bg_img_01.py-5
      .row.justify-content-center.mb-5.pt-5
        .col-lg-10(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/tema4/t4_02.svg", alt="alt")

      .crd.crd--white.crd--brad.crd--shadow.p-5(data-aos="fade-in")
        p Ahora, el cronograma de trabajo hace referencia al conjunto de actividades que deberán desarrollarse en un periodo de tiempo determinado, teniendo en cuenta unos objetivos a cumplir bajo la responsabilidad de una o más personas.
        p.mb-5 Y el calendario de trabajo hace referencia a la identificación de las fechas importantes en las cuales se deben realizar ciertas actividades para cumplir con el plan de trabajo trazado. 

        .titulo-sexto.color-acento-contenido(data-aos="fade-in")
          h5 Tabla 3.
          span Ejemplo gráfico de aplicabilidad de la parrilla de contenidos 

        .tabla-a.cstm_clr_01.mb-5(data-aos="fade-in") 
          table
            thead
              tr
                th(colspan='9') CALENDARIO DE (NOMBRE RED SOCIAL)
            tbody              
              tr.text-center.cell--gray
                td Semana
                td Fecha
                td Hora
                td Eje tem&aacute;tico
                td Objetivo
                td Formato
                td #[em copy]
                td Contenido visual
                td Notas
              tr.text-center
                td(rowspan='7') Semana 1
                td Lunes
                td 6:00 p. m.
                td Comercial
                td Incrementar ventas.
                td Imagen
                td Obt&eacute;n el 15% de descuento con nuestro c&oacute;digo
                td Debe tener fondo azul y fotos del producto.
                td Ver link para descarga de fotos.
              tr.text-center
                td Martes
                td 6:00 p. m.
                td Contenido de valor.
                td Mejorar #[em engagement].
                td #[em Reels]
                td Consejos para mejorar tu marca.
                td Cada consejo tiene de fondo un color diferente.
                td Video de 30 seg. Ver videos en Tik Tok para inspirar.
              tr.text-center
                td Mi&eacute;rcoles
                td                  
                td                  
                td                  
                td                  
                td                  
                td                  
                td                  
              tr.text-center
                td Jueves
                td                  
                td                  
                td                  
                td                  
                td                  
                td                  
                td                 
              tr.text-center
                td Viernes
                td
                td
                td
                td
                td
                td
                td
              tr.text-center
                td S&aacute;bado
                td
                td
                td
                td
                td
                td
                td
              tr.text-center
                td Domingo
                td
                td
                td
                td
                td
                td
                td


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
