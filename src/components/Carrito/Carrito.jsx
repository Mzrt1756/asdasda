import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { CartContainer } from '../CartContainer/CartContainer'
import './Carrito.css'

export const Carrito = () => {


    return(
        <Container>
            <CartContainer/>
        </Container>
    )
}