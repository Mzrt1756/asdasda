import { Container } from "react-bootstrap"
import { CardProduct } from "../CardProduct/CardProduct"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemListContainer = () => {
    return(
        <Container className="py-3">
            <ItemCount stock="10" initial="0" />
            <CardProduct/>
        </Container>
        
    )
}