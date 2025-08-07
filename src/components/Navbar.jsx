import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">MedCare</div>
        <div className="flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/appointment">Book Appointment</Link>
          <Link to="/doctorlist">Doctors</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
