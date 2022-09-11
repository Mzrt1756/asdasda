import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [listaProductosCarrito, setListaProductosCarrito] = useState([]);
    
    const isInCart = (id) =>{
        const itemExiste = listaProductosCarrito.some((producto) =>producto.id===id);
        return itemExiste;
    }

    const addItem = (item, quantity) =>{
        const listaNueva = [...listaProductosCarrito];
        console.log(isInCart(item.id))
        if(isInCart(item.id)){
            const itemIndex = (listaProductosCarrito.findIndex(producto=>producto.id===item.id));
            console.log(itemIndex)
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
        const totalItems = listaProductosCarrito.reduce((acc,item)=>acc + item.qty,0);
        return totalItems;
    }

    return(
        <CartContext.Provider value={{listaProductosCarrito, setListaProductosCarrito, addItem, removeItem, clear, isInCart, obtTodosItems}}>
            {children}
        </CartContext.Provider>
    )
}
