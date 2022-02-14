import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import Loading from './Loading';
import NavbarAT from './Navbar';

const Layout = () => {
    const [loading, setLoading] = useState(false);
    
    return (
        <CartProvider>
            <div className='App'>
                <NavbarAT/>
                <Outlet context={[loading, setLoading]}/>
                {loading ? <Loading /> : null}
            </div>
        </CartProvider>
    );
}
 
export default Layout;