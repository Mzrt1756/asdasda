import {useState,useEffect} from 'react';
// import {getItemId} from '../../catalogo.jsx';
import { doc, getDoc } from "firebase/firestore";
import { baseDeDatos } from '../../utils/firebase';
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Container } from "react-bootstrap"
// import Row from 'react-bootstrap/Row';
// import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom';


export const ItemDetailContainer = () => {
    const {idItem} = useParams();
    console.log(idItem);
    const [item, setItem] = useState({})
    // const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const queryRef = doc(baseDeDatos,"ristretto-porceldp",idItem);
        getDoc(queryRef).then(resultado=>{
            const newProdId = {
                ...resultado.data(),
                id:resultado.id
            }
            console.log(newProdId)
            setItem(newProdId);
        }).catch(error=>console.log(error));
    },[idItem])

    // useEffect(()=>{
    //     ObtenerIdProd(idItem)
    //     .then(resultado =>{
    //         setItem(resultado)
    //         setLoading(false)
    //     })
    // })

    // useEffect(()=> {
    //     getItemId(idItem)
    //     .then(resultado => {
    //         setItem(resultado)
    //         setLoading(false)
    //     })      
    // }, [idItem])

    return (
        <Container>

        {
            // loading ?  

            // <Row className='rowItemSpinner'>
            //     <Spinner animation="border" role="status"  style={{ width: "10rem", height: "10rem"}}>
            //         <span className="visually-hidden">Loading...</span>
            //     </Spinner>
            // </Row>

            // :

            <ItemDetail item={item}/>

        }
        </Container>
    )
}
