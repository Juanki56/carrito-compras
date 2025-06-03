// src/components/molecules/ProductCard/ProductCard.js
import React from 'react';
import Image from '../../atoms/Image/Image_new'; // Importamos el nuevo componente Image
import Text from '../../atoms/Text/Text';       // Importamos el átomo Text
import Button from '../../atoms/Button/Button'; // Importamos el átomo Button
import './ProductCard.css';                     // Importamos el archivo CSS para estilos

/**
 * Componente ProductCard (Molécula)
 * Muestra la información de un producto individual (nombre, imagen, precio, descripción)
 * y un botón para agregarlo al carrito.
 * 
 * @param {object} props - Propiedades del componente.
 * @param {object} props.product - Objeto que contiene los detalles del producto.
 * @param {function} props.onAddToCart - Función a ejecutar cuando se hace clic en "Agregar al Carrito".
 * @returns {JSX.Element} Una tarjeta de producto.
 */

const ProductCard = ({ product, onAddToCart }) => {
  const { name, image, price, description } = product;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onAddToCart(product);
    }
  };

  return (
    <article 
      className="product-card" 
      tabIndex="0"
      role="article"
      aria-label={`${name} - $${price.toFixed(2)}`}
    >
      <div className="product-card__image-container">
        {/* Muestra la imagen del producto usando el nuevo componente Image */}
        <Image 
          src={image} 
          alt={name} 
          className="product-card__image" 
        />
      </div>

      <div className="product-card__details">
        {/* Muestra el nombre del producto usando el átomo Text como un h3 */}
        <Text 
          as="h3" 
          className="product-card__name"
          role="heading"
          aria-level="3"
        >
          {name}
        </Text>

        {/* Muestra el precio del producto usando el átomo Text */}
        <Text 
          as="p" 
          className="product-card__price"
          aria-label={`Precio: ${price.toFixed(2)} dólares`}
        >
          ${price.toFixed(2)} {/* Formateamos el precio a 2 decimales */}
        </Text>

        {/* Muestra la descripción del producto usando el átomo Text */}
        <Text 
          as="p" 
          className="product-card__description"
          aria-label="Descripción del producto"
        >
          {description}
        </Text>

        {/* Botón para agregar al carrito usando el átomo Button */}
        <Button 
          onClick={() => onAddToCart(product)}
          onKeyPress={handleKeyPress}
          className="product-card__add-button"
          aria-label={`Agregar ${name} al carrito`}
        >
          Agregar al Carrito
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
