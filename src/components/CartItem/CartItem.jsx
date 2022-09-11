import { Button, Col, Container, Row } from "react-bootstrap"


export const CartItem = ({item}) => {
    <Container>
        <Row>
                <Col className='detailImg d-flex justify-content-center'>
                    <img src={item.img} alt="" style={{height:'100px'}}/>
                </Col>
                <Col className='detailCol py-5'>
                    <h2>{item.nombre}</h2>
                    <h3><b>$ {item.precio}</b></h3>
                    <p><b>Cantidad: {item.cantidad}</b></p>
                    <Container className='d-flex justify-content-center'><Button className="buttonTerminar mt-2 p-1" variant="outline-secondary">Eliminar Producto</Button></Container>
                </Col>
        </Row>
    </Container>
}