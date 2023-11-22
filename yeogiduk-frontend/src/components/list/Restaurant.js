import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import {restRtype, restLikenum,restReview} from '../../modules/restaurant';

const RestaurantBlock = styled.div``;

const Name = styled(Link)``;

const Type = styled.div``;

const Info = styled.div``;

const Image = styled.img``;

const Restaurant = ({restaurant}) => {
  const dispatch = useDispatch();
  const {rtype, likenum, review} = useSelector(({restaurant}) => ({
      rtype: restaurant.rtype,
      likenum: restaurant.likenum,
      review: restaurant.review
  }));
  useEffect(() => {
    dispatch(restRtype(restaurant.typeId));
    dispatch(restLikenum(restaurant.rstId));
    dispatch(restReview(restaurant.rstId));
  }, [dispatch, restaurant]);
  return (
    <RestaurantBlock>
      <Name>{restaurant.name}</Name>
      <Type>{rtype? rtype.title : '-'}</Type>
      <Info>찜수:{likenum? likenum : '-'} 리뷰수:{review? review.length : '-'}</Info>
      <Image></Image>
    </RestaurantBlock>
  )
}

export default Restaurant;