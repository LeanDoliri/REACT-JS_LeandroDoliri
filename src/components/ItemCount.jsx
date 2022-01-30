import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState (initial);

    const add = () => {
        if (count < stock){
            setCount(count + 1);
        }
    };

    const remove = () => {
        if (count > 1){
            setCount(count - 1);
        }
    };

    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <Button className='m-1' onClick= {remove} >-</Button>
            <p className='m-1'>{count}</p>            
            <Button className='m-1' onClick= {add} >+</Button>
        </Container>      
    )
};

export default ItemCount;