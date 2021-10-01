const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((item, index) => {
        return (
          <li key={index}>
            Nome: {item.name}, Qtd: {item.quantity}, valor: {item.price}{" "}
          </li>
        );
      })}
    </ul>
  );
};
export default ProductList;
