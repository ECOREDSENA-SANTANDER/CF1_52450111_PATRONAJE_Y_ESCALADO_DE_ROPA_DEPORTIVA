<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistemas de medidas y patronaje básico infantil',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar el nivel de apropiación de los fundamentos relacionados con la estructura corporal infantil, los sistemas de medidas, el cuadro de tallas, el sistema moda, el aprovechamiento de tela y la construcción del patrón básico superior infantil.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la disciplina que estudia las dimensiones físicas y proporciones del cuerpo humano y constituye la base para construir cuadros de tallas en el patronaje infantil deportivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ergonomía, que adapta los objetos y prendas a las condiciones de movilidad y comodidad del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La antropometría, que mide y analiza las dimensiones físicas del cuerpo humano en todas sus etapas de desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La anatomía, que estudia la estructura interna y las relaciones funcionales entre órganos y sistemas corporales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La biomecánica, que analiza las fuerzas y el movimiento del sistema musculoesquelético.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la antropometría como fundamento científico del sistema de medidas y su aplicación directa en la construcción de cuadros de tallas infantiles.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 2,
          texto:
            '¿Por qué las proporciones corporales del cuerpo infantil exigen un tratamiento técnico diferenciado en el patronaje respecto al patronaje adulto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque las normas técnicas colombianas prohíben usar los mismos cuadros de tallas para niños y adultos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque los niños practican exclusivamente deportes de alto impacto que obligan a duplicar todos los márgenes de costura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque el cuerpo infantil utiliza exclusivamente tejidos de punto que requieren cálculos de holgura distintos a los del adulto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque en la infancia la cabeza representa una fracción mayor del total corporal y las extremidades varían significativamente con el crecimiento, afectando ubicación de costuras, largos y amplitudes del patrón.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de las particularidades morfológicas del cuerpo infantil y su incidencia técnica en las decisiones de proporcionalidad y ajuste del patrón deportivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 3,
          texto:
            '¿Qué función cumple la biomecánica en el diseño técnico de prendas deportivas infantiles?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Orienta el diseño para que la prenda responda tanto a la forma del cuerpo como a las demandas mecánicas del movimiento, sin generar tensiones ni restricciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Establece los sistemas de medidas y los cuadros de tallas aplicables a cada grupo etario infantil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Clasifica los universos del vestuario según la ocasión de uso y el segmento de mercado al que se dirige la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Define los tipos de tejido técnico recomendados para cada disciplina deportiva infantil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la biomecánica como principio funcional que articula la estructura corporal con las exigencias del movimiento en el patrón deportivo infantil.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 4,
          texto:
            '¿Cuál es la diferencia técnica entre los sistemas de medidas inglés y métrico decimal en el proceso de patronaje?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El sistema inglés se reserva para patronaje de prendas formales, mientras que el sistema métrico se aplica exclusivamente en vestuario deportivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sistema inglés emplea la pulgada como unidad básica y se aplica en países como Estados Unidos, mientras que el sistema métrico decimal emplea el metro y es predominante en América Latina.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El sistema inglés calcula las medidas deducidas mediante fórmulas proporcionales, mientras que el métrico toma todas las medidas directamente del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El sistema inglés se basa en el canon corporal adulto, mientras el métrico trabaja exclusivamente con proporciones del cuerpo infantil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de los sistemas de medidas y su diferenciación metodológica según contexto geográfico y proceso productivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 5,
          texto:
            '¿Qué caracteriza a los contornos como categoría de medida corporal en el patronaje infantil deportivo?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Siguen la figura tridimensional del cuerpo rodeando completamente una zona específica, garantizando que la prenda envuelva el cuerpo sin generar presiones ni restricciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Son medidas calculadas mediante fórmulas a partir del contorno más prominente, sin tomarse directamente del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Son medidas tomadas en dirección vertical que registran los talles y longitudes de los segmentos corporales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se obtienen en dirección horizontal y expresan las dimensiones transversales del cuerpo como el ancho de pecho o hombros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la clasificación de medidas corporales y la función técnica de los contornos en la construcción de patrones deportivos infantiles.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 6,
          texto:
            '¿Para qué sirven las medidas deducidas en la construcción del cuadro de tallas infantil?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para definir la escala de representación del patrón entre las versiones 1:1, 1:2 y 1:4.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para reemplazar completamente la toma de medidas directas al cuerpo, eliminando la necesidad de cinta métrica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para establecer el porcentaje de aprovechamiento de tela requerido en la producción de cada talla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para calcular dimensiones secundarias del patrón a partir del contorno prominente y la estatura, garantizando proporcionalidad en cada grupo etario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto de medidas deducidas y su función en la construcción proporcional del cuadro de tallas infantil.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 7,
          texto:
            '¿Qué norma técnica colombiana rige la toma de medidas corporales para la fabricación de vestuario?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La NTC 4595:2006, que regula los criterios de calidad y resistencia de tejidos técnicos para uso deportivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La NTC-ISO 8559:1995, que establece dimensiones corporales para estudios antropométricos aplicados a la fabricación de vestuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La NTC 6231:2018, que especifica los métodos de medición de tejidos de punto para prendas de alto desempeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La NTC 2079:2010, que define los márgenes de costura y las tolerancias de corte en la producción industrial de prendas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de la normatividad técnica colombiana que fundamenta los procesos estandarizados de medición corporal en la industria del vestuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 8,
          texto:
            '¿Cuál es el universo del vestuario que corresponde directamente al contexto de uso del patronaje abordado en este componente formativo?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '<i>Sleepwear</i>, destinado a prendas de descanso y uso nocturno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Deportivo o funcional, destinado a la actividad física y que incluye ropa deportiva y uniformes especializados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                '<i>Swimwear</i>, orientado exclusivamente al uso en piscina y playa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Formal, orientado a eventos elegantes y reuniones de etiqueta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del sistema de universos del vestuario y la correcta identificación del segmento de mercado al que pertenece el patronaje infantil deportivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 9,
          texto:
            '¿Qué variable determina principalmente la tipología de una prenda de vestir según los contenidos del componente formativo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El método de escalado aplicado, que define si la prenda es de producción industrial o sobre medidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El universo de vestuario al que pertenece, que condiciona el uso de tejido plano o tejido de punto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El tipo de fibra textil con que se elabora la tela, según sea natural, sintética o mixta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La estructura corporal, ya que las tipologías se clasifican en función de la arquitectura del cuerpo y la zona que cubren.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación del criterio técnico que clasifica las tipologías de prendas a partir de la estructura corporal y su relación con las prendas superiores e inferiores.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 10,
          texto:
            '¿Qué representa el aprovechamiento de tela en el proceso de producción de prendas y cómo se calcula?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es el margen de seguridad que se reserva al comprar tela para compensar posibles errores de corte, equivalente siempre al 15 % del metraje total.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es la diferencia en metros entre la tela comprada y la tela utilizada, expresada como un valor fijo por tipología de prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es la cantidad total de metros de tela adquiridos para una colección, y se calcula multiplicando el número de tallas por el metraje promedio por prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es la relación porcentual entre el área ocupada por los patrones y el área total de tela disponible, calculada dividiendo el área de patrones entre el área total y multiplicando por cien.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto de aprovechamiento de tela y la aplicación correcta de la fórmula para su cálculo en el proceso de corte industrial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },

        {
          id: 11,
          texto:
            '¿Qué función cumple el rectángulo inicial en la metodología del patronaje básico infantil?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Define la escala de representación del patrón y establece si el trazo se realizará a tamaño real o en versión reducida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite calcular el porcentaje de aprovechamiento de tela antes de iniciar el trazado de las piezas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establece la ubicación de los piquetes de confección y las líneas de aplome del patrón base.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Actúa como estructura de referencia del molde cuyas dimensiones se establecen a partir del contorno más prominente y el largo principal de la zona corporal a trabajar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del rectángulo inicial como estructura metodológica fundamental que organiza las proporciones del patrón básico infantil.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
        {
          id: 12,
          texto:
            '¿En prendas superiores infantiles, cuál es la medida de contorno que actúa como referencia estructural central del patrón base?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El contorno de cuello, que define el punto de partida para construir el escote y el hombro del patrón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El contorno de pecho, que constituye la medida estructural central a partir de la cual se calculan las proporciones del molde superior.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El contorno de cadera, que determina la amplitud transversal del molde en la zona inferior del tronco.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El contorno de cintura, que establece el punto de equilibrio entre las piezas superior e inferior del patrón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de la función técnica del contorno de pecho como medida referencial en la construcción del patrón básico superior infantil.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
        {
          id: 13,
          texto:
            '¿Qué convención gráfica indica que una pieza debe colocarse sobre el doblez de la tela para obtener una pieza simétrica al cortar?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una flecha recta longitudinal que señala la dirección del hilo de tela y la orientación de la urdimbre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tres círculos dispuestos en triángulo que indican que ese borde se apoya sobre el lomo de la tela para cortar la pieza simétrica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una línea guionada próxima al borde que indica la trayectoria de la costura interna de la pieza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un ícono de tijeras sobre la línea que determina dónde debe efectuarse el corte definitivo del tejido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de las convenciones gráficas del patronaje y la función específica del símbolo de doblez de tela en el proceso de corte.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
        {
          id: 14,
          texto:
            '¿Qué fórmula se emplea en el paso 1 del trazado del patrón básico superior infantil para determinar el ancho del rectángulo base?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ancho = B/2 + 3 cm, donde B corresponde al contorno de pecho de la talla seleccionada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ancho = C/4 + 1 cm, donde C corresponde al contorno de cadera de la talla seleccionada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ancho = C/2 + 2 cm, donde C corresponde al contorno de cintura de la talla seleccionada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ancho = B/4 + 0.5 cm, donde B corresponde al contorno de pecho de la talla seleccionada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la fórmula metodológica del patrón básico superior infantil y la función técnica de cada componente de la ecuación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
        {
          id: 15,
          texto:
            '¿Qué relación existe entre el concepto de canon y el de proporción en el patronaje infantil?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El canon corresponde a las medidas deducidas del cuadro de tallas, mientras la proporción hace referencia a las medidas tomadas directamente del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El canon establece el largo principal del rectángulo inicial del patrón, mientras la proporción fija el ancho del mismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El canon establece cuántas cabezas caben en la altura del cuerpo como modelo de referencia proporcional, mientras la proporción describe la relación matemática.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El canon define el sistema de medidas aplicable en cada país, mientras la proporción determina las fórmulas de deducción del cuadro de tallas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos de canon y proporción y su articulación con el análisis corporal que sustenta la construcción técnica del patrón infantil.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
        {
          id: 16,
          texto:
            '¿Por qué la ergonomía es un principio técnico especialmente relevante en el patronaje infantil deportivo?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque las prendas deben facilitar la libertad de acción en todas las direcciones del movimiento sin generar tensiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque establece el sistema de escalado más adecuado para cada rango de tallas dentro del patrón infantil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque define los márgenes de costura y los acabados necesarios para garantizar la durabilidad de la prenda en uso deportivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque determina los tipos de tejido técnico compatibles con cada disciplina deportiva y grupo etario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del principio ergonómico y su aplicación específica en el patronaje infantil deportivo, donde el movimiento y el confort son condiciones técnicas determinantes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
        {
          id: 17,
          texto:
            '¿Qué tipo de plano puede emplearse al iniciar el trazado de un patrón básico infantil según la metodología del componente?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Plano superior, plano inferior y plano combinado, clasificados según la zona corporal que abarca la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Plano proporcional, plano reducido y plano real, determinados por la escala de representación seleccionada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Plano unido, separado o montado, cuya definición depende de las características estructurales de la prenda a construir.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Plano escalado, plano vectorial y plano digital, según el nivel de precisión requerido por el proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de los tipos de plano empleados en la metodología del patronaje básico infantil y su relación con las características estructurales de cada prenda.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de los siguientes factores NO afecta el porcentaje de aprovechamiento de tela en un proceso de corte industrial?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La forma y el número de piezas del patrón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El ancho de la tela disponible para el tendido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La presencia de diseños o estampados que limitan la rotación de las piezas sobre la tela.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El color o la referencia cromática del hilo de costura utilizado en el ensamble.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los factores que inciden en el aprovechamiento de tela y la identificación correcta de variables que no tienen incidencia en dicho cálculo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
        {
          id: 19,
          texto:
            '¿Qué información mínima debe consignarse en cada pieza al realizar el despiece de un patrón básico infantil?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tipo de fibra textil, temperatura de planchado, longitud de puntada y secuencia de ensamble de las piezas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gama de mercado, universo de vestuario, temporada de uso y metraje total de tela requerido por talla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Canon de proporción, sistema de medidas empleado, escala de representación y método de escalado aplicado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Nombre de la pieza, referencia, talla, nombre del patronista, simbología de corte, cantidad de veces a cortar, piquetes de confección y líneas de aplome.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de las convenciones técnicas de marcación del patrón y los elementos indispensables para garantizar su correcta interpretación en el proceso de corte y confección.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
        {
          id: 20,
          texto:
            '¿Qué relación existe entre el patronaje y la representación bidimensional en el proceso de construcción de prendas?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El patronaje transforma directamente las fibras textiles en piezas tridimensionales listas para el ensamble sin necesidad de planos intermedios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El patronaje es un proceso exclusivamente digital que convierte escaneos tridimensionales del cuerpo en archivos de corte automatizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El patronaje reproduce la forma del cuerpo en escala real sin realizar ninguna simplificación ni transformación geométrica del volumen corporal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El patronaje es la representación bidimensional de un volumen tridimensional que permite definir la estructura de una prenda a través de planos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del concepto fundamental del patronaje como proceso de traducción bidimensional del cuerpo y su función en la cadena técnica de la confección.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el sistema de medidas y el patronaje básico infantil.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la estructura corporal infantil, los sistemas de medidas y los fundamentos del patronaje básico.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
