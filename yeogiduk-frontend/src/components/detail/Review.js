import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ReviewBlock = styled.div`
  margin-bottom: 1rem;
`;

const Name = styled.div``;

const Star = styled.div``;

const Content = styled.div``;

const ReviewDate = styled.div``;

const Review = ({review}) => {
  const date = new Date(review.date).toLocaleDateString();
  const [stars, setStars] = useState(`★★★★★`);
  useEffect(() => {
    if(review.star === 5) {
      setStars(`★★★★★`);
    } else if (review.star === 4) {
      setStars(`★★★★☆`);
    } else if (review.star === 3) {
      setStars(`★★★☆☆`);
    } else if (review.star === 2) {
      setStars(`★★☆☆☆`);
    } else if (review.star === 1) {
      setStars(`★☆☆☆☆`);
    }
  }, [review.star, review]);
  return (
    <ReviewBlock>
      <Name>덕우</Name>
      <Star>{stars} {review.star}</Star>
      <Content>{review.content}</Content>
      <ReviewDate>{date}</ReviewDate>
    </ReviewBlock>
  );
}

export default Review;