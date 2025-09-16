import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './router';

const App = () => {
  return (
    <main>
      <ToastContainer />
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
