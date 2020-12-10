import React from "react";
import "./index.css";
import BodyTitle from "../body-title/index";
import data from "../../data/data.json";
import ContactForm from "../contact-form";
import ContactInfo from "../contact-info";

export default function BodyContact(props) {
  const { title, description } = data.contactPage;
  return (
    <div className="body-contact">
      <BodyTitle isContact title={title} description={description} />
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
