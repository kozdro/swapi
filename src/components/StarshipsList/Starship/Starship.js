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
          {Object.values(cost_in_credits).includes("u") ? (
            <>
              <td>{cost_in_credits}</td>
              <td>not available</td>
            </>
          ) : (
            <>
              <td>{cost_in_credits}</td>
              <td>
                <Input onClick={props.onClick} />
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default Starship;
