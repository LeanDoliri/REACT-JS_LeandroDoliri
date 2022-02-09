import React, { useState, useEffect } from 'react';
import ItemListContainer from './ItemListContainer';
import { getProductFromCategory } from '../services/Products';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useOutletContext();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setTimeout(() => {
      getProductFromCategory('MLA', 'MLA1168').then(items => {
        if (mounted){
          setProducts(items.results);
        }
      });
      setLoading(false);
      return () => mounted = false;
    }, 500);
    },[])    

  return (
    <div>
        <ItemListContainer products={products}/>        
    </div>
  );
}

export default Home;
