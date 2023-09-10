"use client";

// pages/index.js or any other Next.js page or component
import React from "react";
import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    { review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    {
      review:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      review:
        "Ut333 enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis delectus animi expedita facere? Nihil magni natus assumenda? Soluta, iste?"
      ,
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex =
      currentIndex + 1 >= testimonials.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      currentIndex - 1 < 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };
  return (
    <div className="Testimonials">
      <button onClick={handlePrev}>Previous</button>
      <div className="testimonial2">
        {testimonials
          .slice(currentIndex, currentIndex + 3)
          .map((testimonial, index) => (
            <div className="reviewcard" key={index}>
              <p>{testimonial.review}</p>
            </div>
          ))}
      </div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Testimonials;
