<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Gestión de incidentes</h1>
      </div>
      <div class="row">
        <div class="col-md-auto d-none d-md-block">
          <figure><img src="@/assets/curso/tema2/1.svg" /></figure>
        </div>
        <div class="col-md">
          <p class="mb-0">
            Es el proceso estructurado mediante el cual se identifican,
            registran, y resuelven los problemas reportados por los clientes de
            forma ágil y eficiente. Este proceso busca restaurar la
            funcionalidad del equipo en el menor tiempo posible, minimizando el
            impacto para el cliente y asegurando que las interrupciones sean
            resueltas de forma organizada. La buena gestión de incidentes
            contribuye a la satisfacción y fidelización del cliente, permite al
            equipo técnico acumular un historial que ayuda a anticipar y
            resolver problemas similares en el futuro, optimizando así el
            proceso de soporte.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_1">2.1 Clasificación y ciclo de vida de incidentes</h2>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="fade-right">
          <p>
            Es un proceso fundamental en el soporte técnico y atención al
            cliente en la reparación de equipos, ya que permite organizar y
            gestionar las solicitudes de manera eficiente desde su inicio hasta
            su resolución. Este proceso comienza con la clasificación del
            incidente, que implica evaluar la gravedad, urgencia, tipo de equipo
            afectado y el impacto en el cliente. Con esta clasificación, los
            incidentes se pueden agrupar en niveles de prioridad, lo cual ayuda
            al equipo técnico a dar una respuesta adecuada y a optimizar los
            recursos.
          </p>
          <div
            class="cajon color-primario p-4 mt-4"
            style="background-color:#D7EED6;"
          >
            <div class="row">
              <div class="col-md-auto d-none d-md-block">
                <figure><img src="@/assets/curso/tema2/2.svg" /></figure>
              </div>
              <div class="col-md">
                <p class="mb-0">
                  El ciclo de vida del incidente incluye varias etapas que se
                  desarrollan secuencialmente para garantizar una solución
                  efectiva. Inicia con la creación del incidente, donde se
                  registra la solicitud del cliente. Luego, pasa a la
                  clasificación y asignación, donde se determina el nivel de
                  prioridad y se asigna al técnico adecuado. Posteriormente, en
                  la fase de diagnóstico y resolución, el técnico identifica la
                  causa del problema y ejecuta las acciones necesarias para
                  solucionarlo. Si el problema es complejo, puede requerir
                  escalamiento a un nivel de soporte superior.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema2/3.png" /></figure>
        </div>
      </div>
      <div
        class="titulo-sexto color-acento-contenido mt-5"
        data-aos="fade-down"
      >
        <h5>Tabla 1.</h5>
        <span>Clasificación del incidente</span>
      </div>
      <div class="tabla-a color-acento-contenido" data-aos="fade-up">
        <table>
          <caption class="fw-normal">
            <strong>Fuente.</strong>
            OIT, 2024.
          </caption>
          <thead>
            <tr class="text-center" style="background-color:#EFE8F7;">
              <th>Clasificación del incidente</th>
              <th>Gravedad</th>
              <th>Urgencia</th>
              <th>Tipo de equipo afectado</th>
              <th>Impacto en el cliente</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="fw-bold" style="background-color:#EBF6EA;">
                1. Falla crítica en equipo principal
              </td>
              <td class="text-center">Alta</td>
              <td class="text-center">Muy alta</td>
              <td class="text-center">Servidor o equipo de red central</td>
              <td class="text-center">
                <strong>Alto:</strong> afecta toda la operación del cliente
              </td>
            </tr>
            <tr class="bg-white">
              <td class="fw-bold" style="background-color:#EBF6EA;">
                2. Problema de <em>software</em> recurrente
              </td>
              <td class="text-center">Media</td>
              <td class="text-center">Alta</td>
              <td class="text-center">Ordenador personal</td>
              <td class="text-center">
                <strong>Medio:</strong> afecta la productividad individual
              </td>
            </tr>
            <tr class="bg-white">
              <td class="fw-bold" style="background-color:#EBF6EA;">
                3. Daño físico en dispositivo secundario
              </td>
              <td class="text-center">Baja</td>
              <td class="text-center">Media</td>
              <td class="text-center">Monitor, teclado u otros periféricos</td>
              <td class="text-center">
                <strong>Bajo:</strong> no interfiere en las funciones esenciales
              </td>
            </tr>
            <tr class="bg-white">
              <td class="fw-bold" style="background-color:#EBF6EA;">
                4. Interrupción en red local
              </td>
              <td class="text-center">Alta</td>
              <td class="text-center">Muy alta</td>
              <td class="text-center">
                Equipo de red (<em>router, switch</em>)
              </td>
              <td class="text-center">
                <strong>Alto:</strong> afecta conexión y productividad general
              </td>
            </tr>
            <tr class="bg-white">
              <td class="fw-bold" style="background-color:#EBF6EA;">
                5. Error en aplicación específica
              </td>
              <td class="text-center">Media</td>
              <td class="text-center">Media</td>
              <td class="text-center">
                <em>Software</em> de gestión o especializado
              </td>
              <td class="text-center">
                <strong>Medio:</strong> limita tareas específicas del usuario
              </td>
            </tr>
            <tr class="bg-white">
              <td class="fw-bold" style="background-color:#EBF6EA;">
                6. Fallo de conexión a Internet
              </td>
              <td class="text-center">Alta</td>
              <td class="text-center">Alta</td>
              <td class="text-center"><em>Modem</em> o <em>router</em></td>
              <td class="text-center">
                <strong>Alto:</strong> interrumpe acceso a servicios en línea
              </td>
            </tr>
            <tr class="bg-white">
              <td class="fw-bold" style="background-color:#EBF6EA;">
                7. Actualización pendiente
              </td>
              <td class="text-center">Baja</td>
              <td class="text-center">Baja</td>
              <td class="text-center">Sistema operativo o <em>software</em></td>
              <td class="text-center">
                <b>Bajo:</b> no afecta operaciones actuales del cliente
              </td>
            </tr>
            <tr class="bg-white">
              <td class="fw-bold" style="background-color:#EBF6EA;">
                8. Problema con respaldo de datos
              </td>
              <td class="text-center">Alta</td>
              <td class="text-center">Media</td>
              <td class="text-center">Sistema de almacenamiento</td>
              <td class="text-center">
                <strong>Alto:</strong> riesgo potencial para la seguridad de
                datos
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row mt-4">
        <div
          class="col-md-auto d-none d-md-block"
          data-aos="fade-right"
          style="place-self:center;"
        >
          <figure><img src="@/assets/curso/tema2/4.svg" /></figure>
        </div>
        <div class="col-md" data-aos="fade-left" style="place-self:center;">
          <p class="mb-0">
            Durante todo el ciclo de vida,
            <strong
              >es fundamental la comunicación con el cliente, manteniéndolo
              informado del estado del incidente y los tiempos estimados de
              resolución</strong
            >. Una vez solucionado, se realiza la validación y cierre, donde se
            confirma que el problema se ha resuelto satisfactoriamente y se
            registra la intervención en el sistema para futuras referencias.
          </p>
        </div>
      </div>
      <p class="mt-4" data-aos="fade-right">
        Una gestión adecuada del ciclo de vida de los incidentes asegura la
        satisfacción del cliente, permite al equipo técnico aprender de cada
        caso, mejorar la calidad del servicio y optimizar los tiempos de
        respuesta, contribuyendo a un servicio más eficiente y proactivo.
      </p>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_2">2.2 Métodos de resolución y <em>troubleshooting</em></h2>
      </div>
      <p data-aos="fade-right">
        Estos métodos son herramientas en el soporte técnico y atención al
        cliente en la reparación de equipos, ya que permiten identificar y
        solucionar problemas de manera precisa y eficiente. Estos métodos
        incluyen pasos estructurados que ayudan al técnico a determinar
        rápidamente la causa raíz de una falla y a aplicar las soluciones
        necesarias. A continuación, se encuentran las definiciones de cada una:
      </p>
      <TabsC class="color-acento-contenido mt-4">
        <div class="py-3 py-md-4" titulo="Métodos de resolución">
          <div class="row col-xl-11 m-auto p-4">
            <div class="col-lg-5 col-md-8 col-9 m-auto mb-4 mb-lg-0">
              <figure><img src="@/assets/curso/tema2/5.png" /></figure>
            </div>
            <div class="col-lg-7">
              <p class="fw-bold">Métodos de resolución:</p>
              <p>
                Son los procedimientos y técnicas estructuradas que permiten
                resolver problemas específicos de manera eficiente y
                satisfactoria. Estos métodos se basan en el conocimiento
                acumulado y en buenas prácticas para abordar distintas fallas,
                priorizando soluciones rápidas y efectivas. Cada método de
                resolución sigue pasos predeterminados que facilitan al técnico
                el proceso de identificar y aplicar la corrección adecuada. La
                finalidad es restablecer el funcionamiento óptimo del equipo de
                la forma más rápida y segura posible, minimizando el impacto en
                el cliente.
              </p>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4" titulo="&lt;em&gt;Troubleshooting&lt;/em&gt;">
          <div class="row col-xl-11 m-auto p-4">
            <div class="col-lg-5 col-md-8 col-9 m-auto mb-4 mb-lg-0">
              <figure><img src="@/assets/curso/tema2/6.png" /></figure>
            </div>
            <div class="col-lg-7">
              <p class="fw-bold"><em>Troubleshooting</em>:</p>
              <p>
                Es un proceso analítico utilizado para diagnosticar la causa
                raíz de un problema técnico y determinar la mejor solución. En
                el contexto del soporte técnico, este proceso implica una serie
                de pasos que el técnico sigue para aislar el origen del fallo en
                el equipo. Inicia con la recopilación de información detallada
                y, generalmente, incluye pruebas secuenciales, observación del
                comportamiento del equipo y eliminación de posibles causas hasta
                encontrar el verdadero origen del problema. El
                <em>troubleshooting</em> permite una identificación precisa de
                fallas, logrando una resolución más efectiva y reduciendo la
                posibilidad de recurrencia del problema.
              </p>
            </div>
          </div>
        </div>
      </TabsC>
      <p class="mt-5" data-aos="fade-right">
        Como se mencionó anteriormente, estos métodos incluyen pasos
        estructurados, así:
      </p>
      <div class="cont_2_1 mt-4 pb-5">
        <div class="col-xl-10 m-auto" data-aos="zoom-in">
          <AcordionA tipo="a" clase-tarjeta="tarjeta">
            <div
              class="row col-xl-11 m-auto"
              titulo="Recopilación de información"
            >
              <p>
                El primer paso en el <em>troubleshooting</em> es obtener todos
                los detalles del problema mediante preguntas específicas al
                cliente y una revisión inicial del equipo. Esta información
                proporciona el contexto necesario y evita diagnósticos erróneos.
              </p>
            </div>
            <div
              class="row col-xl-11 m-auto"
              titulo="Reproducción del problema"
            >
              <p>
                En la medida de lo posible, el técnico intenta replicar el
                problema para observar directamente su naturaleza. Esto permite
                ver el comportamiento del equipo y descartar posibles causas
                externas, como fallos de configuración o uso incorrecto.
              </p>
            </div>
            <div
              class="row col-xl-11 m-auto"
              titulo="Análisis de componentes y diagnóstico paso a paso"
            >
              <p>
                El técnico realiza pruebas en cada componente o sistema
                relacionado con el fallo. Al verificar uno por uno los posibles
                puntos de falla, se identifican con precisión los elementos
                defectuosos y se reduce el tiempo de reparación.
              </p>
            </div>
            <div
              class="row col-xl-11 m-auto"
              titulo="Consultas a bases de conocimiento y documentación técnica "
            >
              <p>
                Si el problema es complejo, el técnico consulta bases de datos o
                guías técnicas que incluyen soluciones previas y patrones
                comunes de fallas. Esto agiliza la identificación de soluciones
                probadas y disminuye la posibilidad de aplicar métodos
                inefectivos.
              </p>
            </div>
            <div
              class="row col-xl-11 m-auto"
              titulo="Pruebas de soluciones graduales"
            >
              <p>
                En esta fase, el técnico aplica soluciones comenzando por las
                menos invasivas o aquellas que no requieren modificaciones
                complejas del equipo. Si la primera solución no es efectiva, se
                pasa a la siguiente hasta resolver el problema.
              </p>
            </div>
            <div
              class="row col-xl-11 m-auto"
              titulo="Escalamiento en casos complejos"
            >
              <p>
                Si el técnico no puede solucionar el problema con las técnicas
                iniciales, se activa el proceso de escalamiento, en el cual el
                caso se transfiere a un nivel superior de soporte o a un
                especialista. Este paso es crítico para resolver incidentes
                avanzados sin afectar el tiempo de respuesta.
              </p>
            </div>
            <div
              class="row col-xl-11 m-auto"
              titulo="Prueba de funcionamiento y validación de solución"
            >
              <p>
                Una vez que el problema ha sido resuelto, el técnico realiza
                pruebas adicionales para confirmar la efectividad de la solución
                aplicada y que no existan problemas residuales.
              </p>
            </div>
          </AcordionA>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_3">2.3 Tiempos de atención y <em>SLAs</em></h2>
      </div>
      <p data-aos="fade-right">
        En el soporte técnico y atención al cliente para la reparación de
        equipos, los tiempos de atención y los Acuerdos de Nivel de Servicio
        (<em>SLAs</em>, por sus siglas en inglés:
        <em>Service Level Agreements</em>) son parámetros que establecen los
        estándares de calidad, eficiencia y responsabilidad en el servicio. Es
        importante tener en cuenta los conceptos de cada uno de estos, así:
      </p>
      <div class="row mt-4">
        <div
          class="col-lg mb-4 mb-lg-0"
          data-aos="zoom-in"
          data-aos-duration="850"
        >
          <div
            class="h-100 p-4"
            style="background-color:#B0DCAD;border-radius:10px;"
          >
            <figure class="mb-3">
              <img
                class="d-inline"
                src="@/assets/curso/tema2/8.svg"
                style="max-width:90px;"
              />
            </figure>
            <p class="mb-0">
              <strong>Tiempos de atención:</strong> Los tiempos de atención
              refieren al tiempo máximo que el equipo de soporte tarda en
              responder a la solicitud inicial del cliente desde el momento en
              que se recibe el reporte del incidente. Estos tiempos se dividen
              en diferentes niveles de prioridad (alta, media, baja),
              permitiendo que los problemas más críticos se atiendan con rapidez
              y que los incidentes de menor impacto tengan tiempos de respuesta
              más flexibles. Este enfoque permite una asignación eficiente de
              recursos y mantiene una experiencia de servicio positiva para el
              cliente.
            </p>
          </div>
        </div>
        <div
          class="col-lg mb-4 mb-lg-0"
          data-aos="zoom-in"
          data-aos-duration="850"
        >
          <div
            class="h-100 p-4"
            style="background-color:#D7EED6;border-radius:10px;"
          >
            <figure class="mb-3">
              <img
                class="d-inline"
                src="@/assets/curso/tema2/9.svg"
                style="max-width:90px;"
              />
            </figure>
            <p class="mb-0">
              Acuerdos de Nivel de Servicio (<em>SLAs</em>): Los
              <em>SLAs</em> son contratos formales que definen los compromisos y
              expectativas de servicio entre el proveedor y el cliente. Estos
              acuerdos especifican los tiempos de respuesta y resolución máximos
              según el tipo de incidente, y garantizan que el soporte técnico
              cumpla con los estándares internacionales de calidad.
            </p>
          </div>
        </div>
      </div>
      <p class="mt-4 mt-lg-5" data-aos="fade-up">
        Los <em>SLAs</em> pueden incluir métricas de desempeño como:
      </p>
      <div class="row mt-4 justify-content-center">
        <div
          class="col-lg col-md-9 mb-4 mb-lg-0"
          data-aos="zoom-in"
          data-aos-duration="850"
        >
          <div class="tarjeta-avatar-b h-100">
            <div class="tarjeta-avatar-b__img">
              <img src="@/assets/curso/tema2/10.svg" alt="AvatarTop" />
            </div>
            <div
              class="tarjeta d-flex align-content-center flex-wrap"
              style="background-color:#73C8E2;"
            >
              <div class="p-4">
                <p class="mb-0">
                  <strong>Tiempo de respuesta:</strong> el tiempo inicial para
                  contactar al cliente tras recibir el incidente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg col-md-9 mb-4 mb-lg-0"
          data-aos="zoom-in"
          data-aos-duration="850"
        >
          <div class="tarjeta-avatar-b h-100">
            <div class="tarjeta-avatar-b__img">
              <img src="@/assets/curso/tema2/11.svg" alt="AvatarTop" />
            </div>
            <div
              class="tarjeta d-flex align-content-center flex-wrap"
              style="background-color:#73C8E2;"
            >
              <div class="p-4">
                <p class="mb-0">
                  <strong>Tiempo de resolución:</strong> el periodo estimado
                  para resolver el problema y restablecer el funcionamiento
                  normal del equipo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg col-md-9 mb-4 mb-lg-0"
          data-aos="zoom-in"
          data-aos-duration="850"
        >
          <div class="tarjeta-avatar-b h-100">
            <div class="tarjeta-avatar-b__img">
              <img src="@/assets/curso/tema2/12.svg" alt="AvatarTop" />
            </div>
            <div
              class="tarjeta d-flex align-content-center flex-wrap"
              style="background-color:#73C8E2;"
            >
              <div class="p-4">
                <p class="mb-0">
                  <strong>Tiempo de escalamiento:</strong> el tiempo máximo para
                  derivar el incidente a niveles superiores de soporte si no se
                  resuelve en el nivel inicial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-8 m-auto col-lg-10 mt-4 mt-lg-5">
        <div
          class="cajon color-primario p-4"
          style="background-color:#D7EED6;"
          data-aos="fade-up"
          data-aos-duration="850"
        >
          <div class="row">
            <div class="col-md-auto d-none d-md-block">
              <figure><img src="@/assets/curso/tema2/13.svg" /></figure>
            </div>
            <div class="col-md">
              <p class="mb-0 fw-bold">
                Los SLAs también suelen incluir cláusulas de penalización en
                caso de incumplimiento, motivando así al proveedor de soporte a
                cumplir con los tiempos establecidos y a ofrecer un servicio
                confiable y de alta calidad. Alinear estos tiempos y acuerdos
                con estándares internacionales permite que el servicio de
                soporte técnico sea consistente, transparente y ajustado a las
                expectativas del cliente, favoreciendo una experiencia de
                usuario satisfactoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
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
