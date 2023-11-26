import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
//import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import logoImage from '../../lib/image/logo_image.png';
import { rtype,likeNum,restaurantReviews } from '../../lib/api/restaurant';
import { TbStarFilled, TbHeartFilled, TbMessage2 } from "react-icons/tb";

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
  color: black;
  margin-bottom:1rem;
`;

const Type = styled.div`
  color:#888888;
  margin-bottom:1rem;
`;

const Info = styled.div`
  margin-top:1rem;
  margin-bottom:1rem;
`;

const Image = styled.img``;

const TextGray = styled.div`
  hr {
    border: 0;
    border-top: 1px solid #cccccc; /* 색상 조정 */
    margin: 10px 0 20px; /* Adjust margin as needed */
  }
`;

const Star = styled.div`
  color:#f87f9c;
  float:left;
`;

const Bold = styled.div`
  font-weight:bold;
  float:left;
`

const Restaurant = ({restaurant}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(null);
  const [likes, setLikes] = useState(null);
  const [review, setReview] = useState(null);
  const [avgstar, setAvgStar] = useState(null);

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
    <RestaurantBlock>
      <TextGray><hr /></TextGray>
      <Name onClick={onDetail}>{restaurant.name}&nbsp;</Name>
      <Type>&nbsp;{title? title : '-'}</Type>
      <Info>
      <Star><TbStarFilled/></Star>&nbsp;&nbsp;<Bold>{avgstar ? avgstar.toFixed(1) : '-'}</Bold>&nbsp;&nbsp;
        <TbHeartFilled/>&nbsp;{likes? likes : '0'} &nbsp;&nbsp;
        <TbMessage2/>&nbsp;{review? review : '0'}</Info>
      <Image src={logoImage} />
    </RestaurantBlock>
  )
}

export default Restaurant;