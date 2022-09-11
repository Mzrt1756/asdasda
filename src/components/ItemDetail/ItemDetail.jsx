import {useState} from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './ItemDetail.css'

export const ItemDetail = ({item}) => {
    const {agregarProducto} = useContext(CartContext)
    const [botonActivo,setBotonActivo] = useState(true);
    const [botonAgregarActivo,setBotonAgregarActivo] = useState(false);

    const onAdd = (contador) =>{
        const productoCarrito = {...item, cantidad:contador}
        console.log('Se agregó ' + contador + ' unidades del item ' + item.nombre);
        if (contador>0){
            agregarProducto(productoCarrito)
            setBotonActivo(false);
            setBotonAgregarActivo(true);
            const itemCountDetail = document.getElementById("itemCountDetail");
            itemCountDetail.remove();
        }   
    }

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
                        <Container id='itemCountDetail'><ItemCount id="itemCountButton" estadoBoton={botonAgregarActivo} stock={item.stock} initial={item.initial} onAdd={onAdd}/></Container>
                        <Container className='d-flex justify-content-center'> <Link to="/cart"><Button className="buttonTerminar mt-2 p-1" variant="outline-secondary" disabled={botonActivo}>Terminar Compra</Button></Link></Container>
                    </Col>
            </Row>
        </Container>
    )
}