import React, { useState } from "react";
import NavItem from "../nav-item/index";
import "./index.css";

export default function NavItems(props) {
  const [items] = useState([
    { text: "Home", path: "/" },
    { text: "Facilities", path: "facilities" },
    { text: "Rooms", path: "/rooms" },
    { text: "Contact-us", path: "/contact-us" },
  ]);
  return (
    <div className="nav-items">
      {items.map((item) => {
        return <NavItem text={item.text} key={item.text} path={item.path} />;
      })}
    </div>
  );
}
