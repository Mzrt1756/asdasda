import {Item} from '../Item/Item';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import './ItemList.css'

export const ItemList = ({item}) => {

  return (
    <Container>
        {            
            <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 m-auto">
                {item.map(item => (
                    <Col key={"Unique"+item.id} className="m-0"> 
                        <Link className='links' to={`/item/${item.id}`}>
                            <Item item={item}/>
                        </Link>
                    </Col>
                ))}  
            </Row>

        }
    </Container>
  )
}
