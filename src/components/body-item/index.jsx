import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import BodyItemText from "../body-item-text/index";
import BodyImage from "../body-item-img/index";

export default function BodyItem(props) {
  const { text, src, imgTitle, title } = props;
  return (
    <div className="body-item">
      <BodyItemText text={text} title={title} />
      <BodyImage src={src} title={imgTitle} />
    </div>
  );
}
BodyItem.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  imgTitle: PropTypes.string,
};
BodyItem.defaultProps = {
  text: "",
  src: "",
  title: "",
  imgTitle: "",
};
