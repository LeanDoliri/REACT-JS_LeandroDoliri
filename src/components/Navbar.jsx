import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Button, Col, Dropdown, Form, FormControl} from 'react-bootstrap';

const NavbarAT = () => {
    
    const onSerchChange = (event) =>{        
        let query = event.target.value; 
        if (query.lenght > 6){
            
        }
    }

    return (
        <div className='App navSticky'>
            <Container fluid>          
                <Row>                    
                    <Navbar className='d-flex flex-row justify-content-between align-items-between navBar'>                
                        <Col>
                            <Link to={'/'}>
                            <div className='alToque d-inline-flex justify-content-center align-items-center pt-2'>
                                <h1 className='m-0'>AL TOQUE</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-speaker pb-2 m-2" viewBox="0 0 16 16">
                                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                    <path d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                </svg>
                            </div>
                            </Link>
                        </Col>
                        <Col xs={7}>
                            <Nav className='d-flex justify-content-between align-items-center mt-1'>
                                <Form className="d-flex m-2">
                                    <FormControl
                                    type="search"
                                    placeholder="Buscar"
                                    className="me-2 borderW"
                                    aria-label="Search"
                                    onChange={onSerchChange}
                                    />
                                    <Button className='navBarLinks navBar borderW'>Buscar</Button>
                                </Form>

                                <div className='d-flex align-items-center'>                                
                                    <Dropdown>
                                        <Dropdown.Toggle className='navBar navBarLinks borderW' id="dropdown-basic">
                                        Categorias
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='ddB'>
                                            <Dropdown.Item className='ddLinks' as={Link} to={`/category/MLA1168`}>
                                                Música, Películas y Series
                                            </Dropdown.Item>
                                            <Dropdown.Item className='ddLinks' as={Link} to={`/category/MLA3025`}>
                                                Libros, Revistas y Comics
                                            </Dropdown.Item>                                           
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <CarWidget/>
                                </div>
                            </Nav>
                        </Col>
                        <Col>
                            <Nav className='d-flex justify-content-end'>
                                <Nav.Link className='navBarLinks'>Login</Nav.Link>
                            </Nav>
                        </Col>
                    </Navbar>
                </Row>
            </Container>
        </div>
    );
}

export default NavbarAT;