import { Contador } from "./componentes/Contador";
import { Listas } from "./componentes/Listas";
import { Texto } from "./componentes/Texto";
import { Usuario } from "./componentes/usuario";

export const App = () => {
  return (
    <>
      {/* <Usuario nombre="oscar osorio" edad="46" nacionalidad="colombiano" />
      <Usuario nombre="Luisa osorio" edad="19" nacionalidad="colombiana" />
      <Contador />
      <hr />
      <Texto/>
      <hr /> */}
      <Listas/>
    </>
  );
};
