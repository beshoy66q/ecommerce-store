// Product Card

import "./product-card.scss";
import Button from "../button/button.js";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context/cart.context";
const ProductCard = ({props}) => {

    const {addItemToCart} = useContext(CartContext)
    const {name, imageUrl, price} = props;


    const addProductToCart = () => {
        addItemToCart(props)
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt="img"></img>

            <div className="footer">
                  <div className="name">{name}</div>
                 <span className="price">${price}</span>
            </div>

            

            <Button children={"ADD TO CARD"} buttonType={"inverted"} onClick={addProductToCart}/>
        </div>
    );
}

export default ProductCard;
