import React from 'react';
import Item from "./Item";


const ItemList= ({products}) =>{
    console.log(products)
    return(
        <>
            {products.map(product => <Item id={product.id} title={product.title} stock={product.sold_quantity} img={product.thumbnail} precio={product.price}description={product.permalink}/>)}
        </>    
    )
};

export default ItemList;