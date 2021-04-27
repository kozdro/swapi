import Cart from "../Cart/Cart";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <Cart quantity={props.quantity} />
    </header>
  );
}
