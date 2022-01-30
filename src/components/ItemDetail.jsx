import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ItemDetail = ({product}) => {
    console.log()
    return (
        <Container>
            <Row>
                <Col xs={5}>
                    <img className='img-fluid' width= '400' src={product.thumbnail}/>
                </Col>
                <Col xs={5}>
                    <h1>{product.title}</h1>
                    <h3>${product.price}</h3>
                    <p>{product.description}</p>
                </Col>
            </Row>                      
        </Container>
     );
}
 
export default ItemDetail;