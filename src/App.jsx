import React from 'react';
import Header from './components/Header/header';
import Products from './components/Products/products';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
    </Provider>
  );
}

export default App;
