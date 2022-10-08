import { Container, Row, Col, Image } from "react-bootstrap"
import Img1 from '../../assets/origenes1.jpg'
import Img2 from '../../assets/origenes2.jpg'
import Img3 from '../../assets/origenes3.jpg'
import Img4 from '../../assets/origenes4.jpeg'
import "./Origenes.css"

export const Origenes = () => {
    return(
        <div>
            <Container className="p-4 pb-2 m-auto">
                <Container><h2 className="text-center">Nuestros Orígenes</h2></Container>
                <Container>
                    <Row className="pt-4">
                        <Col lg className="d-flex justify-content-md-center">
                            <Image fluid className="imgOrigenes" src={Img1} alt="plantaCafe" />
                        </Col>
                        <Col lg className="d-flex">
                            <p className="textOrigenes p-4 fs-4">“Trabajamos con cafés de especialidad, que no contienen defectos y presentan una trazabilidad al 100%, podemos definir estrategias para relucir el origen en tu taza.”</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row >
                        <Col lg className="colOrigenes1 d-flex">
                            <p className="textOrigenes p-4">Comenzamos de la mano de Panamá Varietals, con las fincas Hartmann y Carmen Estate, unos productores muy reconocidos de cafés de especialidad panameños. Se seleccionaron e importaron decenas de bolsas caracterizadas por ser exóticas y exclusivas, difíciles de conseguir en un país pequeño que produce muchos de los cafés más finos y elegantes del mundo. 
                            Panamá es el país que ha cambiado la mirada del mundo hacia el café, cuando la Finca o Hacienda La Esmeralda obtuvo precios récord en una subasta por el “Cup of excellence”, el mundo se dio cuenta de lo que ese país podía dar en términos de calidad.</p>
                        </Col>
                        <Col lg className="d-flex justify-content-md-center">
                            <Image className="imgOrigenes" src={Img2} alt="cosechandoCafe" />
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row>
                        <Col lg className="d-flex justify-content-md-center">
                            <Image className="imgOrigenes" fluid src={Img3} alt="granosTostadosCafe" />
                        </Col>
                        <Col lg className="d-flex">
                            <p className="textOrigenes p-4">Lo que hace de Panamá un destino clave para la producción de cafés de extrema calidad, tiene que ver con sus microclimas y alturas, en conjunto con su recurso humano de alta calidad, que se vincula con la construcción del canal de Panamá y toda esa mano de obra calificada que luego continuó en distintas tareas, entre ellas, como caficultores.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row>
                        <Col lg className="colOrigenes1 d-flex">
                            <p className="textOrigenes p-4">También trabajamos con cafés de Brasil, de la región Cerrado de Minas Gerais. Una zona premiada por sus cafés y la primera que tuvo denominación de origen por las características únicas de su suelo. Los cafés brasileños se destacan por su extremo dulzor y por sus notas acarameladas, de chocolate y nueces. Son un excelente complemento de cafés donde la leche juega un papel sustancial, como el caso de un capuchino, latte o Flat White. Para llevar y como espresso especiales siempre contamos con algún café africano, Kenia o Etiopía, y también cafés colombianos. </p>
                        </Col>
                        <Col lg className="d-flex justify-content-md-center">
                            <Image fluid className="imgOrigenes" src={Img4} alt="plantacionCafe" />
                        </Col>
                    </Row>
                </Container>
           </Container>
        </div>
    )
}