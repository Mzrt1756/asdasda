import { Button, Col, Row, Image } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './CartItem.css'

export const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext);
    return(
            <Row>
                <Col className='colCartItem p-0 col-3 text-center justify-content-center'><Image className="imgCarrito" src={item.img} alt="fotoDescripcionObjeto"/></Col>
                <Col className='colCartItem p-0 col-2 text-center'><p className="textoNombre m-auto"><strong>{item.nombre}</strong></p></Col>
                <Col className='colCartItem p-0 col-2 text-center'><p className="fs-6 m-auto">${item.precio}</p></Col>
                <Col className='colCartItem p-0 col-2 text-center justify-content-center'>
                    {
                        item.qty>item.stock ?
                        <Row>
                            <Col>
                                <p className="fs-6 m-auto">{item.stock}</p>
                            </Col>
                            <div className="w-100"></div>
                            <Col>
                                <p className="textoStock m-auto">Stock: {item.stock}</p>
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col>
                                <p className="fs-6 m-auto">{item.qty}</p>
                            </Col>
                            <div className="w-100"></div>
                            <Col>
                                <p className="textoStock m-auto">Stock: {item.stock}</p>
                            </Col>
                        </Row>
                    }
                </Col>
                <Col className='colCartItem p-0 col-1 text-center'>
                    <Button className="buttonEliminar m-auto px-2 py-0" variant="danger" onClick={()=>removeItem(item.id)}>x</Button>
                </Col>
                <Col className='colCartItem p-0 col-2 text-center'><p className="fs-6 m-auto">${item.precioTotal}</p></Col>
            </Row>
    )
}