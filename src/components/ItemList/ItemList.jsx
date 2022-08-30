import {useState,useEffect} from 'react';
import {getItem} from '../../catalogo';
import {Item} from '../Item/Item';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import './ItemList.css'

export const ItemList = () => {
    const [item,setItem] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        getItem
            .then(item => {
            setItem(item)
            setLoading(false)
        })
    }, [])

  return (
    <Container fluid>
        {
            loading ? 
            <Row className='rowItemSpinner'>
                <Spinner animation="border" role="status"  style={{ width: "10rem", height: "10rem"}}>
                     <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Row>
            
            :
            
            <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
                {item.map(item => (
                    <Col> 
                        <Item key={item.nombre} item={item}/>
                    </Col>
                ))}  
            </Row>

        }
    </Container>
  )
}
