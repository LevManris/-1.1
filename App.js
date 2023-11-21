import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <ProductList products={products} />
      </main>
      <footer className="footer">
         <p>&copy; 2023 Ваше название компании. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;
