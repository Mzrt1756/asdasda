import { useState,useEffect } from 'react';
import { Row, Col, Container} from "react-bootstrap"
import { collection, getDocs, query, where } from "firebase/firestore";
import { baseDeDatos } from '../../utils/firebase';
import { ItemList } from "../ItemList/ItemList"
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import './ItemListContainer.css'

export const ItemListContainer = () => {
    const {categoriaProd} = useParams();
    const [item,setItem] = useState([])

    useEffect(()=>{
        const getItems = async()=>{
            try {
                let queryRef = !categoriaProd ? collection(baseDeDatos,"ristretto-porceldp") :query(collection(baseDeDatos,"ristretto-porceldp"),where("categoria","==",categoriaProd));
                const response = await getDocs(queryRef);
                const productos = response.docs.map(doc=>{
                    const newProd = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newProd;
                });
                setItem(productos)
            } catch (error) {
                console.log(error);
            }
        }
        getItems();
    },[categoriaProd])

    return(
        <Container fluid className="py-3">
            <Container>
                <h1 className='itemListTitle'>TIENDA</h1>
            </Container>
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
        </Container>
        
    )
}