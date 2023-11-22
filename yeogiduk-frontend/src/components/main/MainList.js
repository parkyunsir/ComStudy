import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainListBox = styled.div`
  position: absolute;
  left: 0;
  top: 30rem;
  bottom: 0;
  right: 0;
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

const MainList = ({ rstId, email }) => {
  const [reviews, setReviews] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewResponse = await axios.get(`http://localhost:8080/restaurant/${rstId}/reviews`);
        setReviews(reviewResponse.data);

        const likeResponse = await axios.get(`http://localhost:8080/restaurant/likes/list/${rstId}`);
        
        //정렬하기
        const sortedLikes = likeResponse.data.sort((a, b) => b.rstId - a.rstId);
      
      // 상위 5개만 가져오기
        const top5Likes = sortedLikes.slice(0, 5);
        setLikes(top5Likes);
      } catch (error) {
        console.error('ERROR', error);
      }
    };

    fetchData();
  }, [rstId, email]);

  const limitedReviews = reviews.slice(0, 5);
  const limitedLikes = likes.slice(0, 5);

  return (
    <MainListBox>
      <Stars>
        <div>별점 높은 순:</div>
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
        )}
      </ul>
      </Likes>

      <Reviews>
        <div>리뷰 많은 순:</div>
        <ul>
          {limitedLikes.map(like => (
            <li key={like.email}>
              {like.email} - {like.rstId}
            </li>
          ))}
        </ul>
      </Reviews>
    </MainListBox>
  );
};

export default MainList;
