import {useState,useEffect} from 'react';
import {getFetch} from '../../catalogo';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import './ItemDetail.css'

export const ItemDetail = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getFetch
        .then(response => {
            setData(response.find(prod => prod.id === 1))
            setLoading(false)
        })      
    }, [])

    console.log(data)
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
                    <Col>
                        <img src={data.img} alt="" style={{height:'500px'}}/>
                    </Col>
                    <Col>
                        <h2>{data.nombre}</h2>
                        <h3><b>$ {data.precio}</b></h3>
                        <p><b>Peso: {data.peso}</b></p>

                        <p>{data.descripcion}</p>
                    </Col>
                </Row>
            </Container>

        }
        </Container>
    )
}