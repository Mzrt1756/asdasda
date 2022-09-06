import { IconContext } from "react-icons";
import {FaShoppingCart} from 'react-icons/fa';
import { Button } from "react-bootstrap";
import './CartWidget.css';

export const CartWidget = () => {
    return(
        <IconContext.Provider value={{className: "react-icons" }}>
            <div>
                <a href="/carrito"><FaShoppingCart/></a>
                <Button href="/carrito" variant="secondary" className="contCarrito">1</Button>
            </div>
        </IconContext.Provider>
    )
}