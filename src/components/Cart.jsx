import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { CartContext, CartProvider } from '../contexts/CartContext';
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

    return (
        <CartProvider>
            <Container>
                <h1>CARRITO</h1>
                {(() => {
                    if (cartItems == '') {
                        return (
                            <Container>
                                <h1>No hay productos en el carrito</h1>
                                <Button onClick = {() => goToHome()} className='btnAT mt-3 mb-0 ms-0 me-0'>Ir al inicio</Button>
                            </Container>                             
                            )
                        }else {
                            return (
                                <Container>
                                    <Container>
                                    {cartItems.map(product => <ItemCart key={product.id} id={product.id} title={product.title} img={product.thumbnail} precio={product.price} qty={product.qty} removeItemCart = {removeItemCart}/>)}
                                    </Container>
                                    <h1>Total: $ {cartTotal}</h1>
                                    <Button onClick = {() => clearCart()} className='btnAT mt-3 mb-0 ms-0 me-0'>Vaciar Carrito</Button>
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