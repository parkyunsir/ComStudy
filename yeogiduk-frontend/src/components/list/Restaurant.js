import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
//import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import logoImage from '../../lib/image/logo_image.png';
import { rtype,likeNum,restaurantReviews } from '../../lib/api/restaurant';
import { TbHeartFilled, TbMessage2 } from "react-icons/tb";

const RestaurantBlock = styled.div`
  background: white;
  .box {
    margin: 1rem;
  }

  padding-left:1rem;
  padding-right:1rem;
  padding-top:1rem;
  padding-bottom:0.5rem;
  
  margin-left:1rem;
  margin-right:1rem;
  height:auto;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 25px;
  text-align:center;
  color: black;
`;

const Type = styled.div`
  margin-top:0.5rem;
  color:#888888;
`;

const Info = styled.div`
  margin-top:1rem;
  margin-bottom:1rem;
`;

const Image = styled.img``;

const Horizon = styled.div`
  display: flex;
  text-decoration: none;
  color: black;
  padding-bottom:1rem;
`;

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
      <Horizon>
      <Name onClick={onDetail}>{restaurant.name}&nbsp;</Name>
      <Type>&nbsp;{title? title : '-'}</Type>
      </Horizon>
      <Image src={logoImage} />

      <Info><TbHeartFilled/>&nbsp;{likes? likes : '0'} &nbsp;&nbsp;
            <TbMessage2/>&nbsp;{review? review : '0'}</Info>
    </RestaurantBlock>
  )
}

export default Restaurant;