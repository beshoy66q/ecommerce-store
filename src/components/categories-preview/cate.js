import { Fragment } from "react";
import { Route, Routes } from "react-router";
import Product from "../products-preview/product";
import Category from "../category/category";
const Shop = () => {
  
    return (
        <>
             <Routes>
                <Route index element={<Product />}/>
                <Route path=":category" element={<Category />}/>
             </Routes>
        </>
    );
}

export default Shop;
