import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

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