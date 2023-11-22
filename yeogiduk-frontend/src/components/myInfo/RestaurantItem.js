import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import LogoImage from '../../lib/image/logo.svg';

const RestaurantItemBlock = styled.div``;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Name = styled(Link)`
  font-weight: bold;
  font-size: 20px;
`;

const RestaurantItem = ({restaurant}) => {
  return (
    <RestaurantItemBlock>
      <Image src={LogoImage} alt="review image" />
      <Name>{restaurant.name}</Name>
    </RestaurantItemBlock>
  )
}

export default RestaurantItem;