import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { CartContext, CartProvider } from '../contexts/CartContext';
import ItemCart from './Item Cart';

const Cart = () => {
    const {cartItems, clearCart, removeItemCart} = useContext (CartContext);

    return (
        <CartProvider>
            <Container>
                <h1>CARRITO</h1>
                <Container>
                    {cartItems.map(product => <ItemCart key={product.id} id={product.id} title={product.title} img={product.thumbnail} precio={product.price} removeItemCart = {removeItemCart}/>)}
                </Container>
                <Button onClick = {() => clearCart()} className='btnAT mt-3 mb-0 ms-0 me-0'>Vaciar Carrito</Button> 
            </Container>           
        </CartProvider>
    )
}
 
export default Cart;