import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layouts/Layout';
import NoPage from './pages/NoPage';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart';
import AddProduct from './pages/AddProduct';
import { ProductProvider } from './contexts/ProductContext';


const App = () => {
 
  return (
    <BrowserRouter>
        <Routes >
            <Route path='/' element= {<Layout />}>
              <Route index element= {<ProductProvider><Home /></ProductProvider>} />
              <Route path='/product/:id' element={<ProductProvider><ItemDetailContainer/></ProductProvider>} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/addProduct' element={<AddProduct />} />
              <Route path='*' element={<NoPage/>} />
            </Route>            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
