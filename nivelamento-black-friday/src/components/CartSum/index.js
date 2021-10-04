function CartSum({ cart }) {
  const totalPrice = cart.reduce((acc, elt) => {
    return acc + elt.price;
  }, 0);

  return (
    <div>
      <h1>Preço Total: {`R$${totalPrice.toFixed(2)}`}</h1>
    </div>
  );
}

export default CartSum;
