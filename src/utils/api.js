// src/utils/api.js
import axios from './axios';

// Auth
export const loginAdmin = (data) => axios.post('/admin/login', data);
export const registerAdmin = (data) => axios.post('/admin/register', data);

// Doctors
export const getDoctors = () => axios.get('/doctors');

// Contact
export const getContactDetails = () => axios.get('/contact');
export const updateContactDetails = (data) => axios.put('/contact/1', data);
