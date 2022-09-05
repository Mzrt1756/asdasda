import Card from 'react-bootstrap/Card';
import {Container} from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import './Item.css'

export const Item = ({item}) => {
    const verMasDetalle = () =>{
      console.log(item.id)
    }
    return(
        <Card className='centrarTarjeta' style={{ margin:"20px"}} key={item.nombre}>
        <a href="" onClick={verMasDetalle}><Card.Img variant="top" src={item.img}/></a>
        <Card.Body className='cardBody'>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>$ {item.precio}</Card.Text>
          <Container>
            <Row>
              <Button className="verMasDetalles mt-2 p-1" variant="outline-secondary" onClick={()=>(verMasDetalle(item.id))}>Ver más Detalles</Button>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    )
}