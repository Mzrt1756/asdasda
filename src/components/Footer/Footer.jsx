import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Coffee-shop-logo.png'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

export const Footer = () => {
    return (
        <Container  className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
            <p className='mb-0 text-muted'>© 2022 RistrettoCo S.A.</p>
            <LinkContainer to="/"><Navbar.Brand >
                <img
                alt=""
                src= {Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                <p className='d-inline-block m-auto brandText'>Ristretto Coffee House</p> 
            </Navbar.Brand></LinkContainer>
            <ListGroup className='justify-content-end border-0'>
                <ListGroup.Item className='border-0 p-0'><Link to='/' className='px-2 text-muted text-decoration-none'>Inicio</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><Link to='/' className='px-2 text-muted text-decoration-none'>Tienda</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><Link to='/mayorista' className='px-2 text-muted text-decoration-none'>Mayorista</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><Link to='/quienessomos' className='px-2 text-muted text-decoration-none'>¿Quiénes Somos?</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><Link to='/origenes' className='px-2 text-muted text-decoration-none'>Orígenes</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><Link to='/contacto' className='px-2 text-muted text-decoration-none'>Contacto</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><Link to='/cart' className='px-2 text-muted text-decoration-none'>Carrito</Link></ListGroup.Item>
            </ListGroup>
        </Container>
    )
  }