import React from 'react';
import './App.css';
import NavbarYendo from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
        <NavbarYendo/>
        <ItemListContainer />
    </div>
  );
}

export default App;
