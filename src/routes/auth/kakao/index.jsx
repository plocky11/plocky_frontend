import React, { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { requestAccessToken } from '@/api/auth';
import Loading from '@/components/loading';

export default function RedirectedKakao() {
  useEffect(() => {
    async function getToken() {
      const code = new URL(window.location.href).searchParams.get('code');
      if (code) {
        const loginRes = await requestAccessToken(code);
        localStorage.setItem('access_token', loginRes.data.token);
        console.log('requestAccessToken', loginRes.data.token);
        if (loginRes.data.token != null) {
          window.location.href = 'http://localhost:3000/';
        }
      } else {
        redirect('/login');
      }
    }

    getToken();
  }, []);

  return <Loading />;
}
