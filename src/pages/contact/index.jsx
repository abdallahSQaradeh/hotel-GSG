import React from "react";
import "./index.css";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import BodyContact from "../../components/body-contact/index";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Header solid />
      <BodyContact />
      <Footer />
    </div>
  );
}
