import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [listaProductosCarrito, setListaProductosCarrito] = useState([]);

    const estaEnCarrito = (id) =>{
        const idIndex = listaProductosCarrito.findIndex(producto => producto.id === id);
        if (idIndex>=0){
            return {existe: true, index:idIndex}
        } else{
            return {existe:false, index:undefined}
        }
    }

    const agregarProducto = (producto) =>{
        const listaNueva = [...listaProductosCarrito, producto];
        listaNueva.push(producto);
        setListaProductosCarrito(listaNueva);
        const prodEnCarrito = estaEnCarrito(producto.id);




    }



















    return(
        <CartContext.Provider value={{listaProductosCarrito, agregarProducto}}>
            {children}
        </CartContext.Provider>
    )
}
