import Item from "./Item";

const ItemList = ({ products }) => {

  return (
    <div className="itemlist">
      {
        products.length === 0 ? (
          <div>No se encontraron productos</div>  
        ) : (
          products.map((product) => (
            <Item product={product} key={product.id} />
          ))
        )
      }
    </div>
  );
}

export default ItemList;
