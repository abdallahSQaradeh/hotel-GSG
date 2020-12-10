import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import SimpleImageSlider from "react-simple-image-slider";
import CircleButton from "../UI/circle-button/index";
import Button from "../UI/Button/index";

export default function Room(props) {
  const { caption, price, images } = props;
  return (
    <div className="room">
      <figure className="room-figure">
        <SimpleImageSlider
          slideDuration={1}
          images={images}
          width="100%"
          height={841}
          showBullets
          showNavs
          useGPURender
        />
        {/* <img className="room-img" src={src} alt={alt} /> */}
        <figcaption className="room-caption">{caption}</figcaption>
      </figure>
      <div className="room-footer">
        <div className="room-details">
          <div>
            <CircleButton text="+" size="fit" />
          </div>
          <p className="view-details">VIEW ROOM DETAILS</p>
        </div>
        <div className="book-room">
          <Button size="" text="Avg/night" price={price} />
        </div>
      </div>
    </div>
  );
}

Room.propTypes = {
  // src: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  images: PropTypes.array.isRequired,
  caption: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
