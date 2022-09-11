import { IconContext } from "react-icons";
import { FaShoppingCart } from 'react-icons/fa';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {
    const {obtTodosItems} = useContext(CartContext);
    console.log(obtTodosItems())



    return(
        <IconContext.Provider value={{className: "react-icons" }}>
            <div>
                
                {
                obtTodosItems()>0 &&
                <>
                    <Link to="/cart"><FaShoppingCart/></Link>
                    <Link to="/cart"><Button variant="secondary" id="contCarrito">{obtTodosItems()}</Button></Link>
                </>
                
                }
            </div>
        </IconContext.Provider>
    )
}