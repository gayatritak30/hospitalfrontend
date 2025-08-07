import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Aarav Singh",
    feedback: "Amazing service and very caring doctors!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Meera Joshi",
    feedback: "The booking system is smooth and hassle-free.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Karan Malhotra",
    feedback: "Clean and modern facilities. Highly recommended!",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <div className="text-center py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">What Our Patients Say</h2>
      <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <img
          src={current.image}
          alt={current.name}
          className="w-20 h-20 mx-auto rounded-full mb-4"
        />
        <p className="italic text-gray-700">"{current.feedback}"</p>
        <h4 className="mt-4 font-semibold text-lg">{current.name}</h4>
      </div>
    </div>
  );
};

export default Testimonials;
