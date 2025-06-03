// src/components/organisms/ProductList/ProductList.js
import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard'; // Importamos la molécula ProductCard
import './ProductList.css'; // Importamos el archivo CSS para estilos

/**
 * Componente ProductList (Organismo)
 * Muestra una lista de productos utilizando el componente ProductCard para cada uno.
 * @param {object} props – Propiedades del componente.
 * @param {Array<object>} props.products – Un array de objetos de productos a mostrar.
 * @param {function} props.onAddToCart – Función que se pasa a cada ProductCard para agregar un producto al carrito.
 * @returns {JSX.Element} Una lista de tarjetas de productos.
 */
const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {/* Mapeamos sobre el array de productos y renderizamos un ProductCard para cada uno */}
      {products.map(product => (
        <ProductCard
          key={product.id} // Es importante usar una 'key' única cuando mapeamos listas en React
          product={product}
          onAddToCart={onAddToCart} // Pasamos la función onAddToCart a cada ProductCard
        />
      ))}
    </div>
  );
};

export default ProductList;
