import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

const ItemListContainer = ({titulo}) => {
    return(
        <Card className='m-1' style={{ width: '25rem' }}>
        {/* <Card.Img variant="top" src=""/> */}
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
                <p className='m-0'>Artista</p>
                <p className='m-0'>Año</p>
            </Card.Text>
            <Container className='d-flex justify-content-center'>
                <Button className='d-inline-flex m-1' variant="secondary">+ Info</Button>
                <Button className='d-inline-flex m-1' variant="primary">Agregar al Carrito</Button>
            </Container>       
        </Card.Body>
        </Card>
    );
}

export default ItemListContainer;