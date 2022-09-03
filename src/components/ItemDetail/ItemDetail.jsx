import {useState,useEffect} from 'react';
import {getItem} from '../../catalogo.jsx';
import { ItemCount } from '../ItemCount/ItemCount';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import './ItemDetail.css'

export const ItemDetail = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getItem
        .then(response => {
            setItem(response.find(prod => prod.id === 2))
            setLoading(false)
        })      
    }, [])

    console.log(item)
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

            <Container>
                <Row>
                    <Col className='detailImg d-flex justify-content-center'>
                        <img src={item.img} alt="" style={{height:'500px'}}/>
                    </Col>
                    <Col className='detailCol py-5'>
                        <h2>{item.nombre}</h2>
                        <h3><b>$ {item.precio}</b></h3>
                        <p><b>Peso: {item.peso}</b></p>

                        <p>{item.descripcion}</p>
                        <Container className='itemCountDetail'><ItemCount stock={item.stock} initial={item.initial}/></Container>
                    </Col>
                </Row>
            </Container>

        }
        </Container>
    )
}