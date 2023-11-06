import instance from './instance';

export const requestAccessToken = async code => {
  const response = await instance.post('/oauth/kakao/login/access', code);

  return response;
};

export const refreshToken = async () => {
  const response = await instance.post(
    '/auth/refresh',
    {},
    { withCredentials: true },
  );
  const newToken = response.data.token;
  localStorage.setItem('access_token', newToken);
};
