import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import LogoImage from '../../lib/image/logo.svg';
import { rtype,likeNum,restaurantReviews } from '../../lib/api/restaurant';
import { TbStarFilled, TbHeartFilled, TbMessage2 } from "react-icons/tb";

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
  font-size: 15px;
  margin-top:-1rem;
`;

const TypeId = styled.div`
  font-size:12px;
`;

const Likes = styled.div``;

const Horizon = styled.div`
  display:flex;
  font-size:10px;
`;

const Review = styled.div``;

const Restaurant = styled.div``;


const RestaurantItem = ({restaurant}) => {
  const [title, setTitle] = useState(null);
  const [likes, setLikes] = useState(null);
  const [review, setReview] = useState(null);

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

  return (
      <RestaurantItemList>
      <RestaurantItemBlock>

      <Image src={LogoImage} alt="review image" />
      <Restaurant>
      <Name>{restaurant.name}</Name>
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