import {
  getPackageById,
  getAllPackages,
  updatePackage,
  deletePackage,
  createPackage,
} from './api';

export const fetchPackageById = async (id) => {
  try {
    const response = await getPackageById(id);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllPackages = async () => {
  try {
    const response = await getAllPackages();
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editPackage = async (id, data) => {
  try {
    const response = await updatePackage(id, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removePackage = async (id) => {
  try {
    const response = await deletePackage(id);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addPackage = async (data) => {
  try {
    const response = await createPackage(data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
