import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apptRes = await axios.get("/api/appointments");
        const docRes = await axios.get("/api/doctors");

        setAppointments(apptRes.data);
        setDoctors(docRes.data);
      } catch (err) {
        console.log("Error loading data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">All Appointments</h3>
        <div className="space-y-2">
          {appointments.map((appt) => (
            <div key={appt._id} className="border p-2 rounded shadow">
              <p><strong>Patient:</strong> {appt.name}</p>
              <p><strong>Phone:</strong> {appt.phone}</p>
              <p><strong>Date:</strong> {appt.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Doctors List</h3>
        <div className="space-y-2">
          {doctors.map((doc) => (
            <div key={doc._id} className="border p-2 rounded shadow">
              <p><strong>Name:</strong> Dr. {doc.name}</p>
              <p><strong>Specialty:</strong> {doc.specialty}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
