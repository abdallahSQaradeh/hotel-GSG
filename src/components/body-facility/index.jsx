import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import data from "../../data/data.json";
import "./index.css";
import Loader from "../UI/loader/loader";
import Facility from "../facility/index";

const initialState = {
  loading: false,
  error: false,
  images: [],
  ready: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        loading: false,
        error: false,
        images: action.data,
        ready: true,
      };
    case "fail":
      return { ...state, loading: false, error: action.error, ready: false };
    case "pending":
      return { ...state, loading: true, ready: false };
    default:
      throw new Error(`something went wrong ${action}`);
  }
};

export default function BodyFacility(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { images, loading, ready, error } = state;
  useEffect(() => {
    dispatch({ type: "pending" });
    axios
      .get(
        "https://api.pexels.com/v1/search?query=hotel-furniture&size=small&per_page=7&page=1&orientation=square",
        {
          headers: {
            Authorization:
              "563492ad6f917000010000014efedf2aaca34e57b0cb02d1726c6040",
          },
        }
      )
      .then((res) => res.data.photos)
      .then((res) => {
        console.log(res);
        dispatch({ type: "success", data: res });
      })
      .catch((err) => {
        dispatch({ type: "fail", error: err });
      });
  }, []);

  const { myRef } = props;
  return (
    <div className="body-facility" ref={myRef}>
      <div className="body-header">
        <h2 className="facility-title">{data.facilitiesPage.title}</h2>
        <p className="facility-title-description">
          {data.facilitiesPage.description}
        </p>
      </div>
      <div className="facility-list">
        {loading && <Loader />}
        {error && <div>Something went wrong</div>}
        {ready &&
          images.map((img) => {
            return (
              <Facility
                key={img.photographer}
                alt={img.photographer}
                src={img.src.original}
                caption={img.photographer}
              />
            );
          })}
      </div>
    </div>
  );
}
BodyFacility.propTypes = {
  myRef: PropTypes.elementType.isRequired,
};
