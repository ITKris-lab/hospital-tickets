
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCusPu3N7L3GWxqkTFbQBqIC46zMiktwCU",
  authDomain: "hospital-tickets-web.firebaseapp.com",
  projectId: "hospital-tickets-web",
  storageBucket: "hospital-tickets-web.appspot.com",
  messagingSenderId: "41601518181",
  appId: "1:41601518181:web:621c9e907094dab3d8948c",
  measurementId: "G-2CK2EFYGFE"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
