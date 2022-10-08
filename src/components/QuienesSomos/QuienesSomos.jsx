import { Container, Row, Col} from "react-bootstrap"
import "./QuienesSomos.css"

export const QuienesSomos = () => {
    return(
        <div>
            <Container className="pt-3 px-3 ">
                <Row>
                    <Col><h2 className="textcenter pb-2">Nosotros</h2></Col>
                    <hr />
                    <Col ><p className="fontNosotros fs-6 p-3">Ristretto Coffee House es un proyecto curado por más de 10 años y que nace del interés de Fidel y Ernesto en el café de especialidad en Australia, donde vivieron durante un año y descubrieron los famosos Flat Whites y brunches post-sesiones de surf en la mítica Bondi Beach de Sidney.</p>
                    <p className="fontNosotros fs-6 px-3 pb-3">De ahí continuaron viajando por el mundo y estuvieron 10 años en Austria, donde Ernesto aprendió a tostar de la mano del reconocido tostador 220Grad, junto a Alois y Margret, sus mentores.</p></Col>
                    <hr />
                    <Col><p className="fontNosotros fs-6 p-3">Ristretto Coffee House es un proyecto expansivo, con vocación de democratizar el café de excelencia. Al proyecto se le han sumado muchas personas que comparten el mismo horizonte: desde el apoyo inicial de Raúl, hasta el complemento de los socios Salvador, Nicolás y Darío, que hoy conforman un equipo que lleva adelante el día a día de nuestra misión.</p></Col>
                    <hr />
                    <Col><p className="fontNosotros fs-6 p-3">Contamos con nuestra Roastery, en Magdalena, donde funciona la casa madre de nuestro proyecto, tostándose café a diario y produciendose también panes de masa madre, croissants y otras cosas que hacen a nuestra propuesta como lo son los talleres y catas de café.</p></Col>
                </Row>
           </Container>
        </div>
    )
}