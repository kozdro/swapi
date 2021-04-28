import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import StarshipsList from "./components/StarshipsList/StarshipsList";
import "./App.css";

const api = "https://swapi.dev/api/starships/";

function App() {
  const [starships, setStarships] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setStarships(data.results);
      });
  }, []);

  const handleClick = (i) => {
    setQuantity(parseInt(quantity + i));
  };

  return (
    <>
      <Header quantity={quantity} />
      <StarshipsList starships={starships} onClick={handleClick} />
    </>
  );
}

export default App;
