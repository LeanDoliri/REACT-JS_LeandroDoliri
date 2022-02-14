import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [productsDetails, setProductsDetails] = useState([]);    

    return(
        <ProductContext.Provider value={{productsDetails, setProductsDetails}}>
            {children}
        </ProductContext.Provider>
    )
}