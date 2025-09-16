import * as api from './api';

export const getAllDoctors = async () => {
  try {
    const response = await api.getAllDoctors();
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const createDoctor = async (doctorData) => {
  try {
    const response = await api.createDoctor(doctorData);
    return response.data;
  } catch (error) {
    console.error('Error creating doctor:', error);
    throw error;
  }
};

export const getDoctorById = async (id) => {
  try {
    const response = await api.getDoctorById(id);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctor by ID:', error);
    throw error;
  }
};

export const updateDoctorById = async (id, doctorData) => {
  try {
    const response = await api.updateDoctor(id, doctorData);
    return response.data;
  } catch (error) {
    console.error('Error updating doctor:', error);
    throw error;
  }
};

export const deleteDoctorById = async (id) => {
  try {
    const response = await api.deleteDoctor(id);
    return response.data;
  } catch (error) {
    console.error('Error deleting doctor:', error);
    throw error;
  }
};

export const getDoctorsByDepartment = async (departmentName) => {
  try {
    const response = await api.getDoctorsByDepartment(departmentName);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors by department:', error);
    throw error;
  }
};

export const getDoctorsBySpeciality = async (specialty) => {
  try {
    const response = await api.getDoctorsBySpeciality(specialty);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors by speciality:', error);
    throw error;
  }
};
