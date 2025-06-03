// src/components/atoms/Text/Text.js
import React from 'react';
import './Text.css'; // Importamos el archivo CSS para estilos

/**
 * Componente Text (Átomo)
 * Renderiza un elemento de texto con la etiqueta HTML especificada.
 * @param {object} props - Propiedades del componente.
 * @param {string} props.children - El contenido de texto a mostrar.
 * @param {string} [props.as='p'] - La etiqueta HTML a renderizar (ej. 'p', 'h1', 'span', 'div').
 * @param {string} [props.className] - Clases CSS adicionales para estilizar el texto.
 * @returns {JSX.Element} Un elemento de texto HTML.
 */
const Text = ({ children, as: Component = 'p', className = '' }) => {
  return (
    <Component className={`text ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
