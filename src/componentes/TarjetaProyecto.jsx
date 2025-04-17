
function TarjetaProyecto({ titulo, descripcion, tecnologias, enlaceDemo, categoria, logros }) {
  return (
    <div className="tarjeta-proyecto">
        <h3 className="proyecto-titulo">{titulo}</h3>
        <p className="proyecto-descripcion">{descripcion}</p>
      
      {logros && logros.length > 0 && (
        <div className="proyecto-logros">
          <h4>Resultados destacados</h4>
          <ul className="lista-logros">
            {logros.map((logro, index) => (
              <li key={index}>
                <span className="icono-logro">★</span>
                {logro}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="tecnologias-container">
        <h4>Tecnologías utilizadas</h4>
        <div className="tecnologias-lista">
          {tecnologias.map((tech, index) => (
            <span key={index} className="tecnologia-tag">{tech}</span>
          ))}
        </div>
      </div>
      
      <div className="proyecto-enlaces">
        <a 
          href={enlaceDemo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="enlace-proyecto"
        >
          <span>Ver proyecto</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>

    </div>
  )
}

export default TarjetaProyecto

  