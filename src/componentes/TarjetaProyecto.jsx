import ImagenOptimizada from './ImagenOptimizada';

function TarjetaProyecto({ titulo, descripcion, tecnologias, enlaceDemo, categoria, logros, imagenSrc }) {
  return (
    <article className="tarjeta-proyecto" aria-labelledby={`proyecto-${titulo.replace(/\s+/g, '-').toLowerCase()}`}>
        <h3 className="proyecto-titulo" id={`proyecto-${titulo.replace(/\s+/g, '-').toLowerCase()}`}>{titulo}</h3>
        
        {imagenSrc && (
          <div className="proyecto-imagen-contenedor">
            <ImagenOptimizada 
              src={imagenSrc} 
              alt={`Imagen del proyecto ${titulo}`} 
              className="proyecto-imagen"
              height="200px"
            />
          </div>
        )}
        
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
        <ul className="tecnologias-lista" aria-label="Tecnologías utilizadas">
          {tecnologias.map((tech, index) => (
            <li key={index} className="tecnologia-tag">{tech}</li>
          ))}
        </ul>
      </div>
      
      <div className="proyecto-enlaces">
        <a 
          href={enlaceDemo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="enlace-proyecto"
          aria-label={`Ver proyecto ${titulo} (se abre en una nueva pestaña)`}
        >
          <span>Ver proyecto</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>

    </article>
  )
}

export default TarjetaProyecto

  