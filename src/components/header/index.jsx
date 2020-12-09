import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import HeaderContent from "../header-content/index";

export default function Header(props) {
  const { backGround, scrollTo } = props;
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${backGround})`,
      }}
    >
      <HeaderContent scrollTo={scrollTo} />
      <div className="darkColor" />
    </div>
  );
}
Header.propTypes = {
  backGround: PropTypes.elementType,
  scrollTo: PropTypes.elementType.isRequired,
};
Header.defaultProps = {
  backGround: "",
};
