import {useState,useEffect} from 'react';
import {getItemId} from '../../catalogo.jsx';
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom';


export const ItemDetailContainer = () => {
    const {idItem} = useParams();
    console.log(idItem);
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getItemId(idItem)
        .then(resultado => {
            setItem(resultado)
            setLoading(false)
        })      
    }, [idItem])

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
