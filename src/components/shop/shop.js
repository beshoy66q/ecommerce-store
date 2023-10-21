// SHOP

import { useContext } from "react";
import { ProductsContext } from "../../products-context/products-context";
import ProductCard from "../product-card/product-card";
import "./shop.style.scss"
const Shop = () => {
    
    const {products} = useContext(ProductsContext);


    return (
        <div className="products-container">
            {products.map((ele) => {
                return <ProductCard key={ele.id} props={ele}></ProductCard>
            })}
        </div>
    );
}

export default Shop;
