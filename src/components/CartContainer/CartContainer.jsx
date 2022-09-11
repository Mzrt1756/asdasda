import { useContext } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import './CartContainer.css'

export const CartContainer = () => {
    const {listaProductosCarrito, clear} = useContext(CartContext);

    return (
        <div>
            {
                listaProductosCarrito.length>0 ?
                <>
                    {
                        listaProductosCarrito.map(item =>(
                            <Container key={"Pro"+Math.random()}>
                                    <CartItem item={item}/>
                            </Container>
                        ))
                    }
                    <hr />
                    <Container className='containerBotonesCarrito d-flex'>
                        <Button className='m-3' variant="secondary" onClick={clear}>Vaciar Carrito</Button>
                        <Link to="/"><Button className='m-3' variant="secondary">Volver a la Tienda</Button></Link>
                        <Button className='m-3' variant="secondary">Terminar Compra</Button>
                    </Container>
                </> 
                :
                <Container className='p-5'>
                    <Row>
                        <Col className='colCarritoVacio'>
                            <p className='textoCarritoVacio p-5'><b>NO HAS AGREGADO PRODUCTOS AL CARRITO.</b></p>
                            <Link to="/"><Button variant="secondary">Volver a la Tienda</Button></Link>
                        </Col>
                    </Row>
                </Container>

            }
        </div>
    )
}
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
        