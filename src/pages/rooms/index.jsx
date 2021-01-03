import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Testimonials from "../../components/testiminials/index";
import RoomBody from "../../components/body-room/index";

export default function RoomPage(props) {
  const scrollTo = useRef(null);
  const { setHeader } = props;
  useEffect(() => {
    setHeader();
  }, [setHeader]);
  return (
    <div className="room-page">
      {/* <Header backGround={RoomBG} scrollTo={scrollTo} /> */}
      <RoomBody myRef={scrollTo} />
      <Testimonials />
    </div>
  );
}
RoomPage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};
