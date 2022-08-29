import {useState,useEffect} from 'react';
import {getFetch} from '../../catalogo';
import {Item} from '../Item/Item';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import './ItemList.css'

export const ItemList = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        getFetch.then(data => {
            setData(data)
            setLoading(false)
        })
    }, [])
  return (
    <Container fluid>
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
            
            <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
                {data.map(data => (
                    <Col> 
                        <Item key={data.nombre} data={data}/>
                    </Col>
                ))}  
            </Row>

        }
    </Container>
  )
}
