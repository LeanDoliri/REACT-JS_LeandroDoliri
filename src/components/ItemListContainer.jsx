import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemList from './Item list';

const ItemListContainer = ({products}) =>{

    return (
        <Container>
            <Row xs={2} md={4} className='g-a mt-1 justify-content-center'>
                <ItemList products={products}/>
            </Row>            
        </Container>          
    )
};

export default ItemListContainer;