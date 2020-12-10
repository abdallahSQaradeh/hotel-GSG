import React, { useRef } from "react";
import "./index.css";
import Body from "../../components/body/index";

export default function HomePage(props) {
  const ref = useRef(null);
  return (
    <div className="home-page">
      {/* <Header backGround={HomeBG} scrollTo={ref} /> */}
      <Body myRef={ref} />
    </div>
  );
}
