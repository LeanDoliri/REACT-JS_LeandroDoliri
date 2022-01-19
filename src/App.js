import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarYendo from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
        <NavbarYendo/>
        <Container>
          <Row>
            <Col className='d-flex flex-wrap justify-content-around'>
              <ItemListContainer titulo = 'Disco 1' stock = '5'/>
              <ItemListContainer titulo = 'Disco 2' stock = '6'/>
              <ItemListContainer titulo = 'Disco 3' stock = '4'/>
              <ItemListContainer titulo = 'Disco 4' stock = '7'/>
              <ItemListContainer titulo = 'Disco 5' stock = '3'/>
              <ItemListContainer titulo = 'Disco 6' stock = '1'/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
