import React from "react";

const Input = props => {
  return (
    <div className="inputsContainer">
      <input
        className="input"
        type="text"
        placeholder="Paste image URL here"
        onChange={props.input}
      />
      <input
        className="button"
        type="button"
        value="Get Ingredients"
        onClick={props.image}
      />
    </div>
  );
};

export default Input;
