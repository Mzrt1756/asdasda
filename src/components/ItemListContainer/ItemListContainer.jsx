import { Container } from "react-bootstrap"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({bienvenido}) => {
    return(
        <Container fluid className="py-3">
            <Container>
                <h1 className='itemListTitle'>{bienvenido}</h1>
            </Container>
            <ItemList/>
        </Container>
        
    )
}