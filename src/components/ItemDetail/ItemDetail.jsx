import {useState} from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './ItemDetail.css'

export const ItemDetail = ({item}) => {
    const [numeroItems, setNumeroItems] = useState(0);

    const agregarProductoCarrito = (cantidadItem) =>{
        console.log('Se agregó ' + cantidadItem + ' unidades del item ');
        setNumeroItems(cantidadItem);
    }

    console.log(numeroItems);

    return (
        <Container>
            <Row>
                    <Col className='detailImg d-flex justify-content-center'>
                        <img src={item.img} alt="" style={{height:'500px'}}/>
                    </Col>
                    <Col className='detailCol py-5'>
                        <h2>{item.nombre}</h2>
                        <h3><b>$ {item.precio}</b></h3>
                        <p><b>Peso: {item.peso}</b></p>

                        <p>{item.descripcion}</p>
                        <Container className='itemCountDetail'><ItemCount stock={item.stock} initial={item.initial} onAdd={agregarProductoCarrito}/></Container>
                    </Col>
            </Row>
        </Container>
    )
}