import styled from 'styled-components';

export const Capture = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 1rem;
  margin: 7rem auto 0;
`;
export const TimeWrapper = styled.div`
  margin: 0.5rem 0 2rem 0;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  div:first-child {
    color: var(--green-darker, #2a6d0d);
    text-shadow: 3px 3px 4px rgba(42, 109, 13, 0.16);
    font-size: 1.5rem;
    font-weight: 800;
  }
  div:last-child {
    color: var(--brown-darker, #331b05);
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 20rem;
    margin: 0 auto;
    gap: 0.7rem;
}
`;
export const Km = styled.div`
  background: ${({ theme }) => theme.palette.green.dark};
  width: 5.375rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: var(--green-normal, #619d46);
  box-shadow: 2px 2px 4px 0px rgba(42, 109, 13, 0.16);
  color: var(--green-background, #fdfff5);
  font-size: 0.5rem;
  font-weight: 400;
  div:last-child {
    font-size: 1rem;
    font-weight: 700;
  }
`;
export const Location = styled.div`
  display: flex;
  border-radius: 0.5rem;
  background: var(--green-lighter, #e5ecc3);
  color: var(--brown-darker, #331b05);
  font-size: 0.5rem;
  width: 14rem;
  height: 1.75rem;
  justify-content: space-around;
  align-items: center;
  &:first-child {
    margin-bottom: 0.5rem;
  }
  div {
    font-weight: 700;
  }
`;
export const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 20rem;
  margin: 0 auto;
  margin-top: 1.75rem;
`;
export const AllCount = styled.div`
  background: ${({ theme }) => theme.palette.green.dark};
  border-radius: 0.5rem;
  color: var(--green-background, #fdfff5);
  font-family: LINE Seed Sans KR;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  width: 5.375rem;
  height: 7.3125rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.25rem;
  div:last-child {
    font-size: 1rem;
    font-weight: 700;
  }
`;
export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.7rem;
`;
export const Item = styled.div`
  border-radius: 0.3125rem;
  background: var(--green-lighter, #e5ecc3);
  width: 6.625rem;
  height: 1.25rem;
  display: flex;
  flex-direction: row;
  color: var(--brown-darker, #331b05);
  font-family: LINE Seed Sans KR;
  font-size: 0.4rem;
  font-style: normal;
  font-weight: 400;
  align-content: center;
  justify-content: space-around;
  align-items: center;
`;
export const Name = styled.div``;
export const Num = styled.div`
  color: var(--brown-darker, #331b05);
  text-align: center;
  font-size: 0.5rem;
  font-weight: 700;
`;
