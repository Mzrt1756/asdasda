import { Container, Row, Col, Image } from "react-bootstrap"
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Logo from '../../assets/Coffee-shop-logo.png'
import Img1 from '../../assets/cafe-latteart(1).jpeg'
import Img2 from '../../assets/cafe-tostado(1).png'
import "./Mayorista.css"


export const Mayorista = () => {
    return(
        <div>
            <Container className="p-4 px-4 m-auto">
                <Container className="py-3 px-5 border border-secondary border-opacity-50 d-flex justify-content-center">
                        <Row>
                            <div className="d-flex justify-content-center"><img className="imgLogoMay" src={Logo} alt="" /></div>
                            <div className=" px-3"><h2>Soluciones para que puedas incorporar nuestro café de excelencia a tu negocio. </h2></div>
                            <div className="d-flex justify-content-center fs-5 px-3"><p>Ya sea que tengas una cafetería, hotel, restaurante, oficina o plataforma de venta y distribución de café, en Ristretto Coffee House estamos para mejorar tu propuesta.
        Canales exclusivos de venta mayorista:</p></div>
                            <div className="fs-5 px-3"><p>Canales exclusivos de venta mayorista: </p></div>
                            <Row>
                                <Col lg className="m-2 text-center"><p className="fs-5"><FaWhatsapp/> + 54 9 221 555-5555</p></Col>
                                <Col lg className="m-2 text-center"><p className="fs-5"><AiOutlineMail/> consultas@ristrettocoffee.com</p></Col>
                            </Row>
                        </Row>
                </Container>
                <Container>
                    <Row className="pt-4">
                        <Col lg className="d-flex justify-content-md-center">
                            <Image fluid src={Img1} alt="tostadoraCafe" />
                        </Col>
                        <Col lg>
                            <h4 className="tituloMayorista pb-2 pt-4">Selección</h4>
                            <p className="textMayorista pb-2 ">Seleccionamos nuestros cafés de orígenes como Brasil, Costa Rica, Kenia, Etiopía y, por supuesto, Colombia. Nuestro café de la casa proviene de la región de Alta Mogiana, en Brasil. Nuestros proveedores son reconocidos cafeteros de talla internacional.</p>
                            <h4 className="tituloMayorista pb-2">Know-how</h4>
                            <p className="textMayorista">Tostamos en nuestra máquina Probatone de 12kgs, de marca Probat, Alemana e importada de Austria. Nuestra Roaster Ernestina vivió unos 5 años en el exterior y comenzó sus pasos tostando café en el famoso tostador Robert Schure donde se familiarizó con la técnica del tueste y el manejo de cafés de distintos orígenes. Desarrollamos curvas de tueste y perfiles de sabor únicos y pensados para los granos específicos que tostamos, teniendo en cuenta su terroir, cosecha, varietal, altitud y utilización proyectada. Utilizamos el software Cropster para poder ver cada curva de tueste y asegurar la consistencia necesaria para cada lote.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row className="pt-4">
                        <Col lg className="colMayorista1">
                            <h4 className="tituloMayorista pb-2 pt-4">Nuestros clientes</h4>
                            <p className="textMayorista pb-2 ">Sea cual sea el emprendimiento que tengas (un restaurante, una cafetería, hotel o una plataforma de venta) en la cual quieras sumar una experiencia distinta e inigualable, aquí estamos para ayudarte.</p>
                            <h4 className="tituloMayorista pb-2">Servicio</h4>
                            <p className="textMayorista pb-2">Te ofrecemos un servicio de post-venta ajustado a tus necesidades para que puedas mantener los estándares de calidad en el día a día. Esto incluye capacitaciones a tu personal a través de nuestro departamento de calidad de café. Además, te daremos acceso a nuestras herramientas de trabajo y educación para que puedas consultarlas cuando sea necesario.</p>
                        </Col>
                        <Col lg className="colMayorista2 d-flex justify-content-md-center">
                            <Image fluid src={Img2} alt="dibujoCafeconLeche" />
                        </Col>
                    </Row>
                </Container>
           </Container>
        </div>
    )
}