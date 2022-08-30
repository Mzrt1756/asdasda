import Card from 'react-bootstrap/Card';
import {ItemCount} from '../ItemCount/ItemCount';
import './Item.css'

export const Item = ({item}) => {
    const mostrarDetalle = () =>{
      
    }
    return(
        <Card className='centrarTarjeta' style={{ margin:"20px"}} key={item.nombre}>
        <a onClick={mostrarDetalle}><Card.Img variant="top" src={item.img}/></a>
        <Card.Body className='cardBody'>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>$ {item.precio}</Card.Text>
          <ItemCount stock={item.stock} initial={item.initial}/>
        </Card.Body>
      </Card>
    )
}