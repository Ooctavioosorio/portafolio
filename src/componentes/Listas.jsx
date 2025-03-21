import { useEffect, useState } from "react";
import data from "../data/productos.json";

export const Listas = () => {
  const [product, setproduct] = useState([]);

  const productos = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  useEffect(() => {
    productos().then((res) => {
      setproduct(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <h1>listado de personas</h1>

      {product.map((producto) => (
        <div className="contenedor" key={producto.id}>
          <p>{producto.id}</p>
          <p>{producto.nombre} </p>
          <p>{producto.apellido} </p>
          <p>{producto.correo} </p>
        </div>
      ))}
    </>
  );
};
