import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';
import NavbarAT from './Navbar';

const Layout = () => {
    const [loading, setLoading] = useState(false);

    return (  
        <div className='App'>
            <NavbarAT />
            <Outlet context={[loading, setLoading]}/>
            {loading ? <Loading /> : null}
        </div>
    );
}
 
export default Layout;