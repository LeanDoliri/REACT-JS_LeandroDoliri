import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ItemCart = ({id, title, img, precio, qty, removeItemCart}) => {
    
    return (
        <>
            <Card className='m-3' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p className='m-0'>Cantidad: {qty}</p>               
                        <p className='m-0'> <strong>$ {precio * qty}</strong></p>
                    </Card.Text>      
                </Card.Body>
                <Button onClick = {() => removeItemCart(id)} className='btnAT mt-3 mb-0 ms-0 me-0'>Eliminar Producto</Button>
            </Card>           
        </>
    );
}
 
export default ItemCart;