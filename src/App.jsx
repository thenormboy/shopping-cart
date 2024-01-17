import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './Header';
import { product } from './objects';

import React, { useState } from "react";
import { createContext } from 'react';

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
})

function App() {

  const [cartItems, setCartItems] = useState([])

  const products = [product(1, 'bag', 0), product(2, 'shirt', 0), product(3, 'jacket', 0)]

  function checkCart(cartArray) {

    let cartNameArray = []

    cartArray.forEach(element => {
      cartNameArray.push(element.getName())
    });
    return cartNameArray
  }

  const addToCart = (item) => {

    let nameArray = checkCart(cartItems)

    if (nameArray.includes(item.getName())) {
      item.setQuantity(item.getQuantity() + 1)
    } else {
      cartItems.push(item)
      item.setQuantity(1)
    }

    setCartItems(cartItems)
  }

  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Header />
      <Outlet />
    </ShopContext.Provider>
  );
};

export default App;
