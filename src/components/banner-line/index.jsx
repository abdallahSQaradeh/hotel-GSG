import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function BannerLine(props) {
  const { lineText, lineNo } = props;
  let lineClass = "";
  switch (lineNo) {
    case 1:
      lineClass = "line-1";
      break;
    case 2:
      lineClass = "line-2";
      break;
    case 3:
      lineClass = "line-3";
      break;
    default:
      lineClass = "";
  }
  return (
    <div
      className={`banner-line ${lineClass} ${lineText.length > 10 ? "w" : ""}`}
    >
      {lineText}
    </div>
  );
}

BannerLine.propTypes = {
  lineText: PropTypes.string.isRequired,
  lineNo: PropTypes.number.isRequired,
};
