function Inicio() {
  return (
    <section id="inicio">
      <div className="inicio-contenido">
        <div className="inicio-texto">
          <span className="saludo">👋 Hola, soy</span>
          <h1 className="nombre">Oscar Osorio <span className="apellidos">Osorio Oliver</span></h1>
          <h2 className="titulo-profesional">Desarrollador <span className="highlight">Full Stack</span></h2>
          
          <p className="descripcion">
            <span className="destacado">Transformo ideas en experiencias digitales excepcionales</span> a través de código limpio y arquitecturas sólidas. Especializado en crear soluciones modernas y a medida con <strong>React</strong>, <strong>Vue.js</strong> y <strong>Laravel</strong> que no solo se ven increíbles, sino que funcionan a la perfección.
          </p>
          
          <p className="descripcion-secundaria">
            Mi enfoque combina la <strong>excelencia técnica</strong> con un profundo entendimiento de las necesidades del negocio. Creo aplicaciones que:
          </p>
          
          <ul className="lista-beneficios">
            <li>
              <span className="icono-check">✓</span>
              <span>Optimizan procesos y aumentan la productividad del equipo</span>
            </li>
            <li className="item-sin-linea">
              <span className="icono-check">✓</span>
              <div className="texto-beneficio">Ofrecen experiencias de usuario intuitivas y atractivas</div>
            </li>
            <li>
              <span className="icono-check">✓</span>
              <span>Escalan eficientemente con las necesidades del negocio</span>
            </li>
            <li>
              <span className="icono-check">✓</span>
              <span>Integran las últimas tecnologías y mejores prácticas de la industria</span>
            </li>
          </ul>
          

        </div>
      </div>
    </section>
  );
}

export default Inicio;
