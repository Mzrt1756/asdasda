import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import { useEffect } from 'react';
// import { collection, getDocs, query } from "firebase/firestore";
// import { useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyDIMVmxyzmXDIzv46-H7f9cipkLwORxN6g",
    authDomain: "ristretto-porceldp.firebaseapp.com",
    projectId: "ristretto-porceldp",
    storageBucket: "ristretto-porceldp.appspot.com",
    messagingSenderId: "752486577258",
    appId: "1:752486577258:web:debec1e6eafa5df5714613"
  };

  const app = initializeApp(firebaseConfig);
  export const baseDeDatos = getFirestore(app);
  

  // export const ObtenerArrayProductos = () => {
  //   const [arregloProductos, setArregloProductos] = useState([]);
  //   useEffect(()=>{
  //     const getItem = async()=>{
  //       const queryRef = query(collection(baseDeDatos,"ristretto-porceldp"));
  //       const response = await getDocs(queryRef);
  //       const docs = response.docs;
  //       const data = docs.map(doc=>{return {...doc.data(), id:doc.id} })
  //       console.log(data)
  //       setArregloProductos(data);
  //     }
  //     getItem()
  //   },[])
  // }

  // export const ObtenerIdProd= () => {
  //   const [idProd, setidProd] = useState([]);
  //   useEffect(()=>{
  //     ObtenerArrayProductos.then(resultado=>{
  //       const getItemId = async(id) =>{ 
  //         const prodId = resultado.find(item=>item.id===id)
  //         setidProd(prodId);
  //       }
  //       getItemId();
  //     })
  //   },[])
  // }
  
//   useEffect(()=>{
//     ObtenerArrayProductos.then(resultado=>{
//         if(!categoriaProd){
//             setItem(resultado)
//             setLoading(false);
//         } else{
//             const nuevaLista = resultado.filter(item=>item.categoria=== categoriaProd);
//             setItem(nuevaLista);
//             setLoading(false);
//         }
//     })
// },[categoriaProd])
// export const getItem = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(catalogoDeProductos)
//         reject(err => console.log(err))
//     }, 2000)
// })

// export const getItemId = (id) =>{
//    return new Promise((resolve, reject) => {
//       const prod = catalogoDeProductos.find(item=>item.id === parseInt(id))
//       resolve(prod)
//    })
// } 