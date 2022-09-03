import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarRis from './components/NavBarRis/NavBarRis';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {CarouselHome} from './components/CarouselHome/CarouselHome'

function App() {
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
