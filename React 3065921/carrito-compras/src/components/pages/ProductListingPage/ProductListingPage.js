// src/components/pages/ProductListingPage/ProductListingPage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../../organisms/ProductList/ProductList'; // Importamos el organismo ProductList
import productsData from '../../../products.json'; // Importamos nuestros datos de productos
import './ProductListingPage.css'; // Importamos el CSS de la página
import Text from '../../atoms/Text/Text'; // Importamos el átomo Text para el título
import Button from '../../atoms/Button/Button'; // Importamos el átomo Button
import Image from '../../atoms/Image/Image'; // Importamos el átomo Image

/**
 * Componente ProductListingPage (Página)
 * Esta es la página principal que muestra la lista de productos disponibles
 * y maneja la lógica para agregar productos al carrito.
 * @returns {JSX.Element} La página de listado de productos.
 */
const ProductListingPage = () => {
  // Estado para almacenar la lista de productos (inicialmente cargados del JSON)
  const [products, setProducts] = useState([]);

  // Estado para almacenar los productos en el carrito de compras
  const [cartItems, setCartItems] = useState([]);

  // useEffect para cargar los productos cuando el componente se monta
  useEffect(() => {
    // En una aplicación real, aquí haríamos una llamada a una API
    // Por ahora, simplemente cargamos los datos desde nuestro archivo JSON
    setProducts(productsData);
  }, []); // El array vacío de dependencias asegura que este efecto se ejecute solo una vez al montar

  /**
   * Función para agregar un producto al carrito.
   * Si el producto ya está en el carrito, incrementa su cantidad.
   * Si no está, lo agrega con una cantidad de 1.
   * @param {object} productToAdd – El producto a agregar al carrito.
   */
  const handleAddToCart = (productToAdd) => {
    setCartItems(prevItems => {
      // Buscamos si el producto ya existe en el carrito
      const existingItem = prevItems.find(item => item.id === productToAdd.id);

      if (existingItem) {
        // Si el producto ya está en el carrito, incrementamos su cantidad
        return prevItems.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si el producto no está en el carrito, lo agregamos con cantidad 1
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  /**
   * Función para quitar un producto del carrito.
   * Si hay más de una unidad del producto, decrementa la cantidad.
   * Si solo hay una unidad, elimina el producto del carrito.
   * @param {number} productId – El ID del producto a quitar del carrito.
   */
  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      
      if (existingItem.quantity > 1) {
        // Si hay más de una unidad, reducir la cantidad
        return prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Si solo hay una unidad, eliminar el item completamente
        return prevItems.filter(item => item.id !== productId);
      }
    });
  };

  // Calcular el total del carrito
  const cartTotal = cartItems.reduce((total, item) => 
    total + (item.price * item.quantity), 0);
  return (
    <div className="product-listing-page">
      <div className="page-header">
        <Text as="h1" className="page-title">Tienda de Tecnología Premium</Text>
      </div>
      
      <div className="main-content">
        {/* Renderizamos el organismo ProductList y le pasamos los productos y la función para agregar al carrito */}
        <ProductList products={products} onAddToCart={handleAddToCart} />

        {/* Sección del carrito de compras (más adelante la haremos un componente aparte) */}
        <div className="cart-summary">
          <Text as="h2" className="cart-title">Carrito de Compras ({cartItems.length} items)</Text>
          {cartItems.length === 0 ? (
            <Text as="p" className="cart-empty">El carrito está vacío.</Text>
          ) : (
            <>
              <ul className="cart-items">
                {cartItems.map(item => (
                  <li key={item.id} className="cart-item">
                    <Image src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <Text as="h3" className="cart-item-name">{item.name}</Text>
                      <Text as="p" className="cart-item-price">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </Text>
                      <Text as="p" className="cart-item-subtotal">
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </Text>
                      <Button 
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="cart-item-remove"
                      >
                        Quitar uno
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <Text as="h3">Total: ${cartTotal.toFixed(2)}</Text>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
