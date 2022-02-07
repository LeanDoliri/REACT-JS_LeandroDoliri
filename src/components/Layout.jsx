import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import { getCategories } from '../services/Products';
import Loading from './Loading';
import NavbarAT from './Navbar';

const Layout = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        let mounted = true
        getCategories("MLA").then(results => {
          if(mounted) {
              setCategories(results)
          }
        })
        return () => mounted = false;
      }, [])

    return (
        <CartProvider>
            <div className='App'>
                <NavbarAT categories={categories}/>
                <Outlet context={[loading, setLoading]}/>
                {loading ? <Loading /> : null}
            </div>
        </CartProvider>
    );
}
 
export default Layout;