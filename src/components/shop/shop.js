import { useContext } from "react";
import { CategoriestsContext } from "../../products-context/products-context";
import ProductCard from "../product-card/product-card";
import Product from "../products-preview/product";
import "./shop.style.scss"
import { Fragment } from "react";
const Shop = () => {
    
    const {products} = useContext(CategoriestsContext);

    return (
        <>
            {
                 Object.keys(products).map((title) => {
                   const categories = products[title];

                   return <>
                        <Product key={title} title={title} products={categories}/>
                  </>
                 })
            }
        </>
    );
}

export default Shop;
