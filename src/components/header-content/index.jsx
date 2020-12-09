import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import Navbar from "../navbar/index";
import HeaderBanner from "../header-banner/index";
import Button from "../UI/Button/index";
import BookNow from "../../assets/icons/book now.svg";
import ScrollButtonSrc from "../../assets/icons/scroll.svg";
import ScrollButton from "../UI/scroll-button/index";

export default function HeaderContent(props) {
  const { scrollTo } = props;
  return (
    <div className="header-content">
      <Navbar />
      <HeaderBanner />
      <div className="header-footer">
        <Button text="BOOK NOW" Icon={BookNow} size="normal" />
        <ScrollButton
          text="Scroll"
          icon={ScrollButtonSrc}
          scrollTo={scrollTo}
        />
      </div>
    </div>
  );
}
HeaderContent.propTypes = {
  scrollTo: PropTypes.elementType.isRequired,
};
