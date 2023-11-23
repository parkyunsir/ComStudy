import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import logoImage from '../../lib/image/logo_image.png';

const RestaurantBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Name = styled(Link)``;

const Type = styled.div``;

const Info = styled.div``;

const Image = styled.img``;

const Restaurant = ({restaurant, rtype, likenum, reviews}) => {
  return (
    <RestaurantBlock>
      <Name>{restaurant.name}</Name>
      <Type>{rtype? rtype.title : '-'}</Type>
      <Info>찜수:{likenum? likenum : '-'} 리뷰수:{reviews? reviews.length : '-'}</Info>
      <Image src={logoImage} />
    </RestaurantBlock>
  )
}

export default Restaurant;