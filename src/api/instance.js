import axios from 'axios';
import { refreshToken } from '@api/auth';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(config => {
  // instance가 서버에 request를 보내기 전에 모두 가로채서 먼저 headers 설정을 해주는 인터셉터.
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.code === 'ECONNABORTED') {
      alert('서버에 이상이 있습니다.');
    }
    switch (error.response?.status) {
      case 401:
        console.info('401: 인증정보 없음');
        // 서버에 access token이 문제였는지 확인하는 메세지 설정 필요
        if (error.message === 'invalid access token') {
          try {
            // refresh token으로 access token 재발급을 시도하고, 에러가 난 config을 가져와 재요청한다.
            await refreshToken();
            const { config } = error;
            return await instance({
              method: config?.method,
              url: config?.url,
              data: config?.data,
            });
          } catch (e) {
            // 재발급 실패일 경우 로그인 페이지로 보낸다.
            return (window.location.href = 'https://plocky.site/auth');
          }
        }
      case 403:
        console.info('403: 권한 없음');
        try {
          await refreshToken();
          const { config } = error;
          return await instance({
            method: config?.method,
            url: config?.url,
            data: config?.data,
          });
        } catch (e) {
          return (window.location.href = 'https://plocky.site/auth');
        }
      default:
        return Promise.reject(error);
    }
  },
);

export default instance;
