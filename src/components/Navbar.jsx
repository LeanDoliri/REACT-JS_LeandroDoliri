import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavbarAT = () => {
    return (
        <div className='App'>
            <Container fluid>          
                <Row>
                    <Navbar className='d-flex flex-row justify-content-between align-items-center' bg='dark' variant='dark' sticky='top' >                
                        <Link to={'/'}><Navbar.Brand className='d-inline-flex'><strong>Al Toque</strong></Navbar.Brand></Link>
                        <Nav className='d-inline-flex flex-row justify-content-between align-items-center'>
                            <Nav.Link>Productos</Nav.Link>                        
                            <Nav.Link>+ Info</Nav.Link>
                            <CarWidget/>
                        </Nav>
                        <Nav className='d-inline-flex'>
                            <Nav.Link>Login</Nav.Link>
                        </Nav>
                    </Navbar>
                </Row>
            </Container>
        </div>
    );
}

export default NavbarAT;