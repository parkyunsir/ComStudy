import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Menu from './Menu';
import Review from './Review';
import ReviewWrite from './ReviewWrite';
import { addLike, checkLike } from '../../modules/restaurant';
import { likeNum,restaurantReviews } from '../../lib/api/restaurant';
import { TbHeartFilled, TbMessage2, TbStarFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { LuPencil } from "react-icons/lu";

const GrayBackGround = styled.div`
  background: #f1f3f5;
  padding-top:1rem;
  height: 100%;
  padding-bottom:3rem;
`;

const DetailBlock = styled(Responsive)`
  margin-top: 4rem;
  background: #f1f3f5;
`;

const WhiteBox = styled.div`
  background: white;
  .box {
    margin: 1rem;
  }
  padding-left:1rem;
  padding-right:1rem;
  padding-bottom:1rem;
  padding-top:1rem;
  margin-top:1rem;
`;

const Name = styled.div`
  font-weight:bold;
  font-size: 20px;
  margin-bottom:1rem;
`;

const Type = styled.div`
  color: #888888;
  font-size:15px;
  margin-bottom:1rem;
`;

const StarColor = styled.div`
  color: #f87f9c;
  display: flex;
`;

const StarBold = styled.div`
  font-weight: bold;
  color: #000000;
`;

const Location = styled.div`
  margin-bottom:0.5rem;
`;

const Time = styled.div`
  margin-bottom:0.5rem;
`;

const Intro = styled.div`
  display: flex;
  color: #555555;
  margin-bottom:2rem;
`;

const Content = styled.div`
`;

const Horizon = styled.div`
  display:flex;
  justify-content: space-between;
`;

const Like = styled.button`
border: 1px solid #aaaaaa;
background: none;
outline: none;
border-radius: 10px;
margin-left:1rem;
`;


const DetailViewer = ({restaurant, rtype, reviews, menus}) => {
  useEffect(() => {}, [reviews]);
  const dispatch = useDispatch();
  //별점, 리뷰, 찜 가져오기
  const [likes, setLikes] = useState(null);
  const [review, setReview] = useState(null);
  const [avgstar, setAvgStar] = useState(null);


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
  }, [restaurant?.rstId, reviews, likes]);

  //리뷰 개수 출력
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await restaurantReviews(restaurant?.rstId);
        const fetchedReview = response.data.length; // 데이터에 따라 조정
        setReview(fetchedReview);
      } catch (error) {
        console.error('Error fetching title:', error);
      }
    };

    fetchReview();
  }, [restaurant?.rstId, reviews]);

    // //별점 평균 출력
    useEffect(() => {
      const fetchReviews = async () => {
        try{
          const response = await fetch(`/restaurant/${restaurant?.rstId}/reviews`);
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
    },[restaurant?.rstId, reviews]);

  const {like, student} = useSelector(({restaurant, auth}) => ({
    like: restaurant.like,
    student: auth.student
  }));
  const [color, setColor] = useState(null);
  const id = null;
  useEffect(() => {
    const rstId = restaurant?.rstId;
    const email = student.email;
    dispatch(checkLike({email, rstId}));
    setColor(like? 'pink' : 'white');
  }, [setColor, like, restaurant, student, dispatch]);
  const handleClick = () => {
    const rstId = restaurant?.rstId;
    const email = student.email;
    dispatch(addLike({id, email, rstId}));
    dispatch(checkLike({email, rstId}));
    setColor(like? 'pink' : 'white');
  }

  return (
    <GrayBackGround>
    <DetailBlock>

{/* 가게 기본 정보 출력 */}
      <WhiteBox>
        <Horizon><Name>{restaurant?.name}</Name><Like style={{backgroundColor: color}} onClick={handleClick}>찜</Like></Horizon>
        <Type>{rtype?.title}</Type>
        <Intro>
          <StarColor><TbStarFilled/></StarColor>&nbsp;<StarBold>{avgstar ? avgstar.toFixed(1) : '-'}</StarBold> &nbsp;&nbsp; &nbsp;&nbsp;
          <TbHeartFilled/>&nbsp;{likes? likes : '0'} &nbsp;&nbsp; &nbsp;&nbsp;
          <TbMessage2/>&nbsp;{review? review : '0'} &nbsp;&nbsp; &nbsp;&nbsp;
        </Intro>
        <Location><FaLocationDot/>&nbsp;{restaurant?.loc}</Location>
        <Time><IoMdTime />&nbsp;{restaurant?.startTime} ~ {restaurant?.endTime}</Time>
        <Content><LuPencil />&nbsp;{restaurant?.intro}</Content>
      </WhiteBox>

    {/* 메뉴 정보 출력 */}
      <WhiteBox>
        <Name>메뉴</Name>
        <div className="box">
          {menus && (
            <div>
              {menus.map(menu => (
                <Menu menu={menu} />
              ))}
            </div>
          )}
        </div>
      </WhiteBox>

{/* 리뷰 작성  */}
      <WhiteBox>
        <ReviewWrite rstId={restaurant?.rstId} />
      </WhiteBox>

{/* 리뷰 불러오기 */}
      <WhiteBox>
      <Name>덕우들의 리뷰</Name>
        <div className="box">
          {reviews && (
            <div>
              {reviews.map(review => (
                <Review review={review} />
              ))}
            </div>
          )}
        </div>
      </WhiteBox>

    </DetailBlock>
    </GrayBackGround>
  )
}

export default DetailViewer;

//<ReviewWrite restaurant={restaurant} />