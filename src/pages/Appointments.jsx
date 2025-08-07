import { useState } from "react";
import axios from "../api/axios";

const Appointments = () => {
  const [form, setForm] = useState({ name: "", phone: "", doctor: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/appointments", form);
      alert("Appointment booked successfully");
    } catch (err) {
      alert("Failed to book");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2" required />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full border p-2" required />
        <input name="doctor" placeholder="Doctor" onChange={handleChange} className="w-full border p-2" required />
        <input type="date" name="date" onChange={handleChange} className="w-full border p-2" required />
        <button type="submit" className="w-full bg-blue-600 text-white p-2">Book Now</button>
      </form>
    </div>
  );
};

export default Appointments;
