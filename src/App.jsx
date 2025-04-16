import Encabezado from "./componentes/Encabezado";
import Inicio from "./componentes/Inicio";
import SobreMi from "./componentes/SobreMi";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import PiePagina from "./componentes/PiePagina";

function App() {
  return (
    <>
      <Encabezado />

      <div className="fondo-global">
        <Inicio />
        <SobreMi />
        <Proyectos />
        <Contacto />
      </div>

      <PiePagina />
    </>
  );
}

export default App;

