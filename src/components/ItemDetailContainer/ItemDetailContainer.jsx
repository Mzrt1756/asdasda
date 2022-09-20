import {useState,useEffect} from 'react';
import { doc, getDoc } from "firebase/firestore";
import { baseDeDatos } from '../../utils/firebase';
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Container } from "react-bootstrap"
import {useParams} from 'react-router-dom';


export const ItemDetailContainer = () => {
    const {idItem} = useParams();
    console.log(idItem);
    const [item, setItem] = useState({})

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

    return (
        <Container>
            <ItemDetail item={item}/>
        </Container>
    )
}
