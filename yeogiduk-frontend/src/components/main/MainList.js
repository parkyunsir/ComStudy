import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import RestaurantItem from './RestaurantItem';
import { TbStarFilled, TbHeartFilled, TbMessage2 } from "react-icons/tb";

import {rankStar, rankLike, rankReview} from '../../modules/list';

const GrayBackground = styled.div`
  background: #f1f3f5;
  height:100%;
  width:100%;
  padding-top:1rem;
`;

const MainListBox = styled(Responsive)`
  background: #f1f3f5;
  height:50rem;
`;

const WhiteBox = styled.div`
  background: white;
  // background: #f1f3f5;
  padding-left:1rem;
  padding-right:1rem;
  padding-bottom:0.5rem;
  margin-top:1rem;
  height:auto;
`;

const Stars = styled.div`
  display: flex;
  flex-direction: column;
`;

const Likes = styled.div`
  display: flex;
  flex-direction: column;
`;

const Reviews = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  font-weight: bold;
  font-size:1.1rem;
  color: #3e3e3e;
  ::-webkit-scrollbar {
    display: none;
  }
  width:auto;
`;

const Horizon = styled.div`
  display: flex; 
  overflow-x:auto;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;


const MainList = ({starList, likeList, reviewList}) => {
  return (
    <GrayBackground>
    <MainListBox>
      <WhiteBox>
      <Content>
        <Line>
        <div><TbStarFilled/> 덕우들의 평가가 완전 좋은 식당이야!</div>
        <div>더보기 &#10095;</div>
        </Line>
        <Stars>
        {starList && (
          <Horizon>
            {starList.map(restaurant => (
              <RestaurantItem restaurant={restaurant} />
            ), (parseInt(starList.length) < 3))}
          </Horizon>
        )}
      </Stars>
      </Content>
      </WhiteBox>


      <WhiteBox>
      <Content>
        <Line>
        <div><TbHeartFilled/> 덕우들이 가장 많이 찜한 식당이야!</div>
        <div>더보기 &#10095;</div>
        </Line>
        <Likes>
        {likeList && (
          <Horizon>
            {likeList.map(restaurant => (
              <RestaurantItem restaurant={restaurant} />
            ))}
          </Horizon>
        )}
      </Likes>
      </Content>
      </WhiteBox>

      <WhiteBox>
      <Content>
        <Line>
        <div><TbMessage2/> 덕우들의 리뷰가 제일 많은 식당이야!</div>
        <div>더보기 &#10095;</div>
        </Line>
        <Reviews>
        {reviewList && (
          <Horizon>
            {reviewList.map(restaurant => (
              <RestaurantItem restaurant={restaurant} />
            ))}
          </Horizon>
        )}
      </Reviews>
      </Content>
      </WhiteBox>
    </MainListBox>
    </GrayBackground>
  );
};

export default MainList;