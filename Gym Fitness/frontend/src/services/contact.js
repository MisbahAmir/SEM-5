import axios from "axios";

const API_URL = "http://localhost:5000/api/contact";

export const sendContactMessage = async (formData) => {
  return await axios.post(API_URL, formData);
};

export const getAllContacts = async () => {
  return await axios.get(API_URL);
};

export const deleteContact = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
