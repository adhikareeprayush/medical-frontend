import { getAllDoctors } from './api';

/**
 * Fetch all doctors and transform into UI-ready card array
 * @returns {Promise<Array>} Array of doctor objects with id, name, and image
 */

export const getDoctorsCards = async () => {
  try {
    const response = await getAllDoctors();
    if (
      !response.data ||
      !response.data.data ||
      response.data.data.length === 0
    ) {
      console.warn('No doctors found');
      return [];
    }
    return response.data.data.map((doctor) => ({
      id: doctor.id,
      name: doctor.name,
      image: doctor.image,
    }));
  } catch (error) {
    console.error('Failed to fetch doctors:', error);
    return [];
  }
};
