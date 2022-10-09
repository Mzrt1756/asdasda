import { useState, useContext } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2'
import './ItemDetail.css'

export const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0);
    const [botonActivo,setBotonActivo] = useState(true);
    const [botonAgregarActivo,setBotonAgregarActivo] = useState(false);

    const onAdd = (contador) =>{
        console.log('Se agregó ' + contador + ' unidades del item ' + item.nombre);
        if (contador>0){
            addItem(item, contador)
            setQuantity(contador);
            console.log(quantity);         
            setBotonActivo(false);
            setBotonAgregarActivo(true);
            const itemCountDetail = document.getElementById("itemCountDetail");
            itemCountDetail.remove();
        } else {
            Swal.fire({
                title: 'Debe ingresar un número mayor a 0.',
                icon: 'warning',
                confirmButtonText : 'Confirmar',  
              })
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
                        <Container id='itemCountDetail'><ItemCount id="itemCountButton" estadoBoton={botonAgregarActivo} stock={item.stock} initial={0} onAdd={onAdd}/></Container>
                        <Container className='d-flex justify-content-center'> <Link to="/"><Button className="mt-2 p-1" variant="outline-secondary">Seguir Comprando</Button></Link></Container>
                        <Container className='d-flex justify-content-center'> <Link to="/cart"><Button className="buttonTerminar mt-2 p-1" variant="outline-secondary" disabled={botonActivo}>Terminar Compra</Button></Link></Container>                  
                    </Col>
            </Row>
        </Container>
    )
}