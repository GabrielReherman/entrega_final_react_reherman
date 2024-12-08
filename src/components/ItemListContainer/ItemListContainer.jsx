import { useState, useEffect } from "react";
import ItemList from "./ItemList";  
import { useParams } from "react-router-dom";  
import { getDocs, collection, query, where } from "firebase/firestore";  
import  db from "../../firebase/config.js";  

import "./itemlistcontainer.css"; 

const ItemListContainer = () => {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idCategory } = useParams();
  
  const getProducts = async (category = null) => {
    setLoading(true);  
    setError(null);  

    try {
      const productsRef = collection(db, "productos");  
      let productQuery;

      if (category) {
       
        productQuery = query(productsRef, where("category", "==", category));
      } else {
        
        productQuery = productsRef;
      }

      const dataDb = await getDocs(productQuery);  
      const data = dataDb.docs.map((productDb) => ({
        id: productDb.id,  
        ...productDb.data(),  
      }));

      setProducts(data);  
    } catch (err) {
      setError("Error al obtener los productos: " + err.message);  
    } finally {
      setLoading(false);  
    }
  };
  
  useEffect(() => {
    getProducts(idCategory); 
  }, [idCategory]);

  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>{error}</div>;
  }
  
  return (
    <div className="itemlistcontainer">
      <ItemList products={products} /> 
    </div>
  );
};

export default ItemListContainer;
