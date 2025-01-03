import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 120000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = localStorage.getItem('userToken');
      if (token) {
        config.headers['Authorization'] = `${token}`;
      }
    } catch (error) {
      console.error('Error retrieving auth token', error);
    }
    // Log the request
    // console.log('Request:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Log the response
    console.log('Response:', response.data);
    const { data } = response;
    if (data?.error) {
      console.warn(data.error_msg);
    }
    return response;
  },
  (error) => {
    // Check if unauthorized (401) and handle accordingly
    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized - possibly invalid token');
      // Optionally, navigate to login screen or refresh token here
    }
    // Handle other errors
    console.error('Response error:', error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
