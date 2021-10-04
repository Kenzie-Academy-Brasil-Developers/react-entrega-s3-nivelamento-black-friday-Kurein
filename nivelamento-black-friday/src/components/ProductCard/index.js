import "./styles.css";

function ProductCard({ setCart, cart, isCart, product }) {
  const { discount, discountAmount, name, originalPrice, price } = product;

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="productDiv">
      <h2>{name}</h2>
      <h3>Desconto: {`${discount}%`}</h3>
      <h4>Preço do desconto: {`R$${discountAmount.toFixed(2)}`}</h4>
      <p>Preço Atual: {`R$${price.toFixed(2)}`}</p>
      <p>Preço Original: {`R$${originalPrice.toFixed(2)}`}</p>
      {!isCart && (
        <button className="productButton" onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </button>
      )}
    </div>
  );
}

export default ProductCard;
