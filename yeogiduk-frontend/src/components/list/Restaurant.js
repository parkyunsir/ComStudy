import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import {rtype} from '../../modules/restaurant';

const RestaurantBlock = styled.div``;

const Name = styled(Link)``;

const Type = styled.div``;

const Info = styled.div``;

const Image = styled.img``;

const Restaurant = ({restaurant}) => {
  const dispatch = useDispatch();
  const {rtypeName} = useSelector(({restaurant}) => ({
      rtypeName: restaurant.detail
  }));
  useEffect(() => {
    dispatch(rtype(restaurant.typeId));
  }, [dispatch, restaurant]);
  return (
    <RestaurantBlock>
      <Name>{restaurant.name}</Name>
      <Type>{rtypeName}</Type>
      <Info></Info>
      <Image></Image>
    </RestaurantBlock>
  )
}

export default Restaurant;