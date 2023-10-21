import './cart-dropdown.scss';
import Button from '../button/button';
import { useEffect } from 'react';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context/cart.context';
import { Navigate, useNavigate } from 'react-router';

const CartDropdown = () => {

    // const cartItems = [{id: 1, name: "jeans", price: 10, quantity: 12}, {id: 2, name: "trousers", price: 20, quantity: 10}];

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    return (
        <div className='cart-dropdown-container'>
           {cartItems.length === 0 ? <span>ADD SOMETHING !</span>: <div className='cart-items'>
               {cartItems.map((ele) => {
                return (

                   <> 

                   <CartItem key={ele.id} cartItem={ele}/>
                   
                   </>
                )
               })}
            </div>}
            <Button children={"CHECK OUT NOW!"} onClick={() => {navigate('/checkout');}}/>
        </div>
    );
}

export default CartDropdown;