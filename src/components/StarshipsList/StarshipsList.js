import Starship from "./Starship/Starship";
import "./StarshipsList.css";

export default function StarshipList() {
  return (
    <div className="main">
      <h1>Starships List</h1>
      <div className="starship-list">
        <table bordercolor="white" frame="void" rules="rows">
          <colgroup span="4"></colgroup>
          <tr>
            <th>Starship name</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <Starship />
        </table>
      </div>
    </div>
  );
}
