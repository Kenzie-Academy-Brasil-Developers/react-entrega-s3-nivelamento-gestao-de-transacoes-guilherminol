import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddProduct from "./Components/AddProduct/index";
import ProductList from "./Components/ProductsList/";
import ExitTotal from "./Components/ExitTotal";
import ComingTotal from "./Components/CommingTotal";
function App() {
  const [products, setProducts] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });

  const [showOut, setShowOut] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <AddProduct
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          products={products}
          setProducts={setProducts}
        ></AddProduct>
        <h2>Display</h2>
        <div>
          {showOut ? (
            <>
              Saídas:
              <ProductList
                products={products.filter((product) => product.quantity < 0)}
              ></ProductList>
            </>
          ) : (
            <>
              Entradas:{" "}
              <ProductList
                products={products.filter((product) => product.quantity > 0)}
              ></ProductList>
            </>
          )}
          <button onClick={() => setShowOut(!showOut)}>
            {showOut ? "Mostrar Entradas" : "Mostrar Saídas"}
          </button>
        </div>
        <h3>Todas as Movimentações :</h3>
        <ul>
          {products.map((item, index) => {
            return (
              <li key={index}>
                Nome: {item.name}, Qtd: {item.quantity}, valor: {item.price}
              </li>
            );
          })}
        </ul>

        <h3>Total de saídas:</h3>

        <ExitTotal products={products}></ExitTotal>
        <p>
          Número total de saídas:
          {products.reduce((acc, atual) => {
            if (atual.quantity < 0) {
              return acc + atual.quantity * -1;
            }
            return acc;
          }, 0)}
        </p>
        <h3> Total de Entradas: </h3>
        <ComingTotal products={products}></ComingTotal>
        <p>
          Número total de entradas:
          {products.reduce((acc, atual) => {
            if (atual.quantity > 0) {
              return acc + atual.quantity;
            }
            return acc;
          }, 0)}
        </p>
      </header>
    </div>
  );
}

export default App;
