import React, { useState } from "react";
import "./index.css";
import BannerLine from "../banner-line/index";

export default function HeaderBanner() {
  const [bannerLines] = useState([
    {
      text: "WELCOME TO",
      id: 1,
    },
    {
      text: "LUXURY",
      id: 2,
    },
    {
      text: "HOTELS",
      id: 3,
    },
    {
      text:
        "Book your stay and enjoy Luxury" +
        " redefined at the most affordable rates.",
      id: 4,
    },
  ]);
  return (
    <div className="header-banner">
      {bannerLines.map((line) => {
        return (
          <BannerLine
            key={`line+${line.id}`}
            lineNo={line.id}
            lineText={line.text}
          />
        );
      })}
    </div>
  );
}
