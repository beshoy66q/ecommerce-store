import React from 'react';
import "./category.scss";
import { useParams } from 'react-router';
import { useContext } from 'react';
import { CategoriestsContext } from '../../products-context/products-context';
import ProductCard from '../product-card/product-card';


const Category = () => {
    const {Category} = useParams();
    const {categoriesMap} = useContext(CategoriestsContext);
    const products = categoriesMap[Category];

    return (
        <div className='category-container'>
            {
                products.map((product) => {
                     <ProductCard key={product.id} props={product} />
                })
            }
        </div>
    )

}

export default Category;
