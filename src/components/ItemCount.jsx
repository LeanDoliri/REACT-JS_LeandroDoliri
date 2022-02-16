import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ItemCount = ({itemQty, stock, setItemQty}) => {    

    const add = () => {
        if (itemQty < stock){
            setItemQty(itemQty + 1);
        }
    };

    const remove = () => {
        if (itemQty > 1){
            setItemQty(itemQty - 1);
        }
    };

    return (
        <Container className='d-flex justify-content-center align-items-center p-0 mt-0 mb-2'>
            <Button className='btnAT ms-5 me-2 hover' onClick= {remove} >-</Button>
            <p className='itemDetailP m-3 d-flex justify-content-center align-items-center'>{itemQty}</p>            
            <Button className='btnAT ms-2 me-5 hover' onClick= {add} >+</Button>
        </Container>      
    )
};

export default ItemCount;