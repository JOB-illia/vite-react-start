import axios from 'axios';

export const baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

export const client = axios.create({
  baseURL,

  // TODO undefined options
  // proxyHeaders: false,
  // credentials: false,
});

client.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
