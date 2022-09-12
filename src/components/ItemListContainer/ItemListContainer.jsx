import { useState,useEffect } from 'react';
import { Row, Col, Container, Spinner } from "react-bootstrap"
import { getItem } from '../../catalogo.jsx';
import { ItemList } from "../ItemList/ItemList"
import { Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import './ItemListContainer.css'

export const ItemListContainer = () => {
    const {categoriaProd} = useParams();
    console.log(categoriaProd)
    const [item,setItem] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        getItem.then(resultado=>{
            if(!categoriaProd){
                setItem(resultado);
                setLoading(false);
            } else{
                const nuevaLista = resultado.filter(item=>item.categoria === categoriaProd);
                setItem(nuevaLista);
                setLoading(false);
            }
        })
    },[categoriaProd])


    return(
        <Container fluid className="py-3">
            <Container>
                <h1 className='itemListTitle'>TIENDA</h1>
            </Container>
            {
                loading ? 

                <Row className='rowItemSpinner'>
                    <Spinner animation="border" role="status"  style={{ width: "10rem", height: "10rem"}}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
                
                :

                <Container>
                    <Row>
                        <Col className='colCategorias'><Link className='linksCategorias' to="/category/café">Café</Link></Col>   
                        <Col className='colCategorias'><Link className='linksCategorias' to="/category/cafeteras">Cafeteras</Link></Col> 
                        <Col className='colCategorias'><Link className='linksCategorias' to="/category/accesorios">Accesorios</Link></Col> 
                        <Col className='colCategorias'><Link className='linksCategorias' to="/category/cursos">Cursos</Link></Col>
                        <Col className='colCategorias'><Link className='linksCategorias' to="/">Ver Todos</Link></Col>
                        <ItemList item={item}/>
                    </Row>
                </Container>
            }
            
        </Container>
        
    )
}