import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {CarouselHome} from './components/CarouselHome/CarouselHome'
import {Footer} from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
          <nav>
            <NavBar/>
          </nav>
          <section>
            <CarouselHome/>
          </section>
          <section>
            <ItemListContainer/>
            <ItemDetailContainer/>
          </section>
          <footer>
            <Footer/>
          </footer>

    </BrowserRouter>
  );
}

export default App;
