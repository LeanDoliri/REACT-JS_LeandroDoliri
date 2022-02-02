import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => { 
    const [itemQty, setItemQty] = useState(1);
    const [compra, setCompra] = useState([]);
    const navigate = useNavigate();
    
    const solicitarCompra = new Promise ((resolve) =>{
        setTimeout(() =>{
            setCompra([{Product: product.id}, {Quantity: itemQty}]);
            resolve (compra);
        }, 500)
    })

    const FinalizarCompra = () => {
        solicitarCompra
            .then(res => {console.log(res)})
            .then(navigate('/cart'))
        }   

    return (
        <Container className='mt-3'>
            <Row>
                <Col xs={5} className='d-flex justify-content-center align-itmes-center'>
                    <img className='img-fluid' src={product.thumbnail}/>
                </Col>
                <Col xs={5}>
                    <h1 className='itemDetailTitle'>{product.title}</h1>
                    <h3 className='itemDetailTitle'>$ {product.price}</h3>
                    <Container>
                        <p className='itemDetailP mb-0'>Cantidad</p>
                        <ItemCount itemQty={itemQty} id={product.id} stock={product.available_quantity} setItemQty={setItemQty}/>
                        <p className='itemDetailP'>(Disponibles: {product.available_quantity})</p>
                        <Button onClick = {FinalizarCompra} className='btnAT mt-3 mb-0 ms-0 me-0'>Comprar</Button>                  
                    </Container>                    
                </Col>
            </Row>
            <Row>
                <Col xs = {5} className='mt-3 mb-3'>
                    <p className='itemDetailDescription'><strong>Descripción:</strong><br/>{product.description}</p>                                    
                </Col>
            </Row>                     
        </Container>
     );
}
 
export default ItemDetail;