
function TarjetaProyecto({ titulo, descripcion, tecnologias, enlaceDemo }) {
  return (
    <div className="tarjeta-proyecto">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p><strong>Tecnologías:</strong> {tecnologias.join(', ')}</p>
      <a href={enlaceDemo} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
    </div>
  )
}

export default TarjetaProyecto

  