import ProductCard from "../ProductCard";
import "./styles.css";

function ProductList({ promotionList, setCart, cart, isCart = false }) {
  return (
    <div className="productsDiv">
      {isCart
        ? cart.map((elt, index) => {
            return (
              <ProductCard
                key={index}
                setCart={setCart}
                cart={cart}
                isCart={isCart}
                product={elt}
              />
            );
          })
        : promotionList.map((elt, index) => {
            return (
              <ProductCard
                key={index}
                setCart={setCart}
                cart={cart}
                isCart={isCart}
                product={elt}
              />
            );
          })}
    </div>
  );
}

export default ProductList;
