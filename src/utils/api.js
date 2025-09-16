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

// Packages
export const getAllPackages = () => axios.get('/package');
export const createPackage = (data) => axios.post('/package', data);
export const getPackageById = (id) => axios.get(`/package/${id}`);
export const updatePackage = (id, data) => axios.put(`/package/${id}`, data);
export const deletePackage = (id) => axios.delete(`/package/${id}`);

// Department
export const getAllDepartments = (limit) => {
  if (limit !== undefined) return axios.get(`/department?limit=${limit}`);
  else return axios.get('/department');
};
export const addDepartment = (data) => axios.post('/department', data);
export const getDepartmentById = (id) => axios.get(`/department/${id}`);
export const updateDepartmentById = (id, data) =>
  axios.put(`/department/${id}`, data);
export const deleteDepartment = (id) => axios.delete(`/department/${id}`);
export const getDepartmentBySlug = (slug) =>
  axios.get(`/department/slug/${slug}`);

// News
export const getAllNews = (limit) => {
  if (limit !== undefined) return axios.get(`/news?limit=${limit}`);
  else return axios.get('/news');
};
export const addNews = (data) => axios.post('/news', data);
export const getNewsById = (id) => axios.get(`/news/${id}`);
export const updateNewsById = (id, data) => axios.put(`/news/${id}`, data);
export const deleteNews = (id) => axios.delete(`/news/${id}`);
export const updateNewsLikes = (id) => axios.patch(`/news/${id}/likes`);
export const updateNewsViews = (id) => axios.patch(`/news/${id}/views`);

// Services
export const getAllServices = () => axios.get('/services');
export const addService = (data) => axios.post('/services', data);
export const getServiceById = (id) => axios.get(`/services/${id}`);
export const updateServiceById = (id, data) =>
  axios.put(`/services/${id}`, data);
export const deleteService = (id) => axios.delete(`/services/${id}`);
export const getServiceBySlug = (slug) => axios.get(`/services/slug/${slug}`);

// Inquiries
export const getAllInquiries = () => axios.get('/inquiries');
export const addInquiry = (data) => axios.post('/inquiries', data);
export const getInquiryById = (id) => axios.get(`/inquiries/${id}`);
export const updateInquiryById = (id, data) =>
  axios.put(`/inquiries/${id}`, data);
export const deleteInquiry = (id) => axios.delete(`/inquiries/${id}`);

// Testimonials
export const getAllTestimonials = () => axios.get('/testimonial');
export const addTestimonial = (data) => axios.post('/testimonial', data);
export const getTestimonialById = (id) => axios.get(`/testimonial/${id}`);
export const updateTestimonialById = (id, data) =>
  axios.put(`/testimonial/${id}`, data);
export const deleteTestimonial = (id) => axios.delete(`/testimonial/${id}`);

// Gallery
export const getAllGalleries = () => axios.get('/gallery');
export const createGallery = (data) => axios.post('/gallery', data);
export const getGalleryById = (id) => axios.get(`/gallery/${id}`);
export const updateGalleryById = (id, data) =>
  axios.put(`/gallery/${id}`, data);
export const deleteGalleryById = (id) => axios.delete(`/gallery/${id}`);
export const getGalleryMediaByGallery = (params) =>
  axios.get('/gallery/images', { params });

export const createGalleryMedia = (data) => axios.post('/gallery/image', data);
export const getGalleryMediaById = (id) => axios.get(`/gallery/image/${id}`);
export const updateGalleryMediaById = (id, data) =>
  axios.put(`/gallery/image/${id}`, data);
export const deleteGalleryMediaById = (id) =>
  axios.delete(`/gallery/image/${id}`);

// Specialities
export const getAllSpecialities = () => axios.get('/speciality');
export const addSpeciality = (data) => axios.post('/speciality', data);
export const getSpecialityById = (id) => axios.get(`/speciality/${id}`);
export const updateSpecialityById = (id, data) =>
  axios.put(`/speciality/${id}`, data);
export const deleteSpecialityById = (id) => axios.delete(`/speciality/${id}`);
