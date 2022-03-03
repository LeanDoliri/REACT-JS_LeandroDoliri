import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "../../contexts/CartContext";
import Loading from "../elements/Loading";
import NavbarAT from "../elements/Navbar";

const Layout = () => {
  const [loading, setLoading] = useState(false);

  return (
    <CartProvider>
      <ToastContainer />
      <div className="App">
        <NavbarAT />
        <Outlet context={[loading, setLoading]} />
        {loading ? <Loading /> : null}
      </div>
    </CartProvider>
  );
};

export default Layout;
