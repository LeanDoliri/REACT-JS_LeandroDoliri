import React from 'react';
import Card from 'react-bootstrap/Card'
import {Container, Button} from 'react-bootstrap';
import ItemCount from './ItemCount';

const Product = ({title, img, precio, año, description, stock}) => {
    return(
        <Card className='m-3' style={{ width: '15rem' }}>        
        <Card.Img className='img-fluid' variant="top"  src={img}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>                
                <p className='m-0'>${precio}</p>
            </Card.Text>
            {/* <ItemCount stock = {stock} initial= {1} /> */}
            <Container className='d-flex justify-content-center'>
                <a href={description}><Button className='d-inline-flex m-1' variant="secondary">+Info</Button></a>
                <Button className='d-inline-flex m-1' variant="primary">Comprar</Button>
            </Container>       
        </Card.Body>
        </Card>
    );
}

export default Product;