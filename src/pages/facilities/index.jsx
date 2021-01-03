import React, { useRef, useEffect } from "react";
import "./index.css";
import PropTypes from "prop-types";
import Testimonials from "../../components/testiminials/index";
import BodyFacility from "../../components/body-facility/index";

export default function FacilitiesPage(props) {
  const scrollTo = useRef(null);
  const { setHeader } = props;
  useEffect(() => {
    setHeader();
  }, [setHeader]);
  return (
    <div className="facilities-page">
      {/* <Header backGround={Facility} scrollTo={scrollTo} /> */}
      <BodyFacility myRef={scrollTo} />
      <Testimonials />
    </div>
  );
}

FacilitiesPage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};
