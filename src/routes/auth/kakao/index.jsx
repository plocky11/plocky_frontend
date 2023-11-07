import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { requestAccessToken } from '@/api/auth';
import Loading from '@/components/loading';

export default function RedirectedKakao() {
  const navigate = useNavigate();

  useEffect(() => {
    async function getToken() {
      const code = new URL(window.location.href).searchParams.get('code');
      if (code) {
        const loginRes = await requestAccessToken(code);
        console.log(loginRes);
        if (loginRes) {
          navigate('/');
        }
      } else {
        navigate('/auth');
      }
    }

    getToken();
  }, []);

  return <Loading />;
}
