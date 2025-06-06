import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Suspense>
  );
}
