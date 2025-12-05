import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const getAllUsers = async (token) => {
  const res = await axios.get(`${API}/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
