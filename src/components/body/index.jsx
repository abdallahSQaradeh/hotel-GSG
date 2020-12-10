import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./index.css";
import BodyItem from "../body-item/index";
import Testimonials from "../testiminials/index";
import Loader from "../UI/loader/loader";
import data from "../../data/data.json";

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
export default function Body(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { images, loading, ready, error } = state;
  const { texts } = data.homePage;
  useEffect(() => {
    dispatch({ type: "pending" });

    axios
      .get(
        "https://api.pexels.com/v1/search?query=hotels&size=small&per_page=2",
        {
          headers: {
            Authorization:
              "563492ad6f917000010000014efedf2aaca34e57b0cb02d1726c6040",
          },
        }
      )
      .then((res) => res.data.photos)
      .then((res) => {
        dispatch({ type: "success", data: res });
      })
      .catch((err) => {
        dispatch({ type: "fail", error: err });
      });
  }, []);
  return (
    <div className="body">
      <h3 className="body-title">{data.homePage.bodyTitle}</h3>
      {loading ? <Loader /> : null}
      {ready
        ? images.map((item, idx) => {
            return (
              <BodyItem
                key={item.id}
                imgTitle={`${item.photographer}${idx + Math.random()}` + `body`}
                src={item.src.original}
                text={texts[idx].text}
                title={texts[idx].title}
              />
            );
          })
        : null}
      {error ? <div>Something went wrong</div> : null}
      <Testimonials />
    </div>
  );
}
