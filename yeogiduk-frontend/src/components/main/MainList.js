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

const MainList = ({starList, likeList, reviewList}) => {
  return (
    <MainListBox>
      <Stars>
        <div>별점 높은 순:</div>
<<<<<<< HEAD
        <ul id="ul1">
          {limitedReviews.map(review => (
            <li key={review}>
              {review}
            </li>
          ))}
        </ul>
      </Stars>

      <Likes>
      <div>찜 많은 순:</div>
      <ul>
        {limitedLikes.length > 0 ? (
          limitedLikes.map(like => (
            <li key={like.email}>
              {like.email} - {like.rstId}
            </li>
          ))
        ) : (
          <li>
            
          </li>
=======
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
>>>>>>> 676be7bbab3bf844a0e49a21aa37ade716ebce6d
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
