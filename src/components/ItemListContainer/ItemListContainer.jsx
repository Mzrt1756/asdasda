import { useState,useEffect } from 'react';
import { Col, Container } from "react-bootstrap"
import { getItem } from '../../catalogo.jsx';
import { ItemList } from "../ItemList/ItemList"
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import './ItemListContainer.css'

export const ItemListContainer = () => {

    const [item,setItem] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        getItem
            .then(item => {
            setItem(item)
            setLoading(false)
        })
    }, [])

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

                <Row>
                    <Col>
                        <a href="">Café</a>
                        <a href="">Cafeteras</a>
                        <a href="">Accesorios</a>
                        <a href="">Cursos</a>
                    </Col>
                    <ItemList item={item}/>
                </Row>
                
                
            }
            
        </Container>
        
    )
}