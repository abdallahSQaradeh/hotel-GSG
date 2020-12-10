import React from "react";
import "./index.css";
import InputFactory from "../UI/input-factory";

export default function ContactForm() {
  return (
    <div className="contact-form">
      <InputFactory label="Name" type="input" />
      <InputFactory label="Email Address" type="email" />
      <InputFactory label="Message" type="text-area" />
      <InputFactory label="Submit" type="submit" />
    </div>
  );
}
