import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Appointment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedDoctor = queryParams.get("doctor") || "";

  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    if (selectedDoctor) {
      setDoctorName(selectedDoctor);
    }
  }, [selectedDoctor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with Dr. ${doctorName}`);
    // Add your API call here if needed
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Book Appointment</h2>

        <label className="block mb-2 font-semibold">Patient Name</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          placeholder="Enter your name"
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 font-semibold">Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 font-semibold">Doctor Name</label>
        <input
          type="text"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          placeholder="Enter Doctor Name"
          className="w-full border p-2 rounded mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Appointment;
