import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function Button(props) {
  const { Icon, text, size, clickHandle } = props;
  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      onClick={clickHandle}
      onKeyDown={() => {}}
      role="button"
      className={`button ${
        // eslint-disable-next-line no-nested-ternary
        size === "small" ? "small" : size === "fit" ? "fit" : "normal"
      }`}
    >
      {Icon ? <img src={Icon} alt={text} /> : ""}

      <div className="button-text">{text}</div>
    </div>
  );
}
Button.propTypes = {
  Icon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  clickHandle: PropTypes.func,
};
Button.defaultProps = {
  Icon: "",
  clickHandle: () => {},
};
