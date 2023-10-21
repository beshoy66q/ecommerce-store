import React, { useContext } from 'react';
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../shopping-bag.svg";
import { CartContext } from '../../context/cart-context/cart.context.js';

const CartIcon = () => {
  const { isCartOpen, setIsOpen } = useContext(CartContext);

  const toggle = () => {
    setIsOpen(!isCartOpen);
    console.log("hit")
  };

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className="shopping-icon" onClick={toggle}/>
      <span className='item-count'>0</span>
    </div>
  );
}

export default CartIcon;