import React, { useEffect } from "react";
import "./index.css";
import PropTypes from "prop-types";
import BodyContact from "../../components/body-contact/index";

export default function ContactPage(props) {
  const { setHeader } = props;
  useEffect(() => {
    setHeader();
  }, [setHeader]);
  return (
    <div className="contact-page">
      <BodyContact />
    </div>
  );
}
ContactPage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};
