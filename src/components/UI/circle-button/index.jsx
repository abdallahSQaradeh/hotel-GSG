import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function CircleButton(props) {
  const { text, clickHandle } = props;
  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      onClick={clickHandle}
      onKeyDown={() => {}}
      role="button"
      className="circle-button"
    >
      <div className="circle-button-text">{text}</div>
    </div>
  );
}
CircleButton.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandle: PropTypes.func,
};
CircleButton.defaultProps = {
  clickHandle: () => {},
};
