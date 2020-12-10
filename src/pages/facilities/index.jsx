import React, { useRef } from "react";
import "./index.css";
import Testimonials from "../../components/testiminials/index";
import BodyFacility from "../../components/body-facility/index";

export default function FacilitiesPage() {
  const scrollTo = useRef(null);
  return (
    <div className="facilities-page">
      {/* <Header backGround={Facility} scrollTo={scrollTo} /> */}
      <BodyFacility myRef={scrollTo} />
      <Testimonials />
    </div>
  );
}
