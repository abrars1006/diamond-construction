import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor for error handling, loading states, auth headers, etc could go here

export default api;
