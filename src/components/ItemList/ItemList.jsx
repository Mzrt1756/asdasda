import {useState,useEffect} from 'react';
import {getFetch} from '../../catalogo';
import {Item} from '../Item/Item';
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
            
            <Spinner animation="border" role="loading">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            
            :
            
            <Container fluid>
                <Row className='rowItemList'>
                        {data.map(data => (
                                <Item key={data.nombre} data={data}/>
                        ))}  
                </Row>
            </Container>
        }
    </Container>
  )
}
