import React, { useRef, useEffect } from "react";
import "./index.css";
import PropTypes from "prop-types";
import Body from "../../components/body/index";

export default function HomePage(props) {
  const ref = useRef(null);
  const { setHeader } = props;
  useEffect(() => {
    setHeader();
  }, [setHeader]);
  return (
    <div className="home-page">
      {/* <Header backGround={HomeBG} scrollTo={ref} /> */}
      <Body myRef={ref} />
    </div>
  );
}
HomePage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};
