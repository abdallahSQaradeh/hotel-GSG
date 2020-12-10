import React from "react";
import "./index.css";
import PropsTypes from "prop-types";

export default function ScrollButton(props) {
  const { text, icon, scrollTo } = props;
  return (
    <a href={scrollTo}>
      <div role="button" tabIndex={0} className="scroll-button">
        <div>{text}</div>

        <img className="scroll-icon" src={icon} alt={text} />
      </div>
    </a>
  );
}

ScrollButton.propTypes = {
  text: PropsTypes.string.isRequired,
  icon: PropsTypes.elementType.isRequired,
  scrollTo: PropsTypes.string.isRequired,
};
