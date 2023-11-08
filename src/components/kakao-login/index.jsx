import styled from 'styled-components';
import kakao from '@/assets/icons/buttons/kakao.png';

export default function KakaoLogin() {
  const onClick = () => {
    const clientId = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const redirectUrl = import.meta.env.VITE_KAKAO_REDIRECT_URL;

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code`;
  };

  return (
    <KakaoLoginBtn type="button" onClick={onClick}>
      <img src={kakao} alt="카카오 로그인" />
    </KakaoLoginBtn>
  );
}

const KakaoLoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: white;
`;
