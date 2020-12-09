import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export default function Testimonial(props) {
  const { text, author } = props;
  return (
    <div className="testimonial">
      <q className="testimonial-text">{text}</q>
      <p className="author">{author}</p>
    </div>
  );
}
Testimonial.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
