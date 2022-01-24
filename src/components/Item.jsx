import React from 'react';
import Card from 'react-bootstrap/Card'
import {Container, Button} from 'react-bootstrap';
import ItemCount from './ItemCount';

const Product = ({title, artista, año, description, stock}) => {
    return(
        <Card className='m-3' style={{ width: '25rem' }}>
        {/* <Card.Img variant="top" src=""/> */}
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>                
                <p className='m-0'>{artista}</p>
                <p className='m-0'>{año}</p>
                <p className='m-0'>{description}</p>
            </Card.Text>
            <ItemCount stock = {stock} initial= {1} />
            <Container className='d-flex justify-content-center'>
                <Button className='d-inline-flex m-1' variant="secondary">+ Info</Button>
                <Button className='d-inline-flex m-1' variant="primary">Agregar al Carrito</Button>
            </Container>       
        </Card.Body>
        </Card>
    );
}

export default Product;