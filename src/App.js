import React, { useState, useEffect } from 'react';
import './App.css';
import NavbarYendo from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { getProductFromCategory } from './services/Products';
import Loading from './components/Loading';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setTimeout(() => {
      getProductFromCategory('MLA1168').then(items => {
        if (mounted){
          console.log(items.results)
          setProducts(items.results);
        }
      });
      return () => mounted = false;
    }, 2000);
    },[])
    

  return (
    <div className="App">
        <NavbarYendo/>
        <ItemListContainer products={products}/>
        {loading ? <Loading /> : null}
    </div>
  );
}

export default App;
