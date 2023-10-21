import SHOP_DATA from "../shop-data";
import { createContext, useEffect, useState } from 'react';
import {addCollectionAndDocuments, getCollectionAndDocs} from "../utils/firebase/firebase"
import { getObjectsAndDocs } from '../utils/firebase/firebase';



export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {

  useEffect(() => {

     const g = async () => {
        const map = await getCollectionAndDocs();
        console.log(map);
    }
    g();
  }, [])


  const [products, setProducts] = useState([]);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
