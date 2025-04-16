
import TarjetaProyecto from './TarjetaProyecto'

function Proyectos() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div className="lista-proyectos">
        {/* Proyecto 1: Mentoría */}
        <TarjetaProyecto
          titulo="Mentoría - Estar con tu Ser"
          descripcion="Landing page centrada en el bienestar y el desarrollo personal. Presenta la propuesta de mentoría con diseño minimalista, enfoque introspectivo y un formulario de contacto funcional."
          tecnologias={['React', 'CSS']}
          enlaceDemo="https://teloscomunicacioncontuser.com/"
        />

        {/* Proyecto 2: Gratia Accesorios */}
        <TarjetaProyecto
          titulo="Gratia Accesorios"
          descripcion="Tienda online ficticia de joyería. Cuenta con catálogo de productos, diseño atractivo y responsivo, ideal para emprendedores que buscan presencia online profesional."
          tecnologias={['React', 'CSS']}
          enlaceDemo="https://gratia-accesorios.netlify.app/"
        />
      </div>
    </section>
  )
}

export default Proyectos
