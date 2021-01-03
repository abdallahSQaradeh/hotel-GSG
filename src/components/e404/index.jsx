import React, { useEffect } from "react";
import "./index.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function E404(props) {
  const { setHeader } = props;
  useEffect(() => {
    setHeader();
  }, [setHeader]);
  const msg = "This page doesn't Found, Maybe you lost";
  return (
    <div className="_404">
      <div className="_404-msg">404</div>
      <div className="_404-text">{msg}</div>
      <NavLink className="_404-link" replace to="/">
        Take me Home :(
      </NavLink>
    </div>
  );
}
E404.propTypes = {
  setHeader: PropTypes.func.isRequired,
};
