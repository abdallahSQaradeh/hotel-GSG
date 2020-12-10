import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export default function BodyTitle(props) {
  const { title, description, isContact } = props;
  return (
    <div className={`body-header ${isContact ? "left" : "center"}`}>
      <h2 className="body-title">{title}</h2>
      <p className="body-title-description">{description}</p>
    </div>
  );
}
BodyTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isContact: PropTypes.bool,
};
BodyTitle.defaultProps = {
  title: "",
  description: "",
  isContact: false,
};
