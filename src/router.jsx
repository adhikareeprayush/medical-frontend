// src/router.tsx
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import AdminLayout from './layouts/AdminLayout';

// Lazy imports
const Home = lazy(() => import('./routes/landing/index'));
const About = lazy(() => import('./routes/landing/about'));
const Pricing = lazy(() => import('./routes/landing/pricing'));
const Services = lazy(() => import('./routes/landing/services'));

const AdminHome = lazy(() => import('./routes/admin/index'));
const Dashboard = lazy(() => import('./routes/admin/dashboard'));
const Users = lazy(() => import('./routes/admin/users'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'services', element: <Services /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'users', element: <Users /> },
    ],
  },
]);

export default router;
