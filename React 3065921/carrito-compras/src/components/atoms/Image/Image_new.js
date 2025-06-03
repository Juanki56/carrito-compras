import React, { useState } from 'react';
import './Image_new.css';

const Image = ({ src, alt, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    // Si la imagen original falla, usar una imagen de respaldo
    if (currentSrc === src) {
      const fallbackImage = `https://via.placeholder.com/400x400/ffffff/666666?text=${encodeURIComponent(alt || 'Imagen no disponible')}`;
      setCurrentSrc(fallbackImage);
    }
  };

  return (
    <div className={`image-wrapper ${className}`}>
      {isLoading && (
        <div className="image-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`image ${isLoading ? 'image-hidden' : ''} ${hasError ? 'image-error' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      {hasError && currentSrc === src && (
        <div className="image-error-message">
          <span>Error al cargar la imagen</span>
        </div>
      )}
    </div>
  );
};

export default Image;