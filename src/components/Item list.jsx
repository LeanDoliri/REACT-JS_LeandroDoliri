import React from 'react';
import { Container } from 'react-bootstrap';
import { ProductProvider } from '../contexts/ProductContext';
import Item from "./Item";

const ItemList = ({products}) => {

    return (
        <>        
        {products.map(product => <Item key={product.id} product={product}/>)}
        </>    
    )
};

export default ItemList;