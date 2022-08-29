import { Container } from "react-bootstrap"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
    return(
        <Container fluid className="py-3">
            <ItemList/>
        </Container>
        
    )
}