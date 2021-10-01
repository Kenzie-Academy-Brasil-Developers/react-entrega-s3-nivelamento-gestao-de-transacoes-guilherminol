const AddProducts = ({ newProduct, setNewProduct, products, setProducts }) => {
  return (
    <>
      <input
        onChange={(e) =>
          setNewProduct({
            name: e.target.value,
            quantity: newProduct.quantity,
            price: newProduct.price,
          })
        }
        placeholder="Digite o nome do produto"
      />

      <input
        onChange={(e) =>
          setNewProduct({
            name: newProduct.name,
            quantity: Number(e.target.value),
            price: newProduct.price,
          })
        }
        placeholder="Digite a quantidade do produto"
      />

      <input
        onChange={(e) =>
          setNewProduct({
            name: newProduct.name,
            quantity: newProduct.quantity,
            price: Number(e.target.value),
          })
        }
        placeholder="Digite o preço do produto"
      />

      <button onClick={() => setProducts([...products, newProduct])}>
        Adicionar
      </button>
    </>
  );
};
export default AddProducts;
