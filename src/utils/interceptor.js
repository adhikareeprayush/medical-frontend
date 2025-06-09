// src/utils/interceptors.js
export const setupInterceptors = (axiosInstance) => {
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Redirect to login or show error
        console.warn('Unauthorized. Redirecting...');
        // window.location.href = "/login";
      }
      return Promise.reject(error);
    },
  );
};
