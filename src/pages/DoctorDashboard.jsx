import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axios.get("/api/doctor/patients");
        setPatients(res.data);
      } catch (err) {
        console.log("Error loading patients", err);
      }
    };

    fetchPatients();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Doctor Dashboard</h2>

      <h3 className="text-xl font-semibold mb-2">Assigned Patients</h3>
      <div className="space-y-2">
        {patients.map((p) => (
          <div key={p._id} className="border p-2 rounded shadow">
            <p><strong>Name:</strong> {p.name}</p>
            <p><strong>Problem:</strong> {p.reason}</p>
            <p><strong>Phone:</strong> {p.phone}</p>
          </div>
        ))}
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

export default DoctorDashboard;
