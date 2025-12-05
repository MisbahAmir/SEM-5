import axios from "axios";

const BASE_URL = "/api/nutrition";
const token = localStorage.getItem("token");
const config = { headers: { Authorization: `Bearer ${token}` } };

export const getNutrition = async () => {
  const res = await axios.get(BASE_URL, config);
  return res.data;
};

export const addNutrition = async (data) => {
  const res = await axios.post(BASE_URL, data, config);
  return res.data;
};

export const updateNutrition = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/${id}`, data, config);
  return res.data;
};

export const deleteNutrition = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`, config);
  return res.data;
};
