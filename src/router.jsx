// src/router.tsx
import React from 'react';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import AdminLayout from './layouts/AdminLayout';
import IndividualDoc from './components/landing/IndividualDoc';

// Lazy imports
const Home = lazy(() => import('./routes/landing/index'));
const About = lazy(() => import('./routes/landing/about'));
const Pricing = lazy(() => import('./routes/landing/pricing'));
const Packages = lazy(() => import('./routes/landing/Packages'));
const PackagePage = lazy(() => import('./components/landing/PackagePage'));
const News = lazy(() => import('./routes/landing/news'));
const NewsDetails = lazy(() => import('../src/components/landing/NewsDetails'));
const Services = lazy(() => import('./routes/landing/services'));
const ServicePage = lazy(() => import('./routes/landing/services/page'));
const Contact = lazy(() => import('./routes/landing/contact'));
const Departments = lazy(() => import('./routes/landing/departments'));
const DepartmentPage = lazy(() => import('./routes/landing/departments/page'));
const Doctors = lazy(() => import('./routes/landing/doctors'));
const DoctorPage = lazy(() => import('./components/landing/IndividualDoc'));
const Gallery = lazy(() => import('./routes/landing/gallery'));
const SingleGallery = lazy(() => import('./routes/landing/gallery/page'));
const AdminHome = lazy(() => import('./routes/admin/index'));
const Dashboard = lazy(() => import('./routes/admin/dashboard'));
const Login = lazy(() => import('./routes/admin/Login'));
const Settings = lazy(() => import('./routes/admin/settings'));
const DoctorsAdmin = lazy(() => import('./routes/admin/doctorsAdmin'));
const DepartmentAdmin = lazy(() => import('./routes/admin/department'));
const PackageAdmin = lazy(() => import('./routes/admin/packagesAdmin'));
const NewsAdmin = lazy(() => import('./routes/admin/newsAdmin'));
const ServicesAdmin = lazy(() => import('./routes/admin/servicesAdmin'));
const InquiriesAdmin = lazy(() => import('./routes/admin/inquiriesAdmin'));
const TestimonialAdmin = lazy(() => import('./routes/admin/testimonialAdmin'));
const GalleryAdmin = lazy(() => import('./routes/admin/galleryAdmin'));
const Appointment = lazy(() => import('./routes/landing/appointment'));
const AppointmentAdmin = lazy(() => import('./routes/admin/appointmentAdmin'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'packages', element: <Packages /> },
      { path: 'packages/:slug', element: <PackagePage /> },
      { path: 'news', element: <News /> },
      { path: 'news/:newsId', element: <NewsDetails /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <ServicePage /> },
      { path: 'departments', element: <Departments /> },
      { path: 'departments/:slug', element: <DepartmentPage /> },
      { path: 'ClinicalDepartment/:slug', element: <DepartmentPage /> },
      { path: 'doctors', element: <Doctors /> },
      { path: 'doctors/:slug', element: <DoctorPage /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'gallery/:id', element: <SingleGallery /> },
      { path: 'appointment', element: <Appointment /> },
    ],
  },
  {
    path: '/admin',
    children: [
      { index: true, element: <Login /> },
      {
        path: '',
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminHome /> },
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'settings', element: <Settings /> },
          { path: 'packages', element: <PackageAdmin /> },
          { path: 'news', element: <NewsAdmin /> },
          { path: 'services', element: <ServicesAdmin /> },
          { path: 'doctors', element: <DoctorsAdmin /> },
          { path: 'inquiries', element: <InquiriesAdmin /> },
          { path: 'testimonial', element: <TestimonialAdmin /> },
          { path: 'gallery', element: <GalleryAdmin /> },
          { path: 'departments', element: <DepartmentAdmin /> },
          { path: 'appointments', element: <AppointmentAdmin /> },
        ],
      },
    ],
  },
]);

export default router;
