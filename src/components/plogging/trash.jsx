import React, { useState } from 'react';
import styled from 'styled-components';
import can from '@/assets/icons/plogging/can.png';
import cigarette from '@/assets/icons/plogging/cigarette.png';
import glass from '@/assets/icons/plogging/glass.png';
import others from '@/assets/icons/plogging/others.png';
import paper from '@/assets/icons/plogging/paper.png';
import plastic from '@/assets/icons/plogging/plastic.png';
import vinyl from '@/assets/icons/plogging/vinyl.png';
import minus from '@/assets/icons/plogging/minus.png';
import plus from '@/assets/icons/plogging/plus.png';
import square from '@/assets/icons/background/square.png';
import squareLine from '@/assets/icons/background/squareLine.png';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  margin-top: 0.2rem;
`;

const ItemWrapper = styled.div`
  height: 70%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
`;

const Item = styled.div`
  width: 1.5rem;
  font-size: 0.375rem;
  font-weight: 800;
  color: white;
  margin: 0 0.5rem;
`;

const Num = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 800;
`;

const ClickableItem = styled.div``;
function Trash() {
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
      <img
        src={square}
        style={{ width: '100%', height: '30vh', minHeight: '207px' }}
        alt="trash"
      />
      <Line>
        <img src={squareLine} width="104px" alt="line" />
      </Line>
      <ItemWrapper>
        <ItemBox>
          <ClickableItem onClick={() => handleMinusClick('cigarette')}>
            <img src={minus} width="18px" alt="minus" />
          </ClickableItem>
          <Item>
            <img src={cigarette} width="24px" alt="cigarette" />
            <span>담배꽁초</span>
            <Num>{counts.cigarette}</Num>
          </Item>
          <ClickableItem onClick={() => handlePlusClick('cigarette')}>
            <img src={plus} width="18px" alt="plus" />
          </ClickableItem>
        </ItemBox>
        <ItemBox>
          <ClickableItem onClick={() => handleMinusClick('plastic')}>
            <img src={minus} width="18px" id="minus" alt="minus" />
          </ClickableItem>
          <Item>
            <img src={plastic} width="24px" alt="plastic" />
            <span>플라스틱</span>
            <Num>{counts.plastic}</Num>
          </Item>
          <ClickableItem onClick={() => handlePlusClick('plastic')}>
            <img src={plus} width="18px" id="plus" alt="plus" />
          </ClickableItem>
        </ItemBox>
        <ItemBox>
          <ClickableItem onClick={() => handleMinusClick('can')}>
            <img src={minus} width="18px" id="minus" alt="minus" />
          </ClickableItem>
          <Item>
            <img src={can} width="24px" alt="can" />
            <span>캔</span>
            <Num>{counts.can}</Num>
          </Item>
          <ClickableItem onClick={() => handlePlusClick('can')}>
            <img src={plus} width="18px" id="plus" alt="plus" />
          </ClickableItem>
        </ItemBox>
        <ItemBox>
          <ClickableItem onClick={() => handleMinusClick('paper')}>
            <img src={minus} width="18px" id="minus" alt="minus" />
          </ClickableItem>
          <Item>
            <img src={paper} width="24px" alt="paper" />
            <span>종이</span>
            <Num>{counts.paper}</Num>
          </Item>
          <ClickableItem onClick={() => handlePlusClick('paper')}>
            <img src={plus} width="18px" id="plus" alt="plus" />
          </ClickableItem>
        </ItemBox>
        <ItemBox>
          <ClickableItem onClick={() => handleMinusClick('glass')}>
            <img src={minus} width="18px" id="minus" alt="minus" />
          </ClickableItem>
          <Item>
            <img src={glass} width="24px" alt="glass" />
            <span>유리</span>
            <Num>{counts.glass}</Num>
          </Item>
          <ClickableItem onClick={() => handlePlusClick('glass')}>
            <img src={plus} width="18px" id="plus" alt="plus" />
          </ClickableItem>
        </ItemBox>
        <ItemBox>
          <ClickableItem onClick={() => handleMinusClick('vinyl')}>
            <img src={minus} width="18px" id="minus" alt="minus" />
          </ClickableItem>
          <Item>
            <img src={vinyl} width="24px" alt="vinyl" />
            <span>비닐</span>
            <Num>{counts.vinyl}</Num>
          </Item>
          <ClickableItem onClick={() => handlePlusClick('vinyl')}>
            <img src={plus} width="18px" id="plus" alt="plus" />
          </ClickableItem>
        </ItemBox>
        <ItemBox>
          <ClickableItem onClick={() => handleMinusClick('others')}>
            <img src={minus} width="18px" id="minus" alt="minus" />
          </ClickableItem>
          <Item>
            <img src={others} width="24px" alt="others" />
            <span>기타</span>
            <Num>{counts.others}</Num>
          </Item>
          <ClickableItem onClick={() => handlePlusClick('others')}>
            <img src={plus} width="18px" id="plus" alt="plus" />
          </ClickableItem>
        </ItemBox>
      </ItemWrapper>
    </Container>
  );
}

export default Trash;
