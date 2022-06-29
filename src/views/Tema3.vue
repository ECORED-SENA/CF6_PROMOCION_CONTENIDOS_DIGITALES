<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--system 3
      h1 Producción de contenido para medios digitales

    .row.justify-content-center
      .col-lg-3.d-none.d-xl-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema3/t3_02.png", alt="alt")
      .col-xl-9.col-lg-12(data-aos="zoom-in")
        .row.justify-content-center(data-aos="fade-in")
          .col-lg-4.col-8.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/t3_01.png", alt="alt")
          .col-lg-8
            p El #[i marketing] de contenidos es la intersección entre publicidad y publicación. Por ejemplo, en un periódico de noticias el contenido es la información que contiene en sí mismo, la publicidad son los anuncios de marcas o promociones. 
            .cajon.cjn--blue.p-4.mb-3
              p Un buen contenido genera #[span.txt--blue valor].
              p El valor atrae la #[span.txt--blue audiencia].
              p.mb-0 La audiencia consume la #[span.txt--blue publicidad].

            p La producción de contenidos hace referencia a la estructuración de la información con el propósito de generar interés en el consumidor o público objetivo. Una de las técnicas de la producción de contenidos es el #[i copywriting], definido como la #[span.txt--blue “forma de escribir de manera persuasiva con la intención de generar una acción”].

          p El propósito del #[i copywriting] no solo es generar texto, también es generar ideas. El resultado de una buena estrategia de contenidos es crear autoridad en el nicho de mercado produciendo textos de alta calidad.

      p(data-aos="fade-in") La Importancia en la producción de contenidos es la propuesta de valor para el consumidor o cliente. Educar, inspirar o entretener son pilares fundamentales como aporte a la satisfacción del cliente. <br><br>Dentro de las ventajas de la propuesta de valor se encuentran:

    figure.px-lg-5.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/temas/tema3/t3_03.svg", alt="alt")

    p.mb-5(data-aos="fade-in") El impacto que puede llegar a generar un contenido se puede establecer acorde a la temática, la población a la que va dirigida, el tráfico que genera, entre muchos otros indicadores. Los siguientes son los tipos de contenidos a destacar. 

    .bg_greenGray.py-5.mb-5

      SlyderE(indicadores="derecha")(data-aos="fade-in")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Contenido que conciencia y conecta
            p Hace referencia al contenido que conecta al consumidor (tráfico) con la marca o empresa. 
            .row
              .col-lg-6
                h5 Contenido
                ul.lista-ul--color              
                  li 
                    i.fas.fa-dot-circle
                    | Artículos de #[em blog]
                  li 
                    i.fas.fa-dot-circle
                    | #[em Podcast]
                  li 
                    i.fas.fa-dot-circle
                    | Video 
                  li 
                    i.fas.fa-dot-circle
                    | Actualizaciones en redes
                  li 
                    i.fas.fa-dot-circle
                    | Sociales
                  li 
                    i.fas.fa-dot-circle
                    | Imágenes 

              .col-lg-6
                h5 Tráfico
                ul.lista-ul--color              
                  li 
                    i.fas.fa-dot-circle
                    | SEO
                  li 
                    i.fas.fa-dot-circle
                    | Canal digital
                  li 
                    i.fas.fa-dot-circle
                    | Publicidad digital 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/t3_04.jpg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Contenido que genera leads (clientes potenciales, suscriptores)
            p Hace referencia al contenido que permite obtener información valiosa del cliente potencial para la generación de las estrategias de marketing de la marca o empresa.  
            .row
              .col-lg-6
                h5 Contenido
                ul.lista-ul--color              
                  li 
                    i.fas.fa-dot-circle
                    | Lead Magnet (propuesta irresistible que ofrece un pedazo específico de valor al prospecto a cambio de su información de contacto)
                  li 
                    i.fas.fa-dot-circle
                    | Evento         

              .col-lg-6
                h5 Tráfico
                ul.lista-ul--color              
                  li 
                    i.fas.fa-dot-circle
                    | SEO                
                  li 
                    i.fas.fa-dot-circle
                    | Publicidad digital                
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/t3_05.jpg', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Contenido que vende, lleva a la conversión y ascenso
            p Hace referencia al contenido que ayude al prospecto a tomar una decisión de compra informada.  
            .row
              .col-lg-6
                h5 Contenido
                ul.lista-ul--color              
                  li 
                    i.fas.fa-dot-circle
                    | Historia del cliente
                  li 
                    i.fas.fa-dot-circle
                    | Demo del producto     
                  li 
                    i.fas.fa-dot-circle
                    | Comparación del producto     
                  li 
                    i.fas.fa-dot-circle
                    | Evento     

              .col-lg-6
                h5 Tráfico
                ul.lista-ul--color              
                  li 
                    i.fas.fa-dot-circle
                    | Email              
                  li 
                    i.fas.fa-dot-circle
                    | Mensajería instantánea               
                  li 
                    i.fas.fa-dot-circle
                    | Canal digital               
                  li 
                    i.fas.fa-dot-circle
                    | Publicidad digital               
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/t3_06.jpg', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Contenido que lleva a la emoción
            p Hace referencia al contenido que integra las emociones y sentimientos del segmento de mercado que se quiere impactar.  
            .row
              .col-lg-6
                h5 Contenido
                ul.lista-ul--color              
                  li 
                    i.fas.fa-dot-circle
                    | Inducción
                  li 
                    i.fas.fa-dot-circle
                    | Adoctrinamiento    
                  

              .col-lg-6
                h5 Tráfico
                ul.lista-ul--color              
                  li 
                    i.fas.fa-dot-circle
                    | Email              
                  li 
                    i.fas.fa-dot-circle
                    | Mensajería instantánea                             
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/t3_07.jpg', alt='')

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        .crd.crd--mint.crd--brad.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/componentes/cta_01.svg").img110
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Conceptos básicos y características del contenido digital
                  p.mb-0.text-small Se invita a ver el siguiente video, el cual amplía el concepto de contenido, su impacto y relevancia en la comunicación digital. 
                .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=1p9t9ymdH6Y" target="_blank")
                      span Ver video
                      i.fas.fa-link                    
         



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
