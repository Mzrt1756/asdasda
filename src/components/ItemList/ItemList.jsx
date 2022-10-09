import { Item } from '../Item/Item';
import { Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemList.css'

export const ItemList = ({item}) => {

  return (
    <Container>
        {            
            <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 m-auto">
                {item.map(item => (
                    <Col key={"Unique"+item.id} className="m-0"> 
                        {
                            item.stock === 0 ? 
                            <div className='sinStock'>
                                    <div className="itemSinStock" > <Item item={item}/></div>
                                    <div className='overlay'>
                                            <div className='textSinStock'>Sin Stock</div>
                                    </div>
                            </div>
                            :
                            <Link className='links' to={`/item/${item.id}`}>
                                <Item item={item}/>
                            </Link>
                        }
                    </Col>
                ))}  
            </Row>

        }
    </Container>
  )
}
