import { useState, useEffect, useRef } from 'react';

function SeccionDiferida({ children, umbral = 0.1, className = '' }) {
  const [esVisible, setEsVisible] = useState(false);
  const [yaObservado, setYaObservado] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    if (!currentRef || yaObservado) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setEsVisible(true);
          setYaObservado(true);
          observador.unobserve(currentRef);
        }
      },
      { threshold: umbral }
    );

    observador.observe(currentRef);

    return () => {
      if (currentRef) {
        observador.unobserve(currentRef);
      }
    };
  }, [umbral, yaObservado]);

  return (
    <div 
      ref={sectionRef} 
      className={`seccion-diferida ${esVisible ? 'seccion-visible' : 'seccion-oculta'} ${className}`}
    >
      {esVisible && children}
    </div>
  );
}

export default SeccionDiferida;
