import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import CartSum from "./components/CartSum";

function App() {
  const [products] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);
  const [promotionList, setPromotionList] = useState([]);
  const [cart, setCart] = useState([]);

  function setPromotedItem() {
    const idRandom = Math.floor(Math.random() * 6) + 1;
    const promotionRandom = Math.floor(Math.random() * 50) + 40;
    const discount = 1 - promotionRandom / 100;

    const { id, name, price } = products.find((elt) => {
      return elt.id === idRandom;
    });

    const originalPrice = price;
    const discountPrice = price * Number(discount.toFixed(2));
    const discountAmount = price - discountPrice;

    const item = {
      id,
      name,
      originalPrice,
      discount: promotionRandom,
      price: discountPrice,
      discountAmount: discountAmount,
    };

    setPromotionList([...promotionList, item]);
  }

  return (
    <div className="App">
      <button className="promotionButton" onClick={setPromotedItem}>
        Gerar Promoção
      </button>
      <ProductList
        promotionList={promotionList}
        setCart={setCart}
        cart={cart}
      />
      <h1>Carrinho</h1>
      <CartSum cart={cart} />
      <ProductList cart={cart} isCart={true} />
    </div>
  );
}

export default App;
