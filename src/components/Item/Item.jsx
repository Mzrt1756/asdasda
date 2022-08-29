import Card from 'react-bootstrap/Card';
import {ItemCount} from '../ItemCount/ItemCount';
import './Item.css'

export const Item = ({data}) => {
    return(
        <Card className='centrarTarjeta' style={{width: "20rem", margin:"20px"}} key={data.nombre}>
        <Card.Img variant="top" src={data.img}/>
        <Card.Body className='cardBody'>
          <Card.Title>{data.nombre}</Card.Title>
          <Card.Text>$ {data.precio}</Card.Text>
          <ItemCount></ItemCount>
        </Card.Body>
      </Card>
    )
}