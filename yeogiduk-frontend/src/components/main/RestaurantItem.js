import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import LogoImage from '../../lib/image/logo.svg';
import { rtype,likeNum,restaurantReviews } from '../../lib/api/restaurant';
import { TbStarFilled, TbHeartFilled, TbMessage2 } from "react-icons/tb";
import { listRankStar } from '../../lib/api/list';

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
  text-decoration: none;
  color: black;
`;


const TypeId = styled.div`
  margin-top:0.2rem;
  font-size:12px;
  color:#555555;
`;

const Likes = styled.div``;

const Horizon = styled.div`
  display:flex;
  font-size:10px;
  margin-top:0.5rem;
  color:#888888;
`;

const Review = styled.div``;

const Restaurant = styled.div``;

const Star = styled.div`
  color:#f87f9c;
`;

const HorizonName = styled.div`
  display:flex;
  font-size: 13px;
  justify-content: space-between;
  margin-top:-1rem;
`;


const RestaurantItem = ({restaurant}) => {
  const [title, setTitle] = useState(null);
  const [likes, setLikes] = useState(null);
  const [review, setReview] = useState(null);
  const [avgstar, setAvgStar] = useState(null);

  //rtype(한글명. title) 출력하기
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await rtype(restaurant.typeId);
        const fetchedTitle = response.data.title; // 데이터에 따라 조정
        setTitle(fetchedTitle);
      } catch (error) {
        console.error('Error fetching title:', error);
      }
    };

    fetchTitle();
  }, [restaurant.typeId]);

  //찜 개수 출력
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await likeNum(restaurant.rstId);
        const fetchedLikes = response.data;
        setLikes(fetchedLikes);
      } catch (error) {
        console.error('Error fetching title:', error);
      }
    };

    fetchLikes();
  }, [restaurant.rstId]);

  //리뷰 개수 출력
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await restaurantReviews(restaurant.rstId);
        const fetchedReview = response.data.length; // 데이터에 따라 조정
        setReview(fetchedReview);
      } catch (error) {
        console.error('Error fetching title:', error);
      }
    };

    fetchReview();
  }, [restaurant.rstId]);

  //별점 평균 출력
  useEffect(() => {
    const fetchReviews = async () => {
      try{
        const response = await fetch(`/restaurant/${restaurant.rstId}/reviews`);
        if(!response.ok){
          throw new Error(`Failed to fetch reviews. Status: ${response.status}`);
        }
        const reviews = await response.json();
        const stars = reviews.map(review=>review.star);
        const avg = stars.reduce((sum, star) => sum+star,0) / stars.length;
        setAvgStar(avg);
      } catch (error) {
        console.error('ERROR',error);
      }
    };

    fetchReviews();
  },[restaurant.rstId]);

  return (
      <RestaurantItemList>
      <RestaurantItemBlock>

      <Image src={LogoImage} alt="review image" />
      <Restaurant>

      <HorizonName>
      <Name>{restaurant.name}</Name>
      <Star>{avgstar ? avgstar.toFixed(1) : '-'}</Star>
      </HorizonName>

      <TypeId>{title}</TypeId>
      <Horizon>
      <Likes><TbHeartFilled /> {likes}&nbsp;&nbsp;</Likes>
      <Review>&nbsp;&nbsp;<TbMessage2/> {review}</Review>
      </Horizon>
      </Restaurant>
    </RestaurantItemBlock>
    </RestaurantItemList>
  )
}

export default RestaurantItem;