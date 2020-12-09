import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function NavItem(props) {
  const { text } = props;
  return <div className="nav-item">{text}</div>;
}
NavItem.propTypes = {
  text: PropTypes.string.isRequired,
};
