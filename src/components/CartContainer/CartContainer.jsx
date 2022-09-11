import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import './CartContainer.css'

export const CartContainer = () => {
    const {listaProductosCarrito} = useContext(CartContext);

    return (
        <div>
            <p>CartContainer</p>
            {
                listaProductosCarrito.map(item =>(
                    <Container key={item.id}>
                        <Link className='links' to={`/item/${item.id}`}>
                            <CartItem item={item}/>
                        </Link>
                    </Container>
                    
                ))
            }

        </div>
    )
    // const {categoriaProd} = useParams();
    // console.log(categoriaProd)
    // const [item,setItem] = useState([])
    // const [loading,setLoading] = useState(true)

    // useEffect(()=>{
    //     getItem
    //         .then(resultado=>{
    //         if(categoriaProd !== "café" && categoriaProd !== "cafeteras" && categoriaProd !== "accesorios" && categoriaProd !== "cursos"){
    //             setItem(resultado)
    //             setLoading(false)
    //         } else{
    //             const nuevaLista = resultado.filter(item=>item.categoria === categoriaProd);
    //             console.log('nuevaLista',nuevaLista)
    //             setItem(nuevaLista)
    //             setLoading(false)
    //         }
    //     })
    // },[categoriaProd])


    // return(
    //     <Container fluid className="py-3">
    //         <Container>
    //             <h1 className='itemListTitle'>TIENDA</h1>
    //         </Container>
    //         {
    //             loading ? 

    //             <Row className='rowItemSpinner'>
    //                 <Spinner animation="border" role="status"  style={{ width: "10rem", height: "10rem"}}>
    //                     <span className="visually-hidden">Loading...</span>
    //                 </Spinner>
    //             </Row>
                
    //             :

    //             <Container>
    //                 <Row>
    //                     <Col className='colCategorias'><Link className='linksCategorias' to="/category/café">Café</Link></Col>   
    //                     <Col className='colCategorias'><Link className='linksCategorias' to="/category/cafeteras">Cafeteras</Link></Col> 
    //                     <Col className='colCategorias'><Link className='linksCategorias' to="/category/accesorios">Accesorios</Link></Col> 
    //                     <Col className='colCategorias'><Link className='linksCategorias' to="/category/cursos">Cursos</Link></Col>
    //                     <Col className='colCategorias'><Link className='linksCategorias' to="/">Ver Todos</Link></Col>
    //                     <ItemList item={item}/>
    //                 </Row>
    //             </Container>
    //         }
            
    //     </Container>
        
}