import React from "react";
import "./index.css";

export default function HotelInfo() {
  return (
    <div className="hotel-info">
      <div className="hotel-name">
        <div className="hotel-name-line-1">LUXURY</div>
        <div className="hotel-name-line-2">HOTELS</div>
      </div>
      <div className="hotel-address">
        <address>497 Evergreen Rd. Roseville, CA 95673</address>
      </div>
      <div className="hotel-phone">+44 345 678 903</div>
      <div className="hotel-email">luxury_hotels@gmail.com</div>
    </div>
  );
}
