import React from "react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    review: "Excellent care and friendly staff!",
  },
  {
    name: "Arjun Patel",
    review: "Very professional and modern facility.",
  },
  {
    name: "Meena Verma",
    review: "Doctors were kind and attentive. Highly recommend!",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blue-100 dark:bg-gray-800 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">What Patients Say</h2>
      <div className="text-center px-4 md:px-0 max-w-xl mx-auto">
        <p className="text-lg italic text-gray-600 dark:text-gray-300">"{testimonials[current].review}"</p>
        <p className="mt-2 font-semibold text-gray-800 dark:text-white">- {testimonials[current].name}</p>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
