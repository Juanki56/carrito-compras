// src/components/atoms/Button/Button.js
import React from 'react';
import './Button.css'; // Importamos el archivo CSS para estilos

/**
 * Componente Button (Átomo)
 * @param {object} props - Propiedades del componente.
 * @param {string} props.children - El contenido del botón (texto, icono, etc.).
 * @param {function} props.onClick - Función a ejecutar cuando se hace clic en el botón.
 * @param {string} [props.type='button'] - Tipo del botón ('button', 'submit', 'reset').
 * @param {boolean} [props.disabled=false] - Indica si el botón está deshabilitado.
 * @param {string} [props.className] - Clases CSS adicionales para estilizar el botón.
 * @returns {JSX.Element} Un elemento de botón HTML.
 */
const Button = ({ children, onClick, type = 'button', disabled = false, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
