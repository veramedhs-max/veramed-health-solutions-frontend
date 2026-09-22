import axios from 'axios';

// Get the base URL from environment variables, with a fallback for development
const baseURL = import.meta.env.VITE_API_BASE_URL 


export const apiClient = axios.create({baseURL});
