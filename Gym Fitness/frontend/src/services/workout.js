// src/services/workout.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/workout";

// Get My Workouts
export const getMyWorkouts = async (token) => {
  const res = await axios.get(`${API_URL}/my`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// Create Workout
export const createWorkout = async (data, token) => {
  const res = await axios.post(`${API_URL}/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

// Update Workout
export const updateWorkout = async (id, data, token) => {
  const res = await axios.put(`${API_URL}/update/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

// Delete Workout
export const deleteWorkout = async (id, token) => {
  const res = await axios.delete(`${API_URL}/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
