// src/components/Testimonials.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Ravi Kumar",
    feedback: "Excellent staff and facilities. I had a great experience!",
  },
  {
    name: "Meena Joshi",
    feedback: "The doctors were very supportive and helpful. Highly recommended.",
  },
  {
    name: "Amit Sharma",
    feedback: "Clean environment and timely service. Will visit again if needed.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Patients Say</h2>
      <Slider {...settings} className="max-w-xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="text-center p-4 bg-white rounded shadow">
            <p className="italic mb-2">"{t.feedback}"</p>
            <p className="font-semibold">- {t.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
