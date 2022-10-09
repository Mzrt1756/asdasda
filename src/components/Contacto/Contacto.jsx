import "./Contacto.css"

export const Contacto = () => {
    const URL = "https://form.jotform.com/222767948940673"
    return(
                <iframe title="formularioContacto" className="formContacto" src={URL} frameBorder="0" scrolling="no"/>
    )
}