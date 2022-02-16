import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { CartContext, CartProvider } from '../contexts/CartContext';
import { db } from '../firebase';
import ItemCart from './Item Cart';

const Cart = () => {
    const {cartItems, clearCart, removeItemCart} = useContext (CartContext);
    const [cartTotal, setCartTotal] = useState ();
    const navigate = useNavigate();
    const [loading, setLoading] = useOutletContext();
 
    useEffect(() => {
        setCartTotal(cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0));
        setLoading(false)
    })

    const goToHome = () => {
        navigate('/')
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const buyer = {
            nameBuyer: e.target.elements.nameBuyer.value,
            emailBuyer: e.target.elements.emailBuyer.value,
            phoneBuyer: e.target.elements.phoneBuyer.value
        };

        const itemsToBuy = cartItems.map(item => {
            return {
                id: item.id,
                title: item.title,
                artist: item.artist,
                price: item.price,
                qty: item.qty
            }
        });

        const total = cartTotal;

        checkout(buyer, itemsToBuy, total)
    }

    const checkout = async (buyer, items,total) => {
        const order = {buyer, items, total};

        addDoc (collection(db, 'orders'), order)
            .then(doc => {
                console.log('Orden reailizada. Id de compra: ', doc.id);
            })
            .then(() => clearCart())
            .then(() => goToHome())
            .catch(err => {
                console.log("algo muy malo paso", err);
            })
    }

    return (
        <CartProvider>
            <Container>
                <h1>CARRITO</h1>
                {(() => {
                    if (cartItems == '') {
                        return (
                            <Container>
                                <Row className='d-flex'>
                                    <h1 className='d-inline-flex justify-content-center'>No hay productos en el carrito</h1>
                                </Row>
                                <Row>
                                    <Button onClick = {() => goToHome()} className='btnAT mt-3 mb-0 ms-0 me-0 hover'>Ir al inicio</Button>
                                </Row>        
                            </Container>                             
                            )
                        }else {
                            return (
                                <Container>                                    
                                    <Row>
                                        {cartItems.map(product => <ItemCart key={product.id} id={product.id} title={product.title}artist={product.artist} img={product.img} precio={product.price} qty={product.qty} removeItemCart = {removeItemCart}/>)}
                                    </Row>
                                    <Row className='d-flex align-items-center'>
                                        <Col>
                                            <Button onClick = {() => clearCart()} className='btnAT mt-3 mb-0 ms-0 me-0 hover'>Vaciar Carrito</Button>
                                        </Col>
                                        <Col></Col>
                                        <Col className='d-flex justify-content-end'>
                                             <h1 className='d-inline-flex justify-content-end m-0'>Total: $ {cartTotal}</h1>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className=''>
                                        <h3>Datos</h3>
                                        <Form onSubmit={onSubmit}>
                                            <Form.Group className='' controlId='nameBuyer'>
                                                 <Form.Control className='imputForm mt-2 me-2 mb-2' type="text" placeholder="Nombre y Apellido"/>
                                            </Form.Group>
                                            <Form.Group className='' controlId='emailBuyer'>
                                                <Form.Control className='imputForm mt-2 mb-2' type="text" placeholder="E-mail"/>
                                            </Form.Group>
                                            <Form.Group className='' controlId='phoneBuyer'>
                                                <Form.Control className='imputForm mt-2 mb-2' type="text" placeholder="Celular" />
                                            </Form.Group>  
                                                
                                            <Button className='btnAT hover' type='submit'>
                                                Finalizar Compra
                                            </Button>
                                        </Form>                                            
                                    </Row>
                                </Container>
                            )
                        } 
                    }
                )()}
            </Container>          
        </CartProvider>
    )
}
 
export default Cart;