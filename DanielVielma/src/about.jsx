import './about.css'


function About(){
    return(
        <div className="summary-container">
        <div className="summary-header">
          <h3>Científico de Datos y Especialista en Inteligencia Artificial</h3>
        </div>
        <p className="summary-intro">
        Como un apasionado Científico de Datos con una sólida formación en matemáticas y aprendizaje automático, ofrezco soluciones integrales de datos diseñadas para ayudar a las organizaciones a transformar datos en bruto en información procesable. Con experiencia práctica en programación, modelado estadístico y aprendizaje automático, me especializo en construir modelos predictivos y estrategias basadas en datos que optimizan la toma de decisiones y fomentan el crecimiento empresarial.        </p>

        <h4>Algunas experiencias son:</h4>
        <ul className="services-list">
          <li>Limpieza, exploración y visualización de datos para descubrir patrones ocultos.</li>
          <li>Desarrollo y despliegue de modelos de machine learning para clasificación, regresión y clustering.</li>
          <li>Creación de pipelines de datos de principio a fin, desde la ingesta de datos en bruto hasta modelos listos para producción.</li>
          <li>Consultoría en estrategias de datos y cómo aprovechar la IA para mejorar la eficiencia operativa.</li>
          <li>Implementación de paneles personalizados para monitorear indicadores clave de rendimiento utilizando Metabase y otras herramientas de BI.</li>
          <li>Gestión y optimización de bases de datos utilizando tecnologías como PostgreSQL, MySQL y otras.</li>
          <li>Soluciones basadas en la nube y virtualización de datos utilizando herramientas modernas como Docker.</li>
        </ul>
        <p className="summary-closing">
        Permíteme ayudarte a aprovechar el poder de tus datos para desbloquear nuevas oportunidades y tomar decisiones basadas en datos.        </p>
      </div>
    )
}

export default About