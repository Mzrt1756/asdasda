import { useContext } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import './CartContainer.css'

export const CartContainer = () => {
    const {listaProductosCarrito, clear} = useContext(CartContext);

    return (
        <div>
            {
                listaProductosCarrito.length>0 ?
                <>
                    {
                        listaProductosCarrito.map(item =>(
                            <Container key={"Pro"+Math.random()}>
                                    <CartItem item={item}/>
                            </Container>
                        ))
                    }
                    <hr />
                    <Container className='containerBotonesCarrito d-flex'>
                        <Button className='m-3' variant="secondary" onClick={clear}>Vaciar Carrito</Button>
                        <Link to="/"><Button className='m-3' variant="secondary">Volver a la Tienda</Button></Link>
                        <Button className='m-3' variant="secondary">Terminar Compra</Button>
                    </Container>
                </> 
                :
                <Container className='p-5'>
                    <Row>
                        <Col className='colCarritoVacio'>
                            <p className='textoCarritoVacio p-5'><b>NO HAS AGREGADO PRODUCTOS AL CARRITO.</b></p>
                            <Link to="/"><Button variant="secondary">Volver a la Tienda</Button></Link>
                        </Col>
                    </Row>
                </Container>

            }
        </div>
    )
}