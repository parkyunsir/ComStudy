import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import LogoImage from '../../lib/image/logo.svg';

const RestaurantItemList = styled.div`
  display: flex;
  flex-direction: row;
  float : left;
  margin-right:2rem;
  margin-top:-1rem;
  
`;

const RestaurantItemBlock = styled.div`
  display: flex;
  flex-direction:column;
  align-item: center;  
  
`;

const Image = styled.img`
  width: 100px;
  height: 100px;  
`;

const Name = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  margin-top:-1rem;
  text-align:center;
  text-decoration: none; // 필요한 경우 추가
  color: black; // 필요한 경우 추가
`;


//이미지와 이름을 세로로 배치하기

const RestaurantItem = ({restaurant}) => {
  return (
      <RestaurantItemList>
      <RestaurantItemBlock>
      <Image src={LogoImage} alt="review image" />
      <Name to={`/restaurant/detail/${restaurant.rstId}`}>{restaurant.name}</Name>
    </RestaurantItemBlock>
    </RestaurantItemList>
  )
}

export default RestaurantItem;