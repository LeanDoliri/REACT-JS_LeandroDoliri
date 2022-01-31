import React from 'react';
import Item from "./Item";

const ItemList= ({products}) =>{
    return(
        <>
            {products.map(product => <Item key={product.id} id={product.id} title={product.title} stock={product.sold_quantity} img={product.thumbnail} precio={product.price}description={product.permalink}/>)}
        </>    
    )
};

export default ItemList;