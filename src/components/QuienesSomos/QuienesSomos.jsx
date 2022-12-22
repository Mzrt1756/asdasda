import { Container, Row, Col} from "react-bootstrap"
import "./QuienesSomos.css"

export const QuienesSomos = () => {
    return(
        <div>
            <Container className="pt-3 px-3 ">
                <Row>
                    <Col><h2 className="textcenter pb-2">Nosotros</h2></Col>
                    <hr />
                    <Col ><p className="fontNosotros fs-6 p-3">Ristretto Coffee House es un proyecto que comenzó hace más de 10 años y que nace del interés de Fidel y Ernesto en el café de especialidad durante su estadía en Nueva York, donde vivieron durante dos años antes de viajar a Centroamérica y recorrer cada pueblo cafetero por el que pasaron.</p>
                    <p className="fontNosotros fs-6 px-3 pb-3">De ahí continuaron viajando por el mundo y estuvieron 5 años en Bélgica, donde Ernesto aprendió a tostar de la mano del reconocido tostador Jean Paul.</p></Col>
                    <hr />
                    <Col><p className="fontNosotros fs-6 p-3">Ristretto Coffee House es un proyecto que busca masificar el consumo de café de especialidad, al hacerlo más accesible para todos. Al proyecto se le han sumado muchas personas que comparten la misma visión: desde el apoyo inicial de Raúl, hasta el complemento de los socios Salvador, Nicolás y Darío, que hoy conforman un equipo que lleva adelante el día a día de nuestra misión.</p></Col>
                    <hr />
                    <Col><p className="fontNosotros fs-6 p-3">Contamos con nuestra Roastery, en Magdalena, donde funciona la casa madre de nuestro proyecto, tostándose café a diario y produciéndose también panes de masa madre, croissants y otras cosas que hacen a nuestra propuesta como lo son los talleres y catas de café.</p></Col>
                </Row>
           </Container>
        </div>
    )
}