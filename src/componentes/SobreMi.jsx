function SobreMi() {
  return (
    <section id="sobremi">
      <h2>Sobre mí</h2>
      
      <div className="sobremi-contenido">
        <div className="biografia-profesional">
          <p className="introduccion">
            Soy un <span className="destacado">desarrollador Full Stack apasionado</span> por crear soluciones digitales que combinan 
            la excelencia técnica con una experiencia de usuario excepcional. Mi trayectoria profesional me ha permitido 
            desarrollar una visión integral del desarrollo web, desde la arquitectura del backend hasta los más mínimos 
            detalles de la interfaz.          
          </p>
          
          <div className="filosofia-trabajo">
            <h3>Mi filosofía de trabajo</h3>
            <ul className="lista-filosofia">
              <li><span className="icono-filosofia">🔥</span> <strong>Aprendizaje continuo:</strong> Me mantengo constantemente actualizado con las últimas tecnologías y tendencias.</li>
              <li><span className="icono-filosofia">🛠️</span> <strong>Código limpio:</strong> Priorizo la legibilidad y la mantenibilidad en cada línea de código que escribo.</li>
              <li><span className="icono-filosofia">👥</span> <strong>Colaboración efectiva:</strong> Trabajo eficazmente en equipos multidisciplinarios para alcanzar objetivos comunes.</li>
              <li><span className="icono-filosofia">💡</span> <strong>Orientación a soluciones:</strong> Me enfoco en resolver problemas reales con soluciones prácticas y efectivas.</li>
            </ul>
          </div>
        </div>
        
        <div className="habilidades-tecnicas">
          <h3>Experiencia técnica</h3>
          
          <div className="grupos-tecnologias">
            <div className="grupo-tecnologia">
              <h4>Frontend</h4>
              <div className="tecnologias-tags">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3/SASS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Responsive Design</span>
              </div>
            </div>
            
            <div className="grupo-tecnologia">
              <h4>Backend</h4>
              <div className="tecnologias-tags">
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">CodeIgniter</span>
                <span className="tech-tag">RESTful APIs</span>
                <span className="tech-tag">MySQL</span>
              </div>
            </div>
            
            <div className="grupo-tecnologia">
              <h4>DevOps & Herramientas</h4>
              <div className="tecnologias-tags">
                <span className="tech-tag">Git/GitHub</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">CI/CD</span>
                <span className="tech-tag">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
