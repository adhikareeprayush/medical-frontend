// src/utils/api.js
import axios from './axios';

// Auth
export const loginAdmin = (data) => axios.post('/admin/login', data);
export const registerAdmin = (data) => axios.post('/admin/register', data);

// Doctors
export const getDoctors = () => axios.get('/doctors');
