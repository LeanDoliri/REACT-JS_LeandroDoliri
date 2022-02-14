import React, { useState, useEffect } from 'react';
import ItemListContainer from './ItemListContainer';
import { useOutletContext } from 'react-router-dom';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useOutletContext();
  const {setProductsDetails} = useContext(ProductContext)

    useEffect(() => {
      const getFromFirebase = async () => {
        setLoading(true);
        const query = collection(db, 'items');
        const snapshot = await getDocs (query);

        const albumsList= [];
        
        snapshot.forEach((document)=> {
          const album = document.data();
          album['id']=document.id;
          albumsList.push(album); 
        });

        setProducts(albumsList);
        setProductsDetails(albumsList);
      }
      getFromFirebase().then(()=> setLoading(false))
    }, [])

  return (
    <div>
        <ItemListContainer products={products}/>        
    </div>
  );
}

export default Home;
