import {collection, addDoc} from "firebase/firestore";
import {db} from "./config.js";
import { products } from "../data/data.js"

const uploadProductos = async () => {
const productosRef = collection(db, "productos");

for(const producto of products) {
    const { id, ...productoSinId } = producto;
    try {
        const docRef = await addDoc(productosRef, productoSinId);
        console.log(`Producto subido con ID: ${docRef.id}`);
        console.log(productoSinId)
    } catch (error) {
        console.error("Error al subir producto: ", error);
    }
     
}

};
uploadProductos();
