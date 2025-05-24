// src/utils/api.js
import axios from "./axios";

// Auth
export const loginUser = (data) => axios.post("/auth/login", data);
export const registerUser = (data) => axios.post("/auth/register", data);

// Users
export const getUsers = () => axios.get("/users");
export const getUserById = (id) => axios.get(`/users/${id}`);

// Doctors
export const getDoctors = () => axios.get("/doctors");
