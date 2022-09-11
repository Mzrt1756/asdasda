import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { CartProvider } from './context/CartContext';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {CarouselHome} from './components/CarouselHome/CarouselHome'
import {Footer} from './components/Footer/Footer';
import { Contacto } from './components/Contacto/Contacto';
import { Carrito } from './components/Carrito/Carrito';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Tienda } from './components/Tienda/Tienda';
import { Mayorista } from './components/Mayorista/Mayorista';
import { QuienesSomos } from './components/QuienesSomos/QuienesSomos';
import { Origenes } from './components/Origenes/Origenes';
import { PaginaError } from './components/PaginaError/PaginaError';

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar/>
          <CarouselHome/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}></Route>
            <Route exact path='/category' element={<ItemListContainer/>}></Route>
            <Route exact path='/category/:categoriaProd' element={<ItemListContainer/>}></Route>
            <Route exact path='/item/:idItem' element={<ItemDetailContainer/>}></Route>
            <Route exact path='/tienda' element={<Tienda/>}></Route>
            <Route exact path='/mayorista' element={<Mayorista/>}></Route>
            <Route exact path='/quienessomos' element={<QuienesSomos/>}></Route>
            <Route exact path='/origenes' element={<Origenes/>}></Route>
            <Route exact path='/contacto' element={<Contacto/>}></Route>
            <Route exact path='/cart' element={<Carrito/>}></Route>   
            <Route path='*' element={<PaginaError/>}></Route>       
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
