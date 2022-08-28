import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

export const Item = ({data}) => {
    return(
        <Card style={{ width: '18rem', marginTop: '10px' }} key={data.name}>
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
          <Card.Title>{data.nombre}</Card.Title>
          <Card.Text>
            {data.precio}
          </Card.Text>
          <Button variant="primary">Agregar a Carrito</Button>
        </Card.Body>
      </Card>
    )
}