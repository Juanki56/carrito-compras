// src/App.js
import React from 'react';
import ProductListingPage from './components/pages/ProductListingPage/ProductListingPage'; // Importamos nuestra página
import './App.css'; // Mantenemos el CSS global si es necesario, o lo vaciamos

/**
 * Componente principal de la aplicación.
 * Es el punto de entrada de nuestra aplicación React.
 * @returns {JSX.Element} La estructura principal de la aplicación.
 */
function App() {
  return (
    <div className="App">
      {/* Renderizamos nuestra página de listado de productos */}
      <ProductListingPage />
    </div>
  );
}

export default App;