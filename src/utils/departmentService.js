// utils/departmentService.js
import * as api from './api';

export const getAllDepartments = async () => {
  try {
    const response = await api.getAllDepartments();
    return response.data;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

export const deleteDepartmentById = async (id) => {
  try {
    const response = await api.deleteDepartment(id);
    return response.data;
  } catch (error) {
    console.error('Error deleting department:', error);
    throw error;
  }
};

export const addDepartment = async (departmentData) => {
  try {
    const response = await api.createDepartment(departmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating department:', error);
    throw error;
  }
};

export const updateDepartmentById = async (id, departmentData) => {
  try {
    const response = await api.updateDepartment(id, departmentData);
    return response.data;
  } catch (error) {
    console.error('Error updating department:', error);
    throw error;
  }
};
