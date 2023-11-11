import instance from './instance';

export const requestAccessToken = async code => {
  const response = await instance.post(`oauth/kakao/login/access?code=${code}`);
  return response;
};

export const refreshAccessToken = async () => {
  const response = await instance.post(
    '/auth/refresh',
    {},
    { withCredentials: true },
  );
  const newToken = response.data.token;
  localStorage.setItem('access_token', newToken);
};

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
            await refreshAccessToken();
            const { config } = error;
            return await instance({
              method: config?.method,
              url: config?.url,
              data: config?.data,
            });
          } catch (e) {
            // 재발급 실패일 경우 로그인 페이지로 보낸다.
            window.location.href = 'https://plocky.site/auth';
          }
        }
        break;
      case 403:
        console.info('403: 권한 없음');
        try {
          await refreshAccessToken();
          const { config } = error;
          return await instance({
            method: config?.method,
            url: config?.url,
            data: config?.data,
          });
        } catch (e) {
          window.location.href = 'https://plocky.site/auth';
        }
        break;
      default:
        return Promise.reject(error);
    }
    return error;
  },
);
export default instance;
