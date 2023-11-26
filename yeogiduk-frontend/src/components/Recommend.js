import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Responsive from './common/Responsive';
import { Link } from '../../../node_modules/react-router-dom/dist/index';
import Restaurant from './list/Restaurant';

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #555555;
`;

const Black = styled.div`
  position: absolute;
  top: 60%;  /* Adjust this value as needed */
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  width:10rem;
  margin-top:1rem;
`;


const Name = styled(Link)`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  margin-top:-16rem;
  text-decoration: none;
  color: black;
`;

const Recommend = ({restaurant}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [prevAngle, setPrevAngle] = useState(0);

  const wheelRef = useRef(null);

  const sectors = ['사리원', '오장밥상', '엘림들깨수제비칼국수', '세평반부엌', 
        '일락', '쎄쎄', '황금성', '차이홍',
        '다몬초밥', '양국', '산책', '붕자네',
        '상미규카츠', '미뇨리', '파스타리까', '셀레브로',
        '포36', '누들앤타이', '블랙다운', '이요',
        '도너츠윤',  '더블즈',  '카페 크레프리', '대박만두', 
        'BOOM 떡볶이', '싹쓰리솥뚜껑 삼겹살', '엘수에뇨', '멕켄치킨'
];

  const index = sectors.indexOf(result);
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
        <Result><div>추천 중 . . .</div>
        <Black><div>{result}</div></Black></Result>
      ) : (
        <Name to={`/restaurant/${index+1}`}>{result && `${result}`}</Name>
      )}
      <SpinButton onClick={() => startSpin()} spinning={isSpinning}>
        랜덤 추천 받기
      </SpinButton>

    </RecommendContainer>
  );
};

export default Recommend;
