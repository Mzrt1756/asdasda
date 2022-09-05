import {useState,useEffect} from 'react';
import {getItem} from '../../catalogo.jsx';
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';


export const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getItem
        .then(response => {
            setItem(response.find(prod => prod.id === 2))
            setLoading(false)
        })      
    }, [])
   
    return (
        <Container>

        {
            loading ?  

            <Row className='rowItemSpinner'>
                <Spinner animation="border" role="status"  style={{ width: "10rem", height: "10rem"}}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Row>

            :

            <ItemDetail item={item}/>

        }
        </Container>
    )
}
