import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.message || err.message };
  }
};

// Login
export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.message || err.message };
  }
};
