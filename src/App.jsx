import React from "react";
import Encabezado from "./componentes/Encabezado";
import Inicio from "./componentes/Inicio";
import SobreMi from "./componentes/SobreMi";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import PiePagina from "./componentes/PiePagina";
import SeccionDiferida from "./componentes/SeccionDiferida";

function App() {

  return (
    <>
      {/* Enlace para saltar al contenido principal - visible sólo al navegar con teclado */}
      <a href="#inicio" className="saltar-navegacion" tabIndex="0">Saltar al contenido principal</a>
      
      <Encabezado />

      <div className="fondo-global">
        <Inicio />
        
        <SeccionDiferida umbral={0.15}>
          <SobreMi />
        </SeccionDiferida>
        
        <SeccionDiferida umbral={0.15}>
          <Proyectos />
        </SeccionDiferida>
        
        <SeccionDiferida umbral={0.15}>
          <Contacto />
        </SeccionDiferida>
      </div>

      <PiePagina />
      

      <a 
        href="https://wa.me/573005466325" 
        className="whatsapp-flotante" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        role="button"
        tabIndex="0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 39 39">
          <path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path>
          <path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path>
        </svg>
      </a>
    </>
  );
}

export default App;

