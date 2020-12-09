import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export default function Facility(props) {
  const { src, alt, caption } = props;
  return (
    <figure className="facility-figure">
      <img className="facility-img" src={src} alt={alt} />
      <figcaption className="facility-caption">{caption}</figcaption>
    </figure>
  );
}

Facility.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
