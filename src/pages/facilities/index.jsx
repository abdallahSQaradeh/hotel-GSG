import React, { useRef } from "react";
import "./index.css";
import Header from "../../components/header/index";
import Facility from "../../assets/bg-images/palm-trees.png";
import Footer from "../../components/footer/index";
import Testimonials from "../../components/testiminials/index";
import BodyFacility from "../../components/body-facility/index";

export default function FacilitiesPage() {
  const scrollTo = useRef(null);
  return (
    <div className="facilities-page">
      <Header backGround={Facility} scrollTo={scrollTo} />
      <BodyFacility myRef={scrollTo} />
      <Testimonials />
      <Footer />
    </div>
  );
}
