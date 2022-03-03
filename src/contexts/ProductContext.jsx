import { collection, getDocs } from 'firebase/firestore';
import React, { createContext, useState } from 'react';
import { db } from '../firebase';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [productsDetails, setProductsDetails] = useState([]);
    
    const getFromFirebase = async () => {
        
        const query = collection(db, 'items');
        const snapshot = await getDocs (query);

        const albumsList= [];
        
        snapshot.forEach((document)=> {
          const album = document.data();
          album['id']=document.id;
          albumsList.push(album); 
        });

        setProductsDetails(albumsList);
        
        return albumsList
    }

    return(
        <ProductContext.Provider value={{productsDetails, setProductsDetails, getFromFirebase}}>
            {children}
        </ProductContext.Provider>
    )
}