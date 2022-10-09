import {Container, Row, Button, Card} from "react-bootstrap";
import './Item.css'

export const Item = ({item}) => {
    return(
        <Card border="light" className='centrarTarjeta ' style={{ margin:"20px"}} key={item.nombre}>
        
        <Card.Img className='imgCard' variant="top" src={item.img}/>
        <Card.Body className='cardBody'>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>$ {item.precio}</Card.Text>
          <Container>
            <Row>
              <Button className="verMasDetalles mt-2 p-1" variant="outline-secondary" >Ver más Detalles</Button>
            </Row>
          </Container>
        </Card.Body>
        </Card>
    )
}