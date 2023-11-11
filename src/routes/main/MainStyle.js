import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin-top: 2rem;
  flex: 1;
  overflow: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 62px;
`;
export const PetName = styled.div`
  height: 1.75rem;
  padding-top: 0.25rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
export const ExpBar = styled.div`
  width: 15.5rem;
  margin: 0.5rem auto 0;
`;

export const Caption = styled.div`
  color: ${({ theme }) => theme.palette.brown.darker};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 0.5rem;
  text-align: right;
  margin: 0.31rem 0.05rem 0 0;
`;

export const RankWrapper = styled.div`
  background-color: white;
  width: 18rem;
  margin: 2.5rem auto 0;
`;

export const RankBox = styled.div`
  position: relative;
  margin-top: 1rem;
  &:last-child,
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    filter: drop-shadow(0px 4px 8px rgba(97, 157, 70, 0.24));
  }
`;
export const Rank = styled.div`
  position: absolute;
  top: 0.9rem;
  left: 1.25rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.palette.brown.darker};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export const RankImage = styled.div`
  position: absolute;
  top: 0.63rem;
  left: 2.81rem;
  z-index: 999;
  width: 40px;
  div {
    position: absolute;
    top: 0.15rem;
  }
`;
export const Username = styled.div`
  position: absolute;
  top: 1.06rem;
  left: 5.94rem;
  color: ${({ theme }) => theme.palette.brown.darker};
  font-size: ${({ theme }) => theme.fontSize.base};
`;
export const UserKm = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1rem;
  color: ${({ theme }) => theme.palette.green.darker};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const GoPlogging = styled.div`
  margin-top: 1.5rem;
  drop-shadow(0px 4px 8px 0px rgba(42, 0, 0, 0.1));
`;

export const Level = styled.div`
  display: inline;
  margin-left: 2rem;
`;

export const PetImg = styled.div`
  width: 160px;
  margin: 0 auto;
`;
