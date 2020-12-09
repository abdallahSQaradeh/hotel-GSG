import React, { useState } from "react";
import "./index.css";
import Testimonial from "../testimonial/index";
import Button from "../UI/Button/index";
import Left from "../../assets/icons/left.svg";
import Right from "../../assets/icons/right.svg";
import data from "../../data/data.json";

export default function Testimonials() {
  const [testimonialId, setTestimonialId] = useState(0);
  const [testimonials] = useState(() => {
    return data.testimonials;
  });

  const clickHandleRight = () => {
    if (testimonialId + 1 > testimonials.length - 1) {
      setTestimonialId(0);
    } else setTestimonialId(testimonialId + 1);
  };
  const clickHandleLeft = () => {
    if (testimonialId - 1 < 0) {
      setTestimonialId(testimonials.length - 1);
    } else setTestimonialId(testimonialId - 1);
  };
  return (
    <div className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      {testimonials
        .filter((item, idx) => {
          return idx === testimonialId;
        })
        .map((testimonial) => (
          <Testimonial
            key={testimonial.author}
            author={testimonial.author}
            text={testimonial.text}
          />
        ))}
      <div className="testimonial-controls">
        <Button
          size="fit"
          Icon={Left}
          text=""
          clickHandle={() => clickHandleLeft()}
        />
        <Button
          size="fit"
          Icon={Right}
          text=""
          clickHandle={() => clickHandleRight()}
        />
      </div>
    </div>
  );
}
