import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import HeaderContent from "../header-content/index";
import HomeBG from "../../assets/bg-images/gabriel.png";
import FacilityBG from "../../assets/bg-images/palm-trees.png";
import RoomBG from "../../assets/bg-images/apartment.png";

export default function Header(props) {
  const { scrollTo } = props;
  const location = useLocation();
  let background = null;
  let solid = false;
  switch (location.pathname) {
    case "/":
      background = HomeBG;
      break;
    case "/facilities":
      background = FacilityBG;
      break;
    case "/rooms":
      background = RoomBG;
      break;
    case "/contact-us":
      solid = true;
      background = "";
      break;
    default:
      background = HomeBG;
      break;
  }
  return !solid ? (
    <div
      className="header"
      style={{
        backgroundImage: `url(${background})`,
      }}
      id="header"
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
  scrollTo: PropTypes.string.isRequired,
};
