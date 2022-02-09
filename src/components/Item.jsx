import React from 'react';
import Card from 'react-bootstrap/Card'
import {Container, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Product = ({id, title, img, precio}) => {
    const navigate = useNavigate();

    const goToProduct = () => {
        navigate(`/product/${id}`)
    }

    return(
        <Card className='m-3' style={{ width: '18rem' }}>        
        <Card.Img className='img-fluid' src={img}/>
        <Card.Body className='pt-3 pb-3 ps-0 pe-0'>
            <Card.Title className='itemTitle'>{title}</Card.Title>
            <Card.Text>                
                <p className='m-0 itemPrice'>${precio}</p>
            </Card.Text>
            <Container fluid className='d-flex justify-content-center p-0'>
                <Button onClick={ () => goToProduct()} className='btnAT m-0'>Ver detalle del Producto</Button>
                {/* <Button className='d-inline-flex m-1 btnAT' variant="primary">Comprar</Button> */}
            </Container>       
        </Card.Body>
        </Card>
    );
}

export default Product;