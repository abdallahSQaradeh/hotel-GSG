import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export default function BodyImage(props) {
  const { src, title } = props;
  return (
    <div className="body-image">
      <img src={src} alt={title} className="body-image" />
    </div>
  );
}
BodyImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
