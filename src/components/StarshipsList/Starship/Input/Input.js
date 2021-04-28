import { useState } from "react";

function Input(props) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        onChange={handleChange}
        value={value}
        className="input"
        type="number"
        min="0"
      />
      <button
        onClick={() => props.onClick(parseInt(value))}
        className="add-btn"
      >
        Add
      </button>
    </>
  );
}

export default Input;
