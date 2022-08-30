import { useState } from "react";
import {Container} from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) =>{
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

    onAdd = (contador) =>{
        console.log(contador)
    }

    return(
        <Container>
            <Row className="rowContador align-items-center">
                <Button className="col colButton d-flex align-items-center justify-content-center" onClick={reducirProducto}>-</Button>
                <Col className="colContador">{contador}</Col>
                <Button className="col colButton d-flex align-items-center justify-content-center" onClick={incrementarProducto}>+</Button>
            </Row>           
            <Row>
            <Button className="agregarCarritoContador mt-2 p-1" onClick={()=>(onAdd(contador))} variant="outline-secondary">Agregar al Carrito</Button>
            </Row>
            
        </Container>
    )
}