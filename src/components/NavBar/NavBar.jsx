import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/Coffee-shop-logo.png'
import {CartWidget} from '../CartWidget/CartWidget'
import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" className='px-5 py-1'>
      <Container fluid className="">
        <LinkContainer to="/"><Navbar.Brand>
            <img
              alt=""
              src= {Logo}
              width="30"
              height="30"
              className="d-inline-block align-top navbarImg"
            />{' '}
            <p className='d-inline-block m-auto brandText'>Ristretto Coffee House</p> 
        </Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-auto my-2"
            style={{ maxHeight: '230px' }}
            navbarScroll
          >
            <LinkContainer to="/"><Nav.Link >Inicio</Nav.Link></LinkContainer>
            <LinkContainer to="/"><Nav.Link >Tienda</Nav.Link></LinkContainer>
            <LinkContainer to="/mayorista"><Nav.Link >Mayorista</Nav.Link></LinkContainer>
            <NavDropdown title="Nosotros" id="navbarScrollingDropdown">
              <LinkContainer to="/quienessomos"><NavDropdown.Item >¿Quiénes Somos?</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/origenes"><NavDropdown.Item >Orígenes</NavDropdown.Item></LinkContainer>
            </NavDropdown>
            <LinkContainer to="/contacto"><Nav.Link >Contacto</Nav.Link></LinkContainer>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}