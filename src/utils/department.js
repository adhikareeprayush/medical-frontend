import {
  getAllDepartments,
  getDepartmentById,
  getDepartmentBySlug,
} from './api';

export const getAllDepartments = async () => {
  try {
    const response = await getAllDepartments();
    return response.data;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};
