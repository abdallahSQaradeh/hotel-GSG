import React from "react";
import "./index.css";

export default function EmailField() {
  return (
    <div className="email-field">
      <input
        type="email"
        className="email-address"
        placeholder="Email"
        value="Email Address"
        onChange={() => {}}
      />
      <div className="email-address-ok">OK</div>
    </div>
  );
}
