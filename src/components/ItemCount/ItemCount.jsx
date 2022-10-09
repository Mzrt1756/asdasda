import { useState } from "react";
import {Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.css'

export const ItemCount = ({estadoBoton, stock, initial, onAdd}) =>{

    const [contador, setContador] = useState(initial);

    const incrementarProducto = () =>{
        if(contador===stock){
            setContador(contador)
        }else{
            setContador(contador+1)
        }
    }
    const reducirProducto = () =>{
        if (contador<=0){
            setContador(0)
        }else{
            setContador(contador-1)
        }
    }
    
    return(
        <Container>
            <Row className="rowContador align-items-center">
                <Button className="col colButton d-flex align-items-center justify-content-center" variant="outline-secondary" onClick={reducirProducto} disabled={estadoBoton}>-</Button>
                <Col className="colContador">{contador}</Col>
                <Button className="col colButton d-flex align-items-center justify-content-center" variant="outline-secondary" onClick={incrementarProducto} disabled={estadoBoton}>+</Button>
            </Row>           
            <Row>
                <Button className="agregarCarritoContador mt-2 p-1" onClick={()=>(onAdd(contador))} variant="outline-secondary" disabled={estadoBoton}>Agregar al Carrito</Button>
            </Row>
            
        </Container>
    )
}