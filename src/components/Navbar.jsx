import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const NavbarYendo = () => {
    return (
      <div className="App">
        <Container fluid>          
            <Row>
                <Navbar className='d-flex flex-row justify-content-between' bg="dark" variant="dark" sticky="top" >                
                    <Navbar.Brand className='d-inline-flex' href="#home"><strong>YENDO</strong></Navbar.Brand>
                    <Nav className="d-inline-flex flex-row">
                        <Nav.Link href="">Productos</Nav.Link>
                        <Nav.Link href="">Carrito</Nav.Link>
                        <Nav.Link href="">+ Info</Nav.Link>
                    </Nav>
                    <Nav className="d-inline-flex">
                        <Nav.Link href="">Login</Nav.Link>
                    </Nav>
                </Navbar>                      
            </Row>
            </Container>
      </div>
    );
  }

export default NavbarYendo;