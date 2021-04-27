import { Component } from "react";
import Header from "./components/Header/Header";
import StarshipsList from "./components/StarshipsList/StarshipsList";
import "./App.css";

const api = "https://swapi.dev/api/starships/";
class App extends Component {
  state = {
    starships: [],
    quantity: 0,
  };

  componentDidMount() {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          starships: data.results,
        });
      });
  }

  handleClick = (i) => {
    this.setState({
      quantity: i
    })
  }

  render() {
    const { starships, quantity } = this.state;

    return (
      <>
        <Header quantity={quantity} />
        <StarshipsList
          starships={starships}
          onClick={this.handleClick}
        />
      </>
    );
  }
}

export default App;
