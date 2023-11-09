import React, { useState } from 'react';
import styled from 'styled-components';
import {
  can,
  cigarette,
  glass,
  others,
  paper,
  plastic,
  vinyl,
  minus,
  plus,
} from '@/assets/icons/plogging/index';
import square from '@/assets/icons/background/square.png';
import squareLine from '@/assets/icons/background/squareLine.png';

const commonStyles = `
  border: none;
  background: transparent;
`;

const TrashModal = () => {
  //개수 여기에 저장
  const [counts, setCounts] = useState({
    cigarette: 0,
    plastic: 0,
    can: 0,
    paper: 0,
    glass: 0,
    vinyl: 0,
    others: 0,
  });

  const handleMinusClick = item => {
    if (counts[item] > 0) {
      setCounts(prevCounts => ({
        ...prevCounts,
        [item]: prevCounts[item] - 1,
      }));
    }
  };
  const handlePlusClick = item => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [item]: prevCounts[item] + 1,
    }));
  };
  return (
    <Container>
      <img src={square} style={{ width: '100%', height: '30vh' }} />
      <Line>
        <img src={squareLine} width={'104px'} />
      </Line>
      <ItemWrapper>
        <ItemBox>
          <img
            src={minus}
            width={'18px'}
            onClick={() => handleMinusClick('cigarette')}
          />
          <Item>
            <img src={cigarette} width={'24px'} />
            <span>담배꽁초</span>
            <Num>{counts.cigarette}</Num>
          </Item>
          <img
            src={plus}
            width={'18px'}
            onClick={() => handlePlusClick('cigarette')}
          />
        </ItemBox>
        <ItemBox>
          <img
            src={minus}
            width={'18px'}
            id="minus"
            onClick={() => handleMinusClick('plastic')}
          />
          <Item>
            <img src={plastic} width={'24px'} o />
            <span>플라스틱</span>
            <Num>{counts.plastic}</Num>
          </Item>
          <img
            src={plus}
            width={'18px'}
            id="plus"
            onClick={() => handlePlusClick('plastic')}
          />
        </ItemBox>
        <ItemBox>
          <img
            src={minus}
            width={'18px'}
            id="minus"
            onClick={() => handleMinusClick('can')}
          />
          <Item>
            <img src={can} width={'24px'} />
            <span>캔</span>
            <Num>{counts.can}</Num>
          </Item>
          <img
            src={plus}
            width={'18px'}
            id="plus"
            onClick={() => handlePlusClick('can')}
          />
        </ItemBox>
        <ItemBox>
          <img
            src={minus}
            width={'18px'}
            id="minus"
            onClick={() => handleMinusClick('paper')}
          />
          <Item>
            <img src={paper} width={'24px'} />
            <span>종이</span>
            <Num>{counts.paper}</Num>
          </Item>
          <img
            src={plus}
            width={'18px'}
            id="plus"
            onClick={() => handlePlusClick('paper')}
          />
        </ItemBox>
        <ItemBox>
          <img
            src={minus}
            width={'18px'}
            id="minus"
            onClick={() => handleMinusClick('glass')}
          />
          <Item>
            <img src={glass} width={'24px'} />
            <span>유리</span>
            <Num>{counts.glass}</Num>
          </Item>
          <img
            src={plus}
            width={'18px'}
            id="plus"
            onClick={() => handlePlusClick('glass')}
          />
        </ItemBox>
        <ItemBox>
          <img
            src={minus}
            width={'18px'}
            id="minus"
            onClick={() => handleMinusClick('vinyl')}
          />
          <Item>
            <img src={vinyl} width={'24px'} />
            <span>비닐</span>
            <Num>{counts.vinyl}</Num>
          </Item>
          <img
            src={plus}
            width={'18px'}
            id="plus"
            onClick={() => handlePlusClick('vinyl')}
          />
        </ItemBox>
        <ItemBox>
          <img
            src={minus}
            width={'18px'}
            id="minus"
            onClick={() => handleMinusClick('others')}
          />
          <Item>
            <img src={others} width={'24px'} />
            <span>기타</span>
            <Num>{counts.others}</Num>
          </Item>
          <img
            src={plus}
            width={'18px'}
            id="plus"
            onClick={() => handlePlusClick('others')}
          />
        </ItemBox>
      </ItemWrapper>
    </Container>
  );
};

const Container = styled.button`
  ${commonStyles}
  width: 100%;
  position: relative;
`;
const Line = styled.button`
  ${commonStyles}
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  margin-top: 0.5rem;
`;
const ItemWrapper = styled.button`
  ${commonStyles}
  width: 100%;
  height: 100%;
  padding: 2rem 1rem 1.5rem;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 0;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ItemBox = styled.button`
  ${commonStyles}
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.button`
  ${commonStyles}
  width: 2.5rem;
  font-size: 0.375rem;
  font-weight: 800;
  color: white;
  margin: 0 0.2rem;
`;

const Num = styled.button`
  ${commonStyles}
  width: 100%;
  color: white;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 800;
`;

export default TrashModal;
