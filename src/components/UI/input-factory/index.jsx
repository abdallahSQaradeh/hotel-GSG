import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export default function InputFactory(props) {
  const { label, type } = props;
  let input = null;
  switch (type) {
    case "input":
      input = (
        <input
          className="input"
          type="text"
          id={`${label}`}
          onChange={() => {}}
        />
      );
      break;
    case "text-area":
      input = (
        <textarea
          className="input"
          rows={11}
          type="text"
          id={`${label}`}
          onChange={() => {}}
        />
      );
      break;
    case "email":
      input = (
        <input
          className="input"
          type="email"
          id={`${label}`}
          onChange={() => {}}
        />
      );
      break;
    case "submit":
      input = <input type="submit" value={label} className="submit" />;
      break;
    default:
      throw new Error("this type is not allowed");
  }
  return (
    <div className={`input-field  ${type === "submit" ? "right" : ""}`}>
      {type !== "submit" ? (
        <label className="label" htmlFor={`${label}`}>
          {label}
        </label>
      ) : null}
      {input}
    </div>
  );
}
InputFactory.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
