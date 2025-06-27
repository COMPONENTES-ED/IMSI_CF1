<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <p data-aos="fade-down" data-aos-duration="800">
        El siguiente diagrama proporciona una visión general sintetizada de los
        principales temas abordados en este componente sobre soporte técnico y
        atención al cliente en la reparación de equipos. Este mapa está diseñado
        para ayudar al lector a visualizar la interconexión entre los diversos
        elementos que conforman el proceso integral del servicio técnico y la
        atención al cliente.
      </p>
      <p data-aos="fade-down" data-aos-duration="800">
        En el origen del diagrama se encuentra el concepto principal de soporte
        técnico y atención al cliente, del cual se ramifican tres áreas
        fundamentales: fundamentos del servicio técnico, gestión de incidentes y
        herramientas de gestión. Cada una de estas áreas se desglosa en
        subtemas, reflejando la estructura y el contenido del componente, desde
        los protocolos básicos hasta la evaluación del servicio.
      </p>
      <p data-aos="fade-down" data-aos-duration="800">
        El área de fundamentos del servicio técnico abarca los protocolos de
        atención, la gestión de peticiones y escalamiento, así como la
        documentación y trazabilidad. La gestión de incidentes se centra en la
        clasificación y ciclo de vida, métodos de resolución y
        <em>troubleshooting</em>, y los tiempos de atención y <em>SLAs</em>.
        Finalmente, las herramientas de gestión engloban los sistemas
        <em>Help-Desk</em>, formatos y registros, junto con las métricas y
        evaluación del servicio.
      </p>
      <p data-aos="fade-down" data-aos-duration="800">
        Este diagrama sirve como una guía visual para navegar por los conceptos
        presentados en el texto, permitiendo al lector comprender rápidamente el
        flujo y la interrelación de los procesos involucrados en el soporte
        técnico. Al revisar este mapa, el aprendiz podrá apreciar cómo los
        diferentes aspectos se integran para formar un proceso coherente y
        sistemático de atención al cliente. Se invita a explorar este diagrama
        como un complemento al contenido detallado del componente, utilizándolo
        como una referencia rápida y un recordatorio visual de los conceptos en
        el campo del soporte técnico y atención al cliente.
      </p>
      <div class="row justify-content-center p-4">
        <div class="col-lg-10 mb-5">
          <figure data-aos="fade-up" data-aos-duration="900">
            <img
              src="@/assets/curso/sintesis.svg"
              alt="Se denomina «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre soporte técnico y atención al cliente en la reparación de equipos con la base de los protocolos, la gestión de incidentes y las herramientas de gestión."
            />
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
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
