import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarRis from './components/NavBarRis/NavBarRis';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {CarouselHome} from './components/CarouselHome/CarouselHome'
import {Footer} from './components/Footer/Footer';
//import { ItemCount } from "./components/ItemCount/ItemCount"

function App() {
  const agregarACarrito = (contador) =>{
    console.log('funcion agregar ' + contador)
  }
  //<ItemCount stock={10} initial={0} onAdd={agregarACarrito}/>
  return (
    <div>
      <header>
        <NavBarRis></NavBarRis>
        <CarouselHome/>
        <ItemListContainer/>
        <ItemDetailContainer/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
