import React from "react";

const services = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Rahul Mehta",
    specialty: "Neurologist",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Aditi Verma",
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/150",
  },
];

const Services = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((doc, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-4 rounded-xl text-center border"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{doc.name}</h3>
            <p className="text-gray-600">{doc.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
