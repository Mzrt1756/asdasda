import { IconContext } from "react-icons";
import {FaShoppingCart} from 'react-icons/fa';
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {

    const contador = 5;
    const [cambioContador, setCambioContador] = useState(contador)
    const [estadoContadorCarrito,setEstadoContadorCarrito] = useState(true);
    const buttonContadorCarrito = document.getElementById("contCarrito");
    
    useEffect(()=> {
        if(buttonContadorCarrito && cambioContador===0){
            setEstadoContadorCarrito(true); 
            buttonContadorCarrito.remove();
        } else {
            setEstadoContadorCarrito(false);
        }     
    }, [buttonContadorCarrito, cambioContador])

    return(
        <IconContext.Provider value={{className: "react-icons" }}>
            <div>
                <Link to="/cart"><FaShoppingCart/></Link>
                <Link to="/cart"><Button estadoContadorCarrito={estadoContadorCarrito} variant="secondary" id="contCarrito">{contador}</Button></Link>
            </div>
        </IconContext.Provider>
    )
}