import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState ([]);

    const setCart = () => {
        return cartItems.length;
    }

    const addCartItem = (product, itemQty) => {        
        product.qty = itemQty;
        setCartItems ([...cartItems, product]);
    }

    const removeItemCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    }

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{cartItems, setCartItems, setCart, addCartItem, clearCart, removeItemCart}}>
            {children}
        </CartContext.Provider>
    )
        
}