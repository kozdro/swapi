import { Component } from "react";

class Input extends Component {
  state = {
    value: null,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <>
        <input
          onChange={this.handleChange}
          value={this.state.value}
          className="input"
          type="number"
          min="0"
        />
        <button
          onClick={() => this.props.onClick(parseInt(this.state.value))}
          className="add-btn"
        >
          Add
        </button>
      </>
    );
  }
}

export default Input;
