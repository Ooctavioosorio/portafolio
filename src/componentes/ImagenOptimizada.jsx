import { useState, useEffect } from 'react';

function ImagenOptimizada({ src, alt, className, width, height }) {
  const [cargada, setCargada] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reiniciar estados cuando cambia la fuente
    if (src) {
      setCargada(false);
      setError(false);
    }
  }, [src]);

  const handleCarga = () => setCargada(true);
  const handleError = () => setError(true);

  return (
    <div 
      className={`imagen-contenedor ${className || ''}`} 
      style={{ 
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
      }}
    >
      {/* Placeholder mientras se carga */}
      {!cargada && !error && (
        <div 
          className="imagen-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="cargando-pulso"></div>
        </div>
      )}
      
      {/* Imagen con lazy loading */}
      <img
        src={src}
        alt={alt}
        className={`imagen-optimizada ${cargada ? 'cargada' : ''}`}
        loading="lazy"
        onLoad={handleCarga}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: cargada ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />
      
      {/* Fallback en caso de error */}
      {error && (
        <div 
          className="imagen-error"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#888',
          }}
        >
          <span>Imagen no disponible</span>
        </div>
      )}
    </div>
  );
}

export default ImagenOptimizada;
