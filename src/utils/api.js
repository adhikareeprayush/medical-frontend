// src/utils/api.js
import axios from './axios';

// Auth
export const loginAdmin = (data) => axios.post('/admin/login', data);
export const registerAdmin = (data) => axios.post('/admin/register', data);

// Doctors
export const getAllDoctors = () => axios.get('/doctor');
export const createDoctor = (data) => axios.post('/doctor', data);
export const getDoctorById = (id) => axios.get(`/doctor/${id}`);
export const updateDoctor = (id, data) => axios.put(`/doctor/${id}`, data);
export const deleteDoctor = (id) => axios.delete(`/doctor/${id}`);
export const getDoctorsByDepartment = (departmentName) =>
  axios.get(`/doctor/department/${departmentName}`);
export const getDoctorsBySpeciality = (specialty) =>
  axios.get(`/doctor/speciality/${specialty}`);

// Contact
export const getContactDetails = () => axios.get('/contact');
export const updateContactDetails = (data) => axios.put('/contact/1', data);
export const getSocialLinks = () => axios.get('sociallink');
export const updateSocialLinks = (data) => axios.put('/sociallink/1', data);
