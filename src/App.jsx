import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import StickySidebar from './components/common/StickySidebar';

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
