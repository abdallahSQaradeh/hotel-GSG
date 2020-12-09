import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import Button from "../UI/Button/index";

export default function BodyItemText(props) {
  const { title, text } = props;
  return (
    <div className="body-item-text">
      <h2>{title}</h2>
      <div className="text">{text}</div>
      <Button text="EXPLORE" size="small" />
    </div>
  );
}

BodyItemText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
