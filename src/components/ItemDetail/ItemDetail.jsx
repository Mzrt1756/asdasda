import {useState} from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './ItemDetail.css'

export const ItemDetail = ({item}) => {
    const [numeroItems, setNumeroItems] = useState(0);
    // const [productoAgregado,setProductoAgregado] = useState([]);
    const [botonActivo,setBotonActivo] = useState(true);
    const [botonAgregarActivo,setBotonAgregarActivo] = useState(false);

    const agregarProductoCarrito = (contador) =>{
        contador += numeroItems
        console.log('Se agregó ' + contador + ' unidades del item ' + item.id);
        setNumeroItems(contador);
        if (contador>0){
            setBotonActivo(false);
            setBotonAgregarActivo(true);
            const itemCountDetail = document.getElementById("itemCountDetail");
            itemCountDetail.remove();

        }   
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
                        <Container id='itemCountDetail'><ItemCount id="itemCountButton" estadoBoton={botonAgregarActivo} stock={item.stock} initial={item.initial} onAdd={agregarProductoCarrito}/></Container>
                        <Container className='d-flex justify-content-center'><Button href="/cart" className="buttonTerminar mt-2 p-1" variant="outline-secondary" disabled={botonActivo}>Terminar Compra</Button></Container>
                    </Col>
            </Row>
        </Container>
    )
}