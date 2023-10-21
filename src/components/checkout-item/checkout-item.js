import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context/cart.context';
import "./checkout-item.styles.scss"
const CheckoutItem = ({props}) => {
    const {cartItems, addItemToCart, itemToRemove,decrementQuantity} = useContext(CartContext);
    const {imageUrl, price, name, id, quantity} = props;
    console.log(cartItems)

    const itemToIncrese = (item) => {
        addItemToCart(item)
    }
    const itemTodecrease = (item) => {
        decrementQuantity(item)
    }
        return (
        <div className='checkout-item-container'>
         <div className='image-container'>
            <img src={imageUrl} alt={name}/>
         </div>
        <span className='name'> {name} </span>
        <span className='quantity'> 
        
        <div className='arrow' onClick={() => itemTodecrease(props)}>&#10094;</div>

        <span> {quantity} </span>
        
        <div className='arrow' onClick={() => itemToIncrese(props)}>&#10095;</div>
        
        </span>
        <span className='price'>${price}</span>
       
       <div className='remove-button' onClick={() => {itemToRemove(props)}}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
