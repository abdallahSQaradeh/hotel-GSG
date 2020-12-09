import React, { useRef } from "react";
import "./index.css";

import Header from "../../components/header/index";
import HomeBG from "../../assets/bg-images/gabriel.png";
import Body from "../../components/body/index";
import Footer from "../../components/footer/index";

export default function HomePage(props) {
  const ref = useRef(null);
  return (
    <div className="home-page">
      <Header backGround={HomeBG} scrollTo={ref} />
      <Body myRef={ref} />
      <Footer />
    </div>
  );
}
