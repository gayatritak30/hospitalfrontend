import React from "react";

const doctors = [
  {
    name: "Dr. Aarti Mehra",
    specialization: "Cardiologist",
    experience: "12+ Years",
    image: "https://i.ibb.co/YfGCYYz/doctor1.jpg",
  },
  {
    name: "Dr. Rakesh Gupta",
    specialization: "Neurologist",
    experience: "10+ Years",
    image: "https://i.ibb.co/2M1ks0Z/doctor2.jpg",
  },
  {
    name: "Dr. Naina Shah",
    specialization: "Gynecologist",
    experience: "8+ Years",
    image: "https://i.ibb.co/d2cPXpf/doctor3.jpg",
  },
];

const DoctorList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Our Experienced Doctors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
            <p className="text-blue-700">{doctor.specialization}</p>
            <p className="text-sm text-gray-500 mt-1">{doctor.experience} Experience</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
