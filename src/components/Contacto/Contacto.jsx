import { Container } from "react-bootstrap"
import "./Contacto.css"

export const Contacto = () => {
    const URL = "https://form.jotform.com/222767948940673"
    return(
                <iframe className="formContacto" onload="window.parent.scrollTo(0,0)" src={URL} frameborder="0" scrolling="no"> </iframe>
    )
}