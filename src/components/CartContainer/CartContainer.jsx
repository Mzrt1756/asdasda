import { useContext } from 'react'
import { Button, Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { FormCompra } from '../FormCompra/FormCompra'
import './CartContainer.css'

export const CartContainer = () => {
    const {listaProductosCarrito, obtPrecioTotal, clear} = useContext(CartContext);
    return (
        <div>
            {
                listaProductosCarrito.length>0 ?
                <>
                    <Container >
                        <h2 className='pt-3 text-center'>Carrito</h2>
                        <hr className='m-1' />
                        <Row className='justify-content-between'>
                            <Col className='col-3 p-0 text-center'></Col>
                            <Col className='col-2 p-0 text-center'><h6>Item</h6></Col>
                            <Col className='col-2 p-0 text-center'><h6>Precio</h6></Col>
                            <Col className='col-2 p-0 text-center'><h6>Cant.</h6></Col>
                            <Col className='col-1 p-0 text-center'></Col>
                            <Col className='col-2 p-0 text-center'><h6>Total</h6></Col>
                        </Row> 
                        <hr className='m-0' />
                    </Container>
                    {
                        listaProductosCarrito.map(item =>(
                            <Container key={"Pro"+Math.random()}>
                                    <CartItem item={item}/>
                            </Container>
                        ))
                    }
                    <Container><hr /></Container> 
                        <Container className='d-flex justify-content-center'>
                            <h4>Precio Total: ${obtPrecioTotal()}</h4>
                        </Container>
                    <hr /> 
                    <Container>
                            <Container>
                                <FormCompra/>
                            </Container>
                            <Container className='containerBotonesCarrito d-flex'>
                                <Button className='m-3' variant="secondary" onClick={clear}>Vaciar Carrito</Button>
                                <Link to="/"><Button className='m-3' variant="secondary">Volver a la Tienda</Button></Link>
                            </Container>
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