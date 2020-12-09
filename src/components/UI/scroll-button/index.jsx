import React from "react";
import "./index.css";
import PropsTypes from "prop-types";

function scrollHandle(e, ref) {
  ref.current.scrollIntoView();
}
export default function ScrollButton(props) {
  const { text, icon, scrollTo } = props;
  return (
    <div
      role="button"
      tabIndex={0}
      className="scroll-button"
      onClick={(e) => scrollHandle(e, scrollTo)}
      onKeyDown={(e) => scrollHandle(e, scrollTo)}
    >
      <div>{text}</div>

      <img className="scroll-icon" src={icon} alt={text} />
    </div>
  );
}

ScrollButton.propTypes = {
  text: PropsTypes.string.isRequired,
  icon: PropsTypes.elementType.isRequired,
  scrollTo: PropsTypes.elementType.isRequired,
};
