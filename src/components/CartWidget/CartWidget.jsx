import { IconContext } from "react-icons";
import {FaShoppingCart} from 'react-icons/fa';
import './CartWidget.css';

export const CartWidget = () => {
    return(
        <IconContext.Provider value={{className: "react-icons" }}>
            <div>
                <a href="#home"><FaShoppingCart/></a>
            </div>
        </IconContext.Provider>
    )
}