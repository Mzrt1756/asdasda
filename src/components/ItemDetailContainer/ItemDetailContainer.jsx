import { Container } from "react-bootstrap"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    return (
        <Container className="py-3">
            <ItemDetail/>
        </Container>
    )
  }