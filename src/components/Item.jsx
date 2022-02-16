import React from 'react';
import Card from 'react-bootstrap/Card'
import {Container, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext} from '../contexts/ProductContext';

const Product = ({product}) => {  
    const {id, title, img, price, descpription, artist} = product;
    const navigate = useNavigate();

    const goToProduct = () => {
        navigate(`/product/${id}`);
    };

    return(
        <Card className='m-3 p-0 hover' style={{ width: '18rem' }}>        
            <Card.Img className='img-fluid' src={img}/>
            <Card.Body className='d-flex flex-column justify-content-end pt-3 pb-0 ps-0 pe-0'>
                <Card.Title className='itemTitle ms-2 me-2'>{title} - {artist}</Card.Title>
                <Card.Text>                
                    <p className='m-0 itemPrice ms-2 me-2'>${price}</p>
                </Card.Text>
                <Container fluid className='p-0'>
                    <Button onClick={() => goToProduct()} className='btnAT m-0'>Ver detalle del Producto</Button>
                </Container>       
            </Card.Body>
        </Card>
    );
}

export default Product;