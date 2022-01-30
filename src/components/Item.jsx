import React from 'react';
import Card from 'react-bootstrap/Card'
import {Container, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Product = ({id, title, img, precio, description}) => {
    const navigate = useNavigate();

    const goToProduct = () => {
        navigate(`/product/${id}`)
    }

    return(
        <Card className='m-3' style={{ width: '15rem' }}>        
        <Card.Img className='img-fluid' variant="top"  src={img}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>                
                <p className='m-0'>${precio}</p>
            </Card.Text>
            <Container className='d-flex justify-content-center'>
                <Button onClick={ () => goToProduct()} className='d-inline-flex m-1' variant='secondary'>+Info</Button>
                <Button className='d-inline-flex m-1' variant="primary">Comprar</Button>
            </Container>       
        </Card.Body>
        </Card>
    );
}

export default Product;