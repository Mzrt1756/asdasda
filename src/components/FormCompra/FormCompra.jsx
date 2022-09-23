import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import { baseDeDatos } from '../../utils/firebase';
import Swal from 'sweetalert2'
import './FormCompra.css'

export const FormCompra = () => {
    const {listaProductosCarrito, obtPrecioTotal, clear} = useContext(CartContext);
    const [idOrden, setIdOrden] = useState("")

    const myTimestamp = Timestamp.fromDate(new Date());

    const ordenDeCompra = (e) =>{
        e.preventDefault();
        console.log(e)
        const orden = {
            comprador:{
                nombre: e.target[0].value,
                mail: e.target[1].value,
                telefono: e.target[2].value,
                domicilio: e.target[3].value,
            },
            itemsCarrito: listaProductosCarrito,
            precioTotal: obtPrecioTotal(),
            fecha: myTimestamp
        }
        const queryRef = collection(baseDeDatos,"ordenesRistretto")
        addDoc(queryRef, orden).then(resultado=>setIdOrden(resultado.id))
        console.log(orden)
        console.log(
            `Tu nombre es ${e.target[0].value}, email ${e.target[1].value}, tu número de teléfono es ${e.target[2].value} y domicilio ${e.target[3].value}`
        );
        Swal.fire({
            title: 'Muchas gracias por su compra.',
            icon: 'success',
            confirmButtonText : 'Confirmar',  
          })
        clear();
    }

    return (
        <Form onSubmit={ordenDeCompra}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" name="nombre" placeholder="Ingrese su Nombre y Apellido"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" name="mail" placeholder="Ingrese su E-mail"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Número de Teléfono</Form.Label>
            <Form.Control type="tel" name="telefono" placeholder="Ingrese su Número de Teléfono"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control type="text" name="domicilio" placeholder="Ingrese su Domicilio"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Container className='d-flex justify-content-center'>
                <Button type="submit" variant="secondary">Terminar Compra</Button>
            </Container>
          </Form.Group>
        </Form>
      );
}