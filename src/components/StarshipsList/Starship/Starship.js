import React, { Component } from "react";
import CartContext from "../../../context/cartContext";
import "./Starship.css";

const api = "https://swapi.dev/api/starships/";

class Starship extends Component {
  static contextType = CartContext;

  state = {
    starships: [],
    value: 0,
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

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddClick = () => {
    this.setState({
      quantity: this.state.value,
    });
  };

  render() {
    return (
      <tbody>
        {this.state.starships.map((starship) => (
          <tr key={starship.url}>
            <td>{starship.name}</td>
            <td>{starship.manufacturer}</td>
            <td>{starship.cost_in_credits}</td>
            <td>
              <input
                key={starship.model}
                onChange={this.handleInputChange}
                value={this.value}
                className="input"
                type="number"
                min="0"
              />
              <CartContext.Provider value={this.state.quantity}>
                <button onClick={this.handleAddClick} className="add-btn">
                  Add
                </button>
              </CartContext.Provider>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default Starship;
