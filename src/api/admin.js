// src/api/admin.js
import axios from "./axios";

export const getAllUsers = async (token) => {
  const res = await axios.get("/admin/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getAllAppointments = async (token) => {
  const res = await axios.get("/admin/appointments", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
