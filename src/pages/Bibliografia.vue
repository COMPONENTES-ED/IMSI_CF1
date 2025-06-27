<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Arellano-Díaz, H. O. (2017). La calidad en el servicio como ventaja competitiva. Revista científica dominio de las ciencias, 3, 72-83. ',
        link: '',
      },
      {
        referencia:
          'Arellano-González, A., Carballo-Mendivil, B., Acosta-Quintana, M. P., López-Torres, V. G. (2017). Planeación de la logística de la recepción y entrega de mercancía en una empresa que ofrece servicios de paquetería y carga. Revista de Negocios & PyMES, 3(8), 9-22. ',
        link: '',
      },
      {
        referencia:
          'Calatayud, A., Montes, L. (2021). Logística en América Latina y el Caribe: Oportunidades, desafíos y líneas de acción. Banco Interamericano de Desarrollo. ',
        link: 'https://doi.org/10.18235/0003278',
      },
      {
        referencia:
          'Duque Oliva, E. J., Diosa Gómez, Y. (2014). Evolución conceptual de los modelos de medición de la percepción de calidad del servicio: Una mirada desde la educación superior. Suma de Negocios, 5(12), 180-191. ',
        link: '',
      },
      {
        referencia:
          'Monagas-Docasal, M. (2012). El capital intelectual y la gestión del conocimiento. Ingeniería Industrial, XXXIII(2), 142-150. ',
        link: 'https://www.redalyc.org/pdf/3604/360433580006.pdf',
      },
      {
        referencia:
          'Morán Ruiz, E. (2017). La calidad del servicio al cliente externo administrativo vinculado al incremento de las ventas en el grupo Santillana. <em>Espirales. Revista Multidisciplinaria de Investigación</em>, 9, 82-104',
        link:
          'http://www.revistaespirales.com/index.php/es/article/view/221/168',
      },
      {
        referencia:
          'Morillo, M. del C., Morillo, M. C., & Rivas, D. (2011). Medición de la calidad del servicio en las instituciones financieras a través de la escala de Servqual. <em>Contaduría y Administración</em>, 234, 101-130. ',
        link: '',
      },
      {
        referencia:
          'Mohedano Torres, E. de J., Echeverría Ríos, O. M., Martínez Hernández, M., & Lezama León, M. H. (2023). Modelo SERVQUAL para medir la calidad en el servicio en operadores logísticos. Revista CEA, 9(19), e2234. Instituto Tecnológico Metropolitano, Colombia. ',
        link: 'https://doi.org/10.22430/24223182.2234',
      },
      {
        referencia:
          'Robayo, A. (2017). <em>La importancia del servicio al cliente y el reflejo de las ventas en una empresa</em> (Tesis de grado, Universidad Militar Nueva Granda). Repositorio Institucional UMNG. ',
        link: '',
      },
      {
        referencia:
          'Verastegui Tene, F., & Vargas Merino, J. (2021). Estrategias de Merchandising: un análisis de su efectividad para la atracción de nuevos clientes. Revista Academia & Negocios, 41-54. ',
        link: 'https://doi.org/10.29393/RAN6-4EMFV20004',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
