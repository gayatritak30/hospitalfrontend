// src/pages/admin/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get('/appointments'); // Backend: /api/appointments
        setAppointments(res.data);
      } catch (err) {
        console.error('Failed to fetch appointments:', err);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <h3 className="text-xl font-semibold mb-2">All Booked Appointments</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 text-sm rounded shadow">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center">
                  No appointments found.
                </td>
              </tr>
            ) : (
              appointments.map((app, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="p-3">{app.name}</td>
                  <td className="p-3">{app.email}</td>
                  <td className="p-3">{app.phone}</td>
                  <td className="p-3">{app.date}</td>
                  <td className="p-3">{app.department}</td>
                  <td className="p-3">{app.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
