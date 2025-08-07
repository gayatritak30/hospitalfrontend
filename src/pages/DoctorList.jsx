import React, { useState } from 'react';
import { FaSearch, FaUserMd, FaStethoscope } from 'react-icons/fa';

const doctorsData = [
  {
    name: "Dr. Aarav Mehta",
    gender: "male",
    specialty: "Cardiology",
    image: "https://cdn.pixabay.com/photo/2017/08/06/04/00/doctor-2585733_960_720.jpg",
  },
  {
    name: "Dr. Priya Sharma",
    gender: "female",
    specialty: "Dermatology",
    image: "https://cdn.pixabay.com/photo/2018/03/01/14/40/woman-3190849_1280.jpg",
  },
  {
    name: "Dr. Rohan Verma",
    gender: "male",
    specialty: "Neurology",
    image: "https://cdn.pixabay.com/photo/2016/11/14/04/40/doctor-1822465_1280.jpg",
  },
  {
    name: "Dr. Kavita Patil",
    gender: "female",
    specialty: "Pediatrics",
    image: "https://cdn.pixabay.com/photo/2017/08/06/06/03/female-2585767_1280.jpg",
  },
  {
    name: "Dr. Suresh Nair",
    gender: "male",
    specialty: "Orthopedics",
    image: "https://cdn.pixabay.com/photo/2016/12/06/18/27/doctor-1886768_1280.jpg",
  },
  {
    name: "Dr. Neha Kulkarni",
    gender: "female",
    specialty: "Gynecology",
    image: "https://cdn.pixabay.com/photo/2017/08/10/03/47/people-2614566_1280.jpg",
  },
  {
    name: "Dr. Aman Gupta",
    gender: "male",
    specialty: "Psychiatry",
    image: "https://cdn.pixabay.com/photo/2017/01/17/15/12/doctor-1985720_1280.jpg",
  },
  {
    name: "Dr. Anjali Desai",
    gender: "female",
    specialty: "ENT",
    image: "https://cdn.pixabay.com/photo/2019/12/30/09/20/doctor-4723653_1280.jpg",
  },
  {
    name: "Dr. Rahul Singh",
    gender: "male",
    specialty: "Urology",
    image: "https://cdn.pixabay.com/photo/2017/07/05/18/49/doctor-2475875_1280.jpg",
  },
  {
    name: "Dr. Sneha Iyer",
    gender: "female",
    specialty: "Radiology",
    image: "https://cdn.pixabay.com/photo/2017/08/07/02/32/female-2607291_1280.jpg",
  },
];

const DoctorList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 6;

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSpecialty === "" || doctor.specialty === selectedSpecialty)
  );

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  const specialties = [...new Set(doctorsData.map((doc) => doc.specialty))];

  return (
    <div className="min-h-screen p-4 bg-blue-50">
      <h1 className="text-3xl text-center font-bold mb-4 text-blue-800">Our Doctors</h1>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 px-4">
        <div className="flex items-center border rounded-md bg-white px-3 py-2 shadow">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by name"
            className="outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="px-4 py-2 border rounded-md shadow bg-white"
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          <option value="">All Specialties</option>
          {specialties.map((spec, index) => (
            <option key={index} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {currentDoctors.map((doctor, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-56 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-bold text-blue-700 mb-1">{doctor.name}</h3>
            <p className="text-gray-700 flex items-center mb-1">
              <FaUserMd className="mr-2" /> {doctor.gender.charAt(0).toUpperCase() + doctor.gender.slice(1)}
            </p>
            <p className="text-gray-700 flex items-center mb-3">
              <FaStethoscope className="mr-2" /> {doctor.specialty}
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white text-blue-600 border"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
