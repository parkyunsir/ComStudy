import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Responsive from './common/Responsive';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

const RecommendContainer = styled(Responsive)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wheel = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f1f3f5;
  margin-top:-8rem;
  margin-bottom:3rem;
  transition: ${(props) => (props.spinning ? 'transform 3s ease-out' : 'none')};
  ${(props) =>
    props.spinning &&
    css`
      transform: rotate(${props.randomAngle}deg);
    `}
`;

const Sector = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: circle(0% at 50% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  transform: rotate(${(props) => props.deg}deg) translateX(30%);
  color: black;
  border: 2px solid black;
`;

const SpinButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.spinning &&
    css`
      pointer-events: none;
      background-color: #d3d3d3;
    `}
`;

const Result = styled.div`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  margin-top:-16rem;
  color:#555555;
`;

const Name = styled(Link)`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  margin-top:-16rem;
  text-decoration: none;
  color: black;
`;

const Recommend = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [prevAngle, setPrevAngle] = useState(0);

  const wheelRef = useRef(null);

  const sectors = ['사리원', '붐떡', '칼국수', '쌀국수'
  , '산책', '삼겹살', '양국', '더블즈',
  '오장밥상', '세평반', '일락', '쎄쎄'
  , '붕자네', '상미규카츠', '미뇨리', '블랙다운',
  '이요', '대박만두', '엘수에뇨', '다몬초밥'
  , '파스타리까', '누들앤타이', '황금성', '차이홍'
];

  const startSpin = (spins = 10) => {
    if (!isSpinning) {
      setIsSpinning(true);

      const spinOnce = () => {
        const randomAngle = Math.floor(Math.random() * 360);
        wheelRef.current.style.transition = 'none';
        wheelRef.current.style.transform = `rotate(${randomAngle}deg)`;

        setTimeout(() => {
          wheelRef.current.style.transition = 'transform 1s ease-out';
          const selectedSector = Math.round((Math.abs((randomAngle)%360)) / (360 / sectors.length));

          setResult(sectors[selectedSector]);

          if (spins > 1) {
            spins--;
            spinOnce();
          } else {
            setIsSpinning(false);
          }
        }, 50);
      };

      spinOnce();
    }
  };

  return (
    <RecommendContainer>
      <Wheel spinning={isSpinning} randomAngle={result && result.length * 360} ref={wheelRef}>
        {sectors.map((sector, index) => (
          <Sector key={index} deg={index * (360 / sectors.length)}>
            {sector}
          </Sector>
        ))}
      </Wheel>
      {isSpinning ? (
        <Result><div>추천 중 . . .</div></Result>
      ) : (
        <Name to="/">{result && `${result}`}</Name>
      )}
      <SpinButton onClick={() => startSpin()} spinning={isSpinning}>
        랜덤 추천 받기
      </SpinButton>
    </RecommendContainer>
  );
};

export default Recommend;
