import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(config => {
  // instance가 서버에 request를 보내기 전에 모두 가로채서 먼저 headers 설정을 해주는 인터셉터.
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'access_token',
  )}`;
  return config;
});

export default instance;
