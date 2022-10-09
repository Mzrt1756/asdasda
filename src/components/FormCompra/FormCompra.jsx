import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button, Container, Form } from "react-bootstrap"
import { doc, addDoc, collection, Timestamp, updateDoc } from "firebase/firestore"
import { baseDeDatos } from '../../utils/firebase';
import Swal from 'sweetalert2'
import './FormCompra.css'

export const FormCompra = () => {
    const {listaProductosCarrito, obtPrecioTotal, clear} = useContext(CartContext);
    const [idOrden, setIdOrden] = useState("")
    const [conditionForm, setConditionForm] = useState(true);

    const myTimestamp = Timestamp.fromDate(new Date());
    const ordenDeCompra = (e) =>{
        e.preventDefault();
        listaProductosCarrito.forEach((prod) => {
            const actualizarStock = doc(baseDeDatos, "ristretto-porceldp", prod.id);
            updateDoc(actualizarStock, {stock: prod.stock-prod.qty})
          }
        )
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
        console.log(orden, idOrden)
        Swal.fire({
            title: 'Muchas gracias por su compra.',
            icon: 'success',
            confirmButtonText : 'Confirmar',  
          })
        clear();
    }

    const formCompletado = (e) =>{
      e.preventDefault();
      const inputs = document.querySelectorAll("input")
      const nombreForm = inputs[0].value.length > 0 && inputs[0].validity.typeMismatch === false;
      const mailForm = inputs[1].value.length > 0 && inputs[1].validity.typeMismatch === false;
      const numeroForm = inputs[2].value.length > 0 && inputs[2].validity.typeMismatch === false;
      const domicilioForm = inputs[2].value.length > 0 && inputs[2].validity.typeMismatch === false;
      if (nombreForm && mailForm && numeroForm && domicilioForm === true){
        setConditionForm(false)
      } else {
        setConditionForm(true)
      }
      console.log(conditionForm)
    }

    return (
      <div>
        <Container>
          <h3 className='text-center'>Formulario de Compra</h3>
        </Container>
        <Form onSubmit={ordenDeCompra} onChange={formCompletado}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" name="nombre" placeholder="Ingrese su Nombre y Apellido"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" name="mail" placeholder="Ingrese su E-mail" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Número de Teléfono</Form.Label>
            <Form.Control type="number" name="telefono" placeholder="Ingrese su Número de Teléfono" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control type="text" name="domicilio" placeholder="Ingrese su Domicilio" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Container className='d-flex justify-content-center'>
                <Button type="submit" variant="secondary" disabled={conditionForm} >Terminar Compra</Button>
            </Container>
          </Form.Group>
        </Form>
      </div>
      );
}