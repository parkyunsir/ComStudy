import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import RestaurantItem from '../myInfo/RestaurantItem';
import {rankStar, rankLike, rankReview} from '../../modules/list';

const MainListBox = styled.div`
  padding-top: 3rem;
  background: #f1f3f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stars = styled.div`
  color: #e739a0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Likes = styled.div`
  color: #a789e3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Reviews = styled.div`
  color: #578933;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainList = ({starList, likeList, reviewList}) => {
  return (
    <MainListBox>
      <Stars>
        <div>별점 높은 순:</div>
        {starList && (
          <div>
            {starList.map(restaurant => (
              <RestaurantItem restaurant={restaurant} />
            ), (parseInt(starList.length) < 3))}
          </div>
        )}
      </Stars>
      <Likes>
        <div>찜 많은 순:</div>
        {likeList && (
          <div>
            {likeList.map(restaurant => (
              <RestaurantItem restaurant={restaurant} />
            ))}
          </div>
        )}
      </Likes>
      <Reviews>
        <div>리뷰 많은 순:</div>
        {reviewList && (
          <div>
            {reviewList.map(restaurant => (
              <RestaurantItem restaurant={restaurant} />
            ))}
          </div>
        )}
      </Reviews>
    </MainListBox>
  );
};

export default MainList;
