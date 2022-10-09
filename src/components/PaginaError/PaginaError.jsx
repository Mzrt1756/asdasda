import { Container, Image } from "react-bootstrap"
import ImgError from '../../assets/error.png'
import "./PaginaError.css"

export const PaginaError = () => {
    return(
        <Container fluid className="px-5 pt-5 pb-3">
            <Image className="imagenError" src={ImgError} alt="imagenPaginaError"/>
        </Container>
    )
}