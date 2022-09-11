import { Button, Col, Container, Row } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './CartItem.css'
import { Link } from "react-router-dom"


export const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext);
    return(
        <Container>
                    <Row className='rowItemCarrito p-3 d-flex'>
                        <Col><Link className='links' to={`/item/${item.id}`}><img className="imgCarrito" src={item.img} alt=""/></Link></Col>
                        <Col><h4>{item.nombre}</h4></Col>
                        <Col><p><b>Cantidad: {item.cantidad}</b></p></Col>
                        <Col><p><b>Precio Total: {item.precioTotal}</b></p></Col>
                        <Col><Button className="buttonEliminar mt-2 p-1" variant="outline-secondary" onClick={()=>removeItem(item.id)}>Eliminar Producto</Button></Col>
                    </Row>
        </Container>
    )
}