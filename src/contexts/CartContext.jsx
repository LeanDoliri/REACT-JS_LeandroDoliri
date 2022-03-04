import React, { createContext } from 'react';
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalStorage } from '../components/customHooks/useLocalStorage';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useLocalStorage('carrito', [])
   
    const setCart = () => {       
        return cartItems.length;
    }

    const addCartItem = (product, itemQty) => {       
        const newCartItem = cartItems.find(item => item.id === product.id);
        
            if (newCartItem === undefined){
                product.qty = itemQty;
                setCartItems([...cartItems, product]); 
            }else{
                newCartItem.qty = newCartItem.qty + itemQty;
            }

        toast(`"${product.title}" agregado al carrito`,{
            className: 'ATtoast',
            transition: Slide,
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: 0,
        })
    }

    const removeItemCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
        toast(`Producto Eliminado`,{
            className: 'ATtoast',
            transition: Slide,
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: 0,
        })       
    }

    const clearCart = () => {
        setCartItems([]);
        toast(`Carrito Vacío`,{
            className: 'ATtoast',
            transition: Slide,
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: 0,
        })
    }    
    
    return (
        <CartContext.Provider value={{cartItems, setCartItems, setCart, addCartItem, clearCart, removeItemCart}}>
            {children}
        </CartContext.Provider>
    )
}