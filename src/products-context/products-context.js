import SHOP_DATA from "../shop-data";
import { createContext, useEffect, useState } from 'react';
import { addCollectionsAndDocs , getDocsAndData} from "../utils/firebase/firebase";



export const CategoriestsContext = createContext({
  products: [],
});


export const CategoriesProvider = ({ children }) => {

  const [products, setProducts] = useState({});
      
       useEffect(() => {
       const a7a = async () => {
        const fff = await getDocsAndData();
        setProducts(fff)

       }
       a7a()
       }, []);

       
  const value = { products };
  return (
    <CategoriestsContext.Provider value={value}>
      {children}
    </CategoriestsContext.Provider>
  );
};
