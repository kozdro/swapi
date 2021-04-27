import React from "react";
import CartContext from "../../context/cartContext";
import "./Cart.css";

export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      <i className="fas fa-shopping-cart"></i>
      <span className="quantity">{props.quantity}</span>
      <p>Cart</p>
    </div>
  );
}
