import React, { useEffect, useReducer } from "react";
import "./index.css";
import axios from "axios";
import Loader from "../UI/loader/loader";
import data from "../../data/data.json";
import Room from "../room/index";

const initialState = {
  loading: false,
  error: false,
  images: [],
  imagesCollections: [],
  ready: false,
};
const reducer = (state, action) => {
  const collections = [...state.imagesCollections];
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
    case "add-collection":
      // eslint-disable-next-line no-case-declarations
      let collection = [];
      for (let i = 0; i < state.images.length; i += 1) {
        collection.push({
          url: state.images[i].src.original,
        });
        if (collection.length === 3) {
          collections.push([...collection]);
          collection = [];
        }
      }
      // eslint-disable-next-line no-case-declarations
      return { ...state, imagesCollections: collections };
    default:
      throw new Error(`something went wrong ${action}`);
  }
};

export default function BodyRoom(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { imagesCollections, loading, ready, error, images } = state;
  useEffect(() => {
    dispatch({ type: "pending" });
    axios
      .get(
        "https://api.pexels.com/v1/search?query=rooms&size=small&per_page=9&page=1&orientation=square",
        {
          headers: {
            Authorization: process.env.REACT_APP_PEXELS_KEY,
          },
        }
      )
      .then((res) => res.data.photos)
      .then((res) => {
        dispatch({ type: "success", data: res });
        dispatch({ type: "add-collection" });
      })
      .catch((err) => {
        dispatch({ type: "fail", error: err });
      });
  }, []);

  return (
    <div className="body-room">
      <div className="body-header">
        <h2 className="room-title">{data.roomPage.title}</h2>
        <p className="room-title-description">{data.roomPage.description}</p>
      </div>
      <div className="room-list">
        {loading && <Loader />}
        {error && <div>Something went wrong</div>}
        {ready &&
          imagesCollections.map((img, idx) => {
            return (
              <Room
                images={img}
                caption={images[idx].photographer}
                price="$155"
                key={`idx${idx + Math.random()}`}
              />
            );
          })}
      </div>
    </div>
  );
}
