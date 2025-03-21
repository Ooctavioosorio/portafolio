import React, { useState, useEffect } from "react";

export const Texto = () => {
  const [texto, settexto] = useState("");

  const text = (event) => {
    settexto(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={text} placeholder="escriba aca" />
      <h2>{texto}</h2>
    </>
  );
};
