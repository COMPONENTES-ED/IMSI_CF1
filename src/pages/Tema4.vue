<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Conclusiones</h1>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="fade-right">
          <p>
            La gestión efectiva de peticiones y escalamiento representa un pilar
            fundamental en el servicio técnico, estableciendo un flujo
            sistemático que inicia desde la recepción de la solicitud hasta el
            cierre del caso. Este proceso organizado permite optimizar recursos,
            asignar correctamente los niveles de atención y mantener al cliente
            informado durante todo el ciclo de servicio. La implementación de
            esta estructura metodológica asegura resoluciones más eficientes y
            una experiencia satisfactoria para el usuario.
          </p>
          <p class="mb-0">
            Los sistemas <em>Help Desk</em> emergen como herramientas
            indispensables para la modernización del soporte técnico,
            facilitando la centralización de información, seguimiento de casos y
            automatización de procesos. Estas plataformas tecnológicas mejoran
            la productividad del equipo técnico, reducen tiempos de respuesta y
            proporcionan datos valiosos para la toma de decisiones. La
            integración de estos sistemas fortalece la capacidad organizacional
            para brindar un servicio de calidad superior.
          </p>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema4/1.png" /></figure>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema4/2.svg" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <div class="p-3" style="background-color:#EBF6EA;">
            <p class="mb-0">
              El establecimiento de métricas y evaluaciones de servicio
              constituye un elemento importante para el mejoramiento continuo
              del soporte técnico. La medición sistemática de indicadores como
              tiempos de respuesta, tasas de resolución y satisfacción del
              cliente permite identificar oportunidades de mejora, ajustar
              procesos y validar el cumplimiento de estándares de calidad. Este
              enfoque analítico impulsa la evolución constante del servicio
              hacia niveles superiores de excelencia.
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg mb-4 mb-lg-0" data-aos="zoom-in">
          <p class="mb-0">
            La documentación y trazabilidad del servicio establecen las bases
            para un soporte técnico confiable. El registro detallado de cada
            interacción, diagnóstico y solución aplicada crea un valioso
            repositorio de conocimiento que beneficia tanto al equipo técnico
            como a los clientes. Esta práctica sistemática facilita el análisis
            de patrones, la identificación de soluciones efectivas y la
            construcción de una base de conocimiento robusta.
          </p>
        </div>
        <div
          class="col-lg d-none d-lg-block"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <figure><img src="@/assets/curso/tema4/3.svg" /></figure>
        </div>
        <div class="col-lg mb-4 mb-lg-0" data-aos="zoom-in">
          <p class="mb-0">
            Los protocolos de atención al cliente configuran el marco operativo
            para una interacción efectiva con los usuarios. La implementación de
            procedimientos estandarizados desde el diagnóstico inicial hasta la
            verificación de satisfacción asegura consistencia en el servicio y
            claridad en la comunicación. Este enfoque estructurado fortalece la
            confianza del cliente y maximiza la eficiencia en la resolución de
            incidencias.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema4',
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
