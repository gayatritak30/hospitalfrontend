import { useEffect, useState } from "react";
import axios from "../api/axios";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await axios.get("/appointments");
      setAppointments(res.data);
    };
    fetchAppointments();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Appointments</h2>
      <ul className="space-y-2">
        {appointments.map((appt, index) => (
          <li key={index} className="border p-2">
            {appt.name} with Dr. {appt.doctor} on {appt.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAppointments;
