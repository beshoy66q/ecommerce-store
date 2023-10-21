// Cart Context



import { createContext, useEffect, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, product) => {
  return cartItems.map((cartItem) => {
    return cartItem.id === product.id ? null:cartItem
  }).filter((cartItem) => {
    return cartItem != null;
  })
}


export const decrement = (cartItems, product) => {


  return cartItems.map((cartItem) => {
  
  
    if (cartItem.quantity === 1) {
      return cartItem.id === product.id ? null: cartItem
    }

    return cartItem.id === product.id ? { ...cartItem, quantity: --cartItem.quantity}: cartItem
  
  }).filter((cartItem) =>  {
    return cartItem != null;
  });
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
  decrement: () => {},
  removeItem: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  function calc() {
    let t = 0;
    cartItems.map((ele) => {
      return t += ele.quantity * ele.price;
    })
    return t;
  }
  const newCartTotal = cartItems.length > 0 ?  calc(): 0;
  useEffect(() => {
    setTotal(newCartTotal)
  },[cartItems]);

  const addItemToCart = (product) =>  setCartItems(addCartItem(cartItems, product));
  const decrementQuantity = (product) => setCartItems(decrement(cartItems, product));
  const itemToRemove = (product) => setCartItems(removeItem(cartItems, product));
  const value = {isCartOpen, setIsOpen, cartItems, addItemToCart, decrementQuantity, itemToRemove,total};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};