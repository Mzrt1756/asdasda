import {Item} from '../Item/Item';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './ItemList.css'

export const ItemList = ({item}) => {

  return (
    <Container>
        {            
            <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
                {item.map(item => (
                    <Col> 
                        <Item key={item.id} item={item}/>
                    </Col>
                ))}  
            </Row>

        }
    </Container>
  )
}
