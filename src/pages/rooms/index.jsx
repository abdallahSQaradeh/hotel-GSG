import React, { useRef } from "react";
import Header from "../../components/header/index";
import Testimonials from "../../components/testiminials/index";
import Footer from "../../components/footer/index";
import RoomBody from "../../components/body-room/index";
import RoomBG from "../../assets/bg-images/apartment.png";

export default function RoomPage() {
  const scrollTo = useRef(null);
  return (
    <div className="room-page">
      <Header backGround={RoomBG} scrollTo={scrollTo} />
      <RoomBody myRef={scrollTo} />
      <Testimonials />
      <Footer />
    </div>
  );
}
