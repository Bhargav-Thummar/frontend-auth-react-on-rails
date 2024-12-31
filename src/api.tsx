import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const authToken = localStorage.getItem("authToken"); 
    if (authToken) {
      config.headers = {
        ...config.headers,
        Authorization: authToken,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
