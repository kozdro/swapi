import { useEffect, useState } from "react";
import "./Starship.css";

const api = "https://swapi.dev/api/starships/";

export default function Starship() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setStarships(data.results);
      });
  }, []);

  return (
    <tbody>
      {starships.map((starship) => (
        <tr>
          <td>{starship.name}</td>
          <td>{starship.manufacturer}</td>
          <td>{starship.cost_in_credits}</td>
          <td>
            <input className="input" type="number" />
            <button className="add-btn">Add</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
