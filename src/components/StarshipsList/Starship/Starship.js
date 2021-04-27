import React from "react";
import Input from "./Input/Input";
import "./Starship.css";

function Starship(props) {
  return (
    <tbody>
      {props.starships.map(({ url, name, manufacturer, cost_in_credits }) => (
        <tr key={url}>
          <td>{name}</td>
          <td>{manufacturer}</td>
          <td>{cost_in_credits}</td>
          <td>
            <Input onClick={props.onClick} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Starship;
