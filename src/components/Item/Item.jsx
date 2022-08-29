import Card from 'react-bootstrap/Card';
import {ItemCount} from '../ItemCount/ItemCount';
import './Item.css'

export const Item = ({data}) => {
    const mostrarDetalle = () =>{

    }
    return(
        <Card className='centrarTarjeta' style={{ margin:"20px"}} key={data.nombre}>
        <a onClick={mostrarDetalle}><Card.Img variant="top" src={data.img}/></a>
        <Card.Body className='cardBody'>
          <Card.Title>{data.nombre}</Card.Title>
          <Card.Text>$ {data.precio}</Card.Text>
          <ItemCount stock={data.stock} initial={data.initial}></ItemCount>
        </Card.Body>
      </Card>
    )
}