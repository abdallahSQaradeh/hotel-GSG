import React from "react";
import "./index.css";
import data from "../../data/data.json";
import Arrow from "../../assets/icons/Arrow 1.svg";

export default function ContactInfo() {
  const { loc, phone, email, viewMap } = data.contactPage;
  const splitLoc = loc.split(",");
  return (
    <div className="contact-info">
      <p className="location">
        {splitLoc[0]}
        {","}
        <br />
        {splitLoc[1]}
      </p>
      <div className="map">
        {viewMap}
        <img src={Arrow} alt="arrow" />
      </div>
      <p className="phone">{phone}</p>
      <p className="email">{email}</p>
    </div>
  );
}
