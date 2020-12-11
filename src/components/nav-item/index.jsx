import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { NavLink } from "react-router-dom";

export default function NavItem(props) {
  const { text, path } = props;

  return (
    <NavLink to={path} exact>
      <div className="nav-item">{text}</div>
    </NavLink>
  );
}
NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
