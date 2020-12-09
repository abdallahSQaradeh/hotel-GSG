import React from "react";
import "./index.css";
import HotelInfo from "../hotel-info/index";
import FooterItem from "../footer-item/index";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/twitter.svg";
import EmailField from "../UI/email-field/index";
import Triangle from "../UI/triangle/index";

export default function Footer(props) {
  const about = ["About us", "Contacts", "Terms & conditions"];
  const social = [
    { text: "Facebook", icon: Facebook },
    { text: "Twitter", icon: Twitter },
    { text: "Instagram", icon: Instagram },
  ];
  return (
    <div className="footer">
      <Triangle />
      <HotelInfo />
      <div className="about">
        {about.map((item) => (
          <FooterItem key={item} text={item} />
        ))}
      </div>
      <div className="social-media">
        {social.map((item) => (
          <FooterItem text={item.text} key={item.text} icon={item.icon} />
        ))}
      </div>
      <div className="subscribe">
        <FooterItem text="Subscribe to our newsletter" />
        <EmailField />
      </div>
    </div>
  );
}
