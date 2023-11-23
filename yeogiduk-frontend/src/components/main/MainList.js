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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Likes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  font-weight: bold;
  font-size:1.2rem;
  color: #333333;
`;

const MainList = ({starList, likeList, reviewList}) => {
  return (
    <MainListBox>
      <Content>
        <div>덕우들의 평가가 완전 좋은 식당이야!</div>
        <Stars>
        {starList && (
          <div>
            {starList.map(restaurant => (
              <RestaurantItem restaurant={restaurant} />
            ), (parseInt(starList.length) < 3))}
          </div>
        )}
      </Stars>
      </Content>

      <Content>
        <div>덕우들이 가장 많이 찜한 식당이야!</div>
        <Likes>
        {likeList && (
          <div>
            {likeList.map(restaurant => (
              <RestaurantItem restaurant={restaurant} />
            ))}
          </div>
        )}
      </Likes>
      </Content>

      <Content>
        <div>덕우들의 리뷰가 제일 많은 식당이야!</div>
        <Reviews>
        {reviewList && (
          <div>
            {reviewList.map(restaurant => (
              <RestaurantItem restaurant={restaurant} />
            ))}
          </div>
        )}
      </Reviews>
      </Content>
    </MainListBox>
  );
};

export default MainList;