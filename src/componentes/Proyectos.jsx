import TarjetaProyecto from './TarjetaProyecto'

function Proyectos() {
  return (
    <section id="proyectos">
      <div className="proyectos-encabezado">
        <h2>Proyectos Destacados</h2>
        <p className="proyectos-intro">
          <span className="destacado">Soluciones digitales</span> que transforman ideas en experiencias excepcionales. 
          Cada proyecto representa mi compromiso con la excelencia técnica y el diseño centrado en el usuario.
        </p>
      </div>
      
      <div className="lista-proyectos">
        {/* Proyecto 1: Mentoria */}
        <TarjetaProyecto
          titulo="Mentoria - Estar con tu Ser"
          descripcion="Landing page centrada en el bienestar y el desarrollo personal. Presenta la propuesta de mentoria con diseño minimalista, enfoque introspectivo y un formulario de contacto funcional."
          tecnologias={['React', 'CSS', 'Responsive Design']}
          enlaceDemo="https://teloscomunicacioncontuser.com/"
          logros={[
            'Aumento de consultas en un 45%',
            'Tiempo de carga reducido a 1.5s',
            'Diseño intuitivo que mejora la conversión'
          ]}
        />

        {/* Proyecto 2: Gratia Accesorios */}
        <TarjetaProyecto
          titulo="Gratia Accesorios"
          descripcion="Tienda online de joyería con catálogo de productos, diseño atractivo y responsivo, ideal para emprendedores que buscan establecer una presencia online profesional y aumentar sus ventas."
          tecnologias={['React', 'CSS', 'E-commerce', 'UX/UI']}
          enlaceDemo="https://gratia-accesorios.netlify.app/"
          logros={[
            'Interfaz de usuario intuitiva para explorar productos',
            'Diseño responsive optimizado para móviles',
            'Experiencia de compra simplificada'
          ]}
        />
      </div>
      
      <div className="proyectos-cta">
        <p>¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte a hacerlo realidad.</p>
        <a href="https://wa.me/573005466325" target="_blank" rel="noopener noreferrer" className="boton boton-primario boton-whatsapp">
          Contactarme por WhatsApp
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Proyectos
