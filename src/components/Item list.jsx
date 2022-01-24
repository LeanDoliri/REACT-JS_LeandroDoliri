import React, { useState } from 'react';
import { Col, Container } from "react-bootstrap";
import Item from "./Item";

const ItemList= () =>{
    const [products, setProducts] = useState([
        {id: '1', title: 'Disco 1', artista: 'Artista', año: '2000', description: 'Descripción',price: '$1500', stock: '5', pictureUrl: ''},
        {id: '2', title: 'Disco 2', artista: 'Artista', año: '2000', description: 'Descripción',price: '$1500', stock: '4', pictureUrl: ''},
        {id: '3', title: 'Disco 3', artista: 'Artista', año: '2000', description: 'Descripción',price: '$1500', stock: '1', pictureUrl: ''}
    ]);

    return(
        <Container>
            <Col className='d-flex flex-wrap justify-content-around'>
              {products.map(product => <Item title={product.title} artista={product.artista} año={product.año}  description={product.description} stock={product.stock}/>)}
            </Col>
        </Container>      
    )
};

export default ItemList;