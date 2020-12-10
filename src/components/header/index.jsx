import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import HeaderContent from "../header-content/index";

export default function Header(props) {
  const { backGround, scrollTo, solid } = props;
  return !solid ? (
    <div
      className="header"
      style={{
        backgroundImage: `url(${backGround})`,
      }}
    >
      <HeaderContent scrollTo={scrollTo} />
      <div className="darkColor" />
    </div>
  ) : (
    <div className="header solid">
      <HeaderContent solid />
      <div className="darkColor" />
    </div>
  );
}
Header.propTypes = {
  backGround: PropTypes.elementType,
  scrollTo: PropTypes.elementType,
  solid: PropTypes.bool,
};
Header.defaultProps = {
  backGround: "",
  solid: false,
  scrollTo: null,
};
