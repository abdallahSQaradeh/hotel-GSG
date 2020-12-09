import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export default function FooterItem(props) {
  const { text, icon } = props;
  return (
    <div className="footer-item">
      {icon && (
        <icon>
          <img src={icon} alt={text} />
        </icon>
      )}

      <div className={`${icon ? "ml" : ""}`}>{text}</div>
    </div>
  );
}
FooterItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};
FooterItem.defaultProps = {
  icon: "",
};
