import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarRis from './components/NavBarRis/NavBarRis';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {CarouselHome} from './components/CarouselHome/CarouselHome'
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
        
      </header>
    </div>
  );
}

export default App;
