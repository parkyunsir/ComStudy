import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
//import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import logoImage from '../../lib/image/logo_image.png';
import { rtype,likeNum,restaurantReviews } from '../../lib/api/restaurant';

const RestaurantBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Name = styled.div``;

const Type = styled.div``;

const Info = styled.div``;

const Image = styled.img``;

const Restaurant = ({restaurant}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(null);
  const [likes, setLikes] = useState(null);
  const [review, setReview] = useState(null);

  //rtype(한글명. title) 출력하기
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await rtype(restaurant.rstId);
        const fetchedTitle = response.data.title; // 데이터에 따라 조정
        setTitle(fetchedTitle);
      } catch (error) {
        console.error('Error fetching title:', error);
      }
    };

    fetchTitle();
  }, [restaurant.rstId]);

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

  const onDetail = () => {
    navigate(`/restaurant/${restaurant.rstId}`);
  };

  return (
    <RestaurantBlock>
      <Name onClick={onDetail}>{restaurant.name}</Name>
      <Type>{title? title : '-'}</Type>
      <Info>찜수:{likes? likes : '0'} 리뷰수:{review? review : '0'}</Info>
      <Image src={logoImage} />
    </RestaurantBlock>
  )
}

export default Restaurant;