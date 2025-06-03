// src/components/atoms/Image/Image.js

import React from 'react';
import './Image.css'; // Importamos el archivo CSS para estilos

/**
 * Componente Image (Átomo)
 * @param {object} props - Propiedades del componente.
 * @param {string} props.src - La URL de la imagen.
 * @param {string} props.alt - Texto alternativo para la imagen (accesibilidad).
 * @param {string} [props.className] - Clases CSS adicionales para estilizar la imagen.
 * @returns {JSX.Element} Un elemento de imagen HTML.
 */

const Image = ({ src, alt, className = '' }) => {
  return (
    <img src={src} alt={alt} className={`image ${className}`} />
  );
};

export default Image;
