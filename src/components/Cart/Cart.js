import CartContext from "../../context/cartContext";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="cart-wrapper">
      <i className="fas fa-shopping-cart"></i>
      <CartContext.Consumer>
        {(value) => <span className="quantity">{value}</span>}
      </CartContext.Consumer>
      <p>Cart</p>
    </div>
  );
}
