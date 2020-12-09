import React, { useState } from "react";
import NavItem from "../nav-item/index";
import "./index.css";

export default function NavItems(props) {
  const [items] = useState(["Home", "Facilities", "Rooms", "Contact-us"]);
  return (
    <div className="nav-items">
      {items.map((item) => {
        return <NavItem text={item} key={item} />;
      })}
    </div>
  );
}
