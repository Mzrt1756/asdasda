import { Container, Row, Col, Image } from "react-bootstrap"
import Img1 from '../../assets/origenes1.jpg'
import Img2 from '../../assets/origenes2.jpg'
import Img3 from '../../assets/origenes3.png'
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
                            <p className="textOrigenes p-4 fs-4">“Trabajamos con cafés de especialidad, controlamos su calidad con un proceso riguroso que permite distinguir cualquier defecto en los lotes, que presentan una trazabilidad al 100%, y nos permite definir estrategias para relucir el origen en tu taza.”</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row >
                        <Col lg className="colOrigenes1 d-flex">
                            <p className="textOrigenes p-4">Comenzamos de la mano de Panamá Producers, unos productores muy reconocidos de cafés de especialidad panameños. Se seleccionan e importan decenas de bolsas caracterizadas por su exotismo y exclusividad.
                            Panamá es el país que ha cambiado la mirada del mundo hacia el café, cuando un gran número de sus fincas más reconocidas obtuvieron numerosos premios, el mundo se dio cuenta de lo que ese país podía dar en términos de calidad.</p>
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
                            <p className="textOrigenes p-4">La calidad de su producción de café, hace de Panamá un destino clave. Esto se debe a sus microclimas y alturas, en conjunto con su recurso humano de alta calidad, las capacidades de exportación que le brinda el Canal de Panamá y toda esa mano de obra calificada que se formó como excelentes caficultores.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row>
                        <Col lg className="colOrigenes1 d-flex">
                            <p className="textOrigenes p-4">También trabajamos con cafés de Brasil, de la región de Minas Gerais. Una zona única, premiada por sus cafés y la primera que tuvo denominación de origen por las características únicas de su suelo. Los cafés brasileños se destacan por su extremo dulzor y por sus notas acarameladas, de chocolate y nueces. Estos café se acompañan de manera distintiva con leche, la cual juega un papel sustancial. Además contamos con espresso especiales y para llevar de café africano, Kenia o Etiopía, y también cafés colombianos. </p>
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