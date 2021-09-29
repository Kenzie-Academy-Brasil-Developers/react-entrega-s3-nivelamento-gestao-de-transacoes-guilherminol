import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

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
        <h2>Display</h2>
        <div>
          {showOut ? (
            <>
              <ul>
                Saídas:{" "}
                {products
                  .filter((product) => product.quantity < 0)
                  .map((item, index) => {
                    return (
                      <li key={index}>
                        Nome: {item.name}, Qtd: {item.quantity}, valor:{" "}
                        {item.price}{" "}
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            <>
              Entrada:{" "}
              {products
                .filter((product) => product.quantity > 0)
                .map((item, index) => {
                  return (
                    <li key={index}>
                      Nome: {item.name}, Qtd: {item.quantity}, valor:{" "}
                      {item.price}{" "}
                    </li>
                  );
                })}
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
        <p>
          $
          {products.reduce((acc, atual) => {
            if (atual.quantity < 0) {
              return acc + atual.quantity * -1 * atual.price;
            }
            return acc;
          }, 0)}
        </p>
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
