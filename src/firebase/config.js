// Importa las funciones necesarias de Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCl8T9KNkUtfyWzaL60qwu51ElphltK46Q",
  authDomain: "techsore-e7b34.firebaseapp.com",
  projectId: "techsore-e7b34",
  storageBucket: "techsore-e7b34.firebasestorage.app",
  messagingSenderId: "1024675667579",
  appId: "1:1024675667579:web:cfde3ebe5ca131de900cde"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Crea la instancia de Firestore
const db = getFirestore(app);

// Exporta la instancia de Firestore
export default db;
