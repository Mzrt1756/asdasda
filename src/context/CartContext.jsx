import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [listaProductosCarrito, setListaProductosCarrito] = useState([]);

    const isInCart = (id) =>{
        const idIndex = listaProductosCarrito.findIndex(producto => producto.id === id);
        if (idIndex>=0){
            return {existe: true, index:idIndex}
        } else{
            return {existe:false, index:undefined}
        }
    }

    const addItem = (item, quantity) =>{
        const listaNueva = [...listaProductosCarrito];
        if(isInCart(item.id)){
            const itemIndex = listaProductosCarrito.findIndex(producto=>producto.id===item.id);
            listaNueva[itemIndex].qty = listaNueva[itemIndex].qty + quantity;
            listaNueva[itemIndex].precioTotal = listaNueva[itemIndex].qty * listaNueva[itemIndex].precio;
            setListaProductosCarrito(listaNueva)
        } else{
            const productoEnCarrito={...item, qty:quantity, precioTotal: quantity*item.precio}
            const listaNueva = [...listaProductosCarrito];
            listaNueva.push(productoEnCarrito);
            setListaProductosCarrito(listaNueva);
        }
    }

    const removeItem = (itemId) => {
          const arrayCarrito = [...listaProductosCarrito];
          const nuevoArrayCarrito = arrayCarrito.filter(e=>e.id !== itemId);
          setListaProductosCarrito(nuevoArrayCarrito);
    }

    const clear = () =>{
        setListaProductosCarrito([]);
    }
  
    const obtTodosItems = ()=>{
        const totalItems = listaProductosCarrito.reduce((acc,item)=>acc + item.quantity,0);
        return totalItems;
    }

    return(
        <CartContext.Provider value={{listaProductosCarrito, addItem, removeItem, clear, isInCart, obtTodosItems}}>
            {children}
        </CartContext.Provider>
    )
}
