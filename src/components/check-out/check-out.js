import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context/cart.context';
import "./check-out.styles.scss"
import CheckoutItem from '../checkout-item/checkout-item';
const CheckOut = () => {
    const {cartItems, addItemToCart, decrementQuantity, itemToRemove,total} = useContext(CartContext);
      return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>product</span>
                </div>
                <div className='header-block'>
                    <span>description</span>

                </div>
                <div className='header-block'>
                    <span>
                        quantity
                        </span>

                </div>
                <div className='header-block'>
                <span>price</span>

                </div>
                <div className='header-block'>
                <span>remove</span>

                </div>
            </div>
            
            {
                
                cartItems.map((cartItem) => {
                   return <CheckoutItem key={cartItem.id} props={cartItem}/>
                   
                })
            }
                <span className='total'>total: ${total}</span>
           
        </div>
      )
      
}

export default CheckOut;