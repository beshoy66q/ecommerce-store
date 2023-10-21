import React from 'react';
import "./product.scss";
import ProductCard from '../product-card/product-card';
const Product = ({title, products}) => {
    return (
        <div className='product-preview-container'>
            <h2><span className='title'>{title.toUpperCase()}</span></h2>
            <div className='preview'>
                {
                    products.filter((_, index) => {
                        return index < 4;
                    }).map((ele) => {
                        return <ProductCard id={ele.id} props={ele}/>
                    })
                }
            </div>
        </div>
    );
}

export default Product;
