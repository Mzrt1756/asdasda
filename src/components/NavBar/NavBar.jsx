import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/Coffee-shop-logo.png'
import {CartWidget} from '../CartWidget/CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" className='px-5 py-1'>
      <Container fluid className="">
        <Navbar.Brand href="#home">
            <img
              alt=""
              src= {Logo}
              width="30"
              height="30"
              className="d-inline-block align-top navbarImg"
            />{' '}
            <p className='d-inline-block m-auto brandText'>Ristretto Coffee House</p> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-auto my-2"
            style={{ maxHeight: '230px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Tienda</Nav.Link>
            <Nav.Link href="#action3">Mayorista</Nav.Link>
            <NavDropdown title="Nosotros" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">¿Quiénes Somos?</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Orígenes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6">Contacto</Nav.Link>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}