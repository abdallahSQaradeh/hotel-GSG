import React, { useRef } from "react";
import Testimonials from "../../components/testiminials/index";
import RoomBody from "../../components/body-room/index";

export default function RoomPage() {
  const scrollTo = useRef(null);
  return (
    <div className="room-page">
      {/* <Header backGround={RoomBG} scrollTo={scrollTo} /> */}
      <RoomBody myRef={scrollTo} />
      <Testimonials />
    </div>
  );
}
