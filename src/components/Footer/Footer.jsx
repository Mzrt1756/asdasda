import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Coffee-shop-logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

export const Footer = () => {
    return (
        <Container  className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
            <p className='mb-0 text-muted'>© 2022 RistrettoCo S.A.</p>
            <Navbar.Brand href="/">
                <img
                alt=""
                src= {Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                <p className='d-inline-block m-auto brandText'>Ristretto Coffee House</p> 
            </Navbar.Brand>
            <ListGroup className='justify-content-end border-0'>
                <ListGroup.Item className='border-0 p-0'><a href='/' className='px-2 text-muted text-decoration-none'>Inicio</a></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><a href='/' className='px-2 text-muted text-decoration-none'>Tienda</a></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><a href='/mayorista' className='px-2 text-muted text-decoration-none'>Mayorista</a></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><a href='/quienessomos' className='px-2 text-muted text-decoration-none'>¿Quiénes Somos?</a></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><a href='/origenes' className='px-2 text-muted text-decoration-none'>Orígenes</a></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><a href='/contacto' className='px-2 text-muted text-decoration-none'>Contacto</a></ListGroup.Item>
                <ListGroup.Item className='border-0 p-0'><a href='/carrito' className='px-2 text-muted text-decoration-none'>Carrito</a></ListGroup.Item>
            </ListGroup>
        </Container>
    )
  }