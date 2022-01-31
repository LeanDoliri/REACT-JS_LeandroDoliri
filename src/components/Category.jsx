import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { getProductFromCategory } from '../services/Products'; 
import ItemListContainer from './ItemListContainer';

const Category = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useOutletContext();
    const { id } = useParams();

    useEffect(() => {
        let mounted = true
        setLoading(true)
        setTimeout(() => {
            getProductFromCategory('MLA', id).then(items => {
              if (typeof id !== 'undefined'){
                setProducts(items.results);
              }
            });
            return () => mounted = false;
          }, 500);
          },[id])

    return (  
        <div>
            <ItemListContainer products={products}/>      
        </div>
    );
}
 
export default Category;