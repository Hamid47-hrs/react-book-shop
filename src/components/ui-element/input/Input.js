import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <div className="input-container">
      <label
        className={`input-label ${props.isInvalid ? "invalid" : ""}`}
        htmlFor={props.id}
      >
        {`${props.label} :`}
      </label>
      <input
        className={`text-input ${
          props.isInvalid ? "invalid invalid-input" : ""
        }`}
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
        onFocus={props.focus}
        onBlur={props.blur}
      />
    </div>
  );
};

export default Input;
