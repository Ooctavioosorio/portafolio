import React, { useState, useEffect } from "react";

export const Texto = () => {
  const [texto, settexto] = useState("");

  const text = (event) => {
    settexto(event.target.value);
  };

  useEffect(() => {
    console.log("prueba2");
  }, []);

  return (
    <>
      <input type="text" onChange={text} />
      <h2>{texto}</h2>
    </>
  );
};
