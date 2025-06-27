<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Atención al cliente',
          significado:
            'Interacción entre la empresa y el cliente, enfocada en satisfacer necesidades y resolver dudas o problemas.',
        },
        {
          termino: 'Documentación',
          significado:
            'Registro detallado de las actividades, problemas y soluciones llevadas a cabo en el proceso de soporte técnico, utilizado para seguimiento y referencia.',
        },
        {
          termino: 'Escalamiento',
          significado:
            'Proceso de elevar un problema a un nivel superior de soporte cuando no puede ser resuelto en el nivel inicial.',
        },
        {
          termino: 'Evaluación de servicio',
          significado:
            'Análisis del desempeño del soporte técnico, basado en métricas y retroalimentación del cliente, para identificar áreas de mejora.',
        },
        {
          termino: '<em>Help-Desk</em>',
          significado:
            'Sistema o plataforma que centraliza y gestiona solicitudes de soporte técnico de los clientes, permitiendo el seguimiento y resolución de incidencias.',
        },
        {
          termino: 'Incidente',
          significado:
            'Evento o problema que interrumpe el funcionamiento normal de un equipo o sistema, que requiere soporte para su resolución.',
        },
        {
          termino: 'Métrica',
          significado:
            'Parámetro que permite medir el desempeño de un proceso o actividad dentro del soporte técnico, como el tiempo de respuesta o el nivel de satisfacción del cliente.',
        },
        {
          termino: 'Petición',
          significado:
            'Solicitud específica del cliente para obtener asistencia o resolver un problema técnico.',
        },
        {
          termino: 'Protocolo de atención',
          significado:
            'Conjunto de normas y procedimientos para guiar la interacción entre el personal de soporte y el cliente, asegurando una atención uniforme y de calidad.',
        },
        {
          termino: 'Resolución en primer contacto',
          significado:
            'Capacidad de resolver un problema o solicitud del cliente en el primer contacto, sin necesidad de escalamiento o intervención adicional.',
        },
        {
          termino: '<em>SLAs</em> (Acuerdos de Nivel de Servicio)',
          significado:
            'Compromisos establecidos entre el proveedor de soporte y el cliente que definen los tiempos y estándares de calidad para la resolución de incidentes.',
        },
        {
          termino: 'Soporte técnico',
          significado:
            'Asistencia proporcionada a los usuarios para resolver problemas técnicos con sus equipos o sistemas.',
        },
        {
          termino: 'Trazabilidad',
          significado:
            'Capacidad de rastrear el historial, la ubicación y los pasos de un incidente o solicitud de servicio a lo largo del proceso de soporte.',
        },
        {
          termino: '<em>Troubleshooting</em>',
          significado:
            'Conjunto de técnicas para diagnosticar y resolver problemas en los sistemas o equipos, de forma rápida y efectiva.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
