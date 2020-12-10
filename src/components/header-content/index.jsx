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
  const { scrollTo, solid } = props;
  return (
    <div className="header-content">
      <Navbar />
      {!solid ? (
        <>
          <HeaderBanner />
          <div className="header-footer">
            <Button text="BOOK NOW" Icon={BookNow} size="normal" />
            <ScrollButton
              text="Scroll"
              icon={ScrollButtonSrc}
              scrollTo={scrollTo}
            />
          </div>
        </>
      ) : (
        <div className="contact-us">CONTACT-US</div>
      )}
    </div>
  );
}
HeaderContent.propTypes = {
  scrollTo: PropTypes.string,
  solid: PropTypes.bool,
};
HeaderContent.defaultProps = {
  solid: false,
  scrollTo: null,
};
