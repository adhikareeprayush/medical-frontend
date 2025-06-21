import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './router';
import Loading from './components/common/LoadingComp'; // Update path if different

const App = () => {

  return (
    <Suspense fallback={<Loading />}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
