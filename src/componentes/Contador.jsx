import { useState } from "react";

export const Contador = () => {
  const [numero, setnumero] = useState(0);
  const sumar = () => {
    setnumero(numero + 1);
  };

  return (
    <>
      <h1>Contador</h1>
      <h2>{numero}</h2>
      <button onClick={sumar}>sumar</button>
    </>
  );
};
 