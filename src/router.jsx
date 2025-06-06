// src/router.tsx
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import AdminLayout from './layouts/AdminLayout';

// Lazy imports
const Home = lazy(() => import('./routes/landing/index'));
const About = lazy(() => import('./routes/landing/about'));
const Pricing = lazy(() => import('./routes/landing/pricing'));
const Packages = lazy(() => import('./routes/landing/Packages'));
const News = lazy(() => import('./routes/landing/news'));
const NewsDetails = lazy(() => import('../src/components/landing/NewsDetails'));
const Services = lazy(() => import('./routes/landing/services'));
const ServicePage = lazy(() => import('./routes/landing/services/page'));
const Contact = lazy(() => import('./routes/landing/contact'));
const Departments = lazy(() => import('./routes/landing/departments'));
const DepartmentPage = lazy(() => import('./routes/landing/departments/page'));
const Teams = lazy(() => import('./routes/landing/team'));
const Gallery = lazy(() => import('./routes/landing/gallery'));
const AdminHome = lazy(() => import('./routes/admin/index'));
const Dashboard = lazy(() => import('./routes/admin/dashboard'));
const Login = lazy(() => import('./routes/admin/Login'));
const Settings = lazy(() => import('./routes/admin/settings'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'packages', element: <Packages /> },
      { path: 'news', element: <News /> },
      { path: 'news/:newsId', element: <NewsDetails /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <ServicePage /> },
      { path: 'departments', element: <Departments /> },
      { path: 'departments/:slug', element: <DepartmentPage /> },
      { path: 'team', element: <Teams /> },
      { path: 'gallery', element: <Gallery /> },
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
        ],
      },
    ],
  },
]);

export default router;
