import { useState } from "react";
import { Contador } from "./componentes/Contador";
import { Listas } from "./componentes/Listas";
import { Texto } from "./componentes/Texto";
import { Usuario } from "./componentes/usuario";

export const App = () => {
  const listado = [
    { nombre: "oscar osorio", edad: "46", nacionalidad: "colombiano" },
    { nombre: "Luisa Osorio", edad: "19", nacionalidad: "colombiana" },
    { nombre: "Gladys Oliver", edad: "60", nacionalidad: "argentina" },
    { nombre: "Lianis fernanda", edad: "14", nacionalidad: "españa" },
    { nombre: "eliana patricia", edad: "54", nacionalidad: "EE.UU" },
  ];

  const [usuario, setusuario] = useState(listado);

  return (
    <>
      {/* se le hace un map aca en el padre al arrays usuario que titne asigando el arrays listadoy se muestra en el hijo que es el componente Usuario */}
      {usuario.map((user) => (
        <Usuario
          key={user.nombre}
          nombre={user.nombre}
          edad={user.edad}
          nacionalidad={user.nacionalidad}
        ></Usuario>
      ))}

      <Contador />
      <hr />
      <Texto />
      <hr />
      <Listas />
    </>
  );
};
