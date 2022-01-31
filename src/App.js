import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import NoPage from './components/NoPage';
import Category from './components/Category';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
 
  return (
    <BrowserRouter>
        <Routes >
            <Route path='/' element= {<Layout />}>
              <Route index element= {<Home />} />
              <Route path="/category/:id" element={<Category/>} />
              <Route path='/product/:id' element={<ItemDetailContainer/>} />
              <Route path='*' element={<NoPage/>} />
            </Route>            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
