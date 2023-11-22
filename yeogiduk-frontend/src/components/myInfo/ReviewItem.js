import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import LogoImage from '../../lib/image/logo.svg';

const ReviewItemBlock = styled.div``;

const Horizon = styled.div`
  display: flex;
  align-items: flex-start; 
  margin-bottom:1rem;
`;

const Vertic = styled.div`
flex-direction: column;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right:1rem;
`;

const Context = styled.div`
  
`;

const Title = styled.div``;

const Name = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: black;
`;

const Star = styled.div`
  color: rgba(207, 80, 111, 1);
`;

const StarNum = styled.div``;

const ReviewContent = styled.div`
  height: 100%;
  //글자제한
  text-overflow: ellipsis;
`;

const ReviewDate = styled.div`
  color: rgba(54,54,54,1);
  
`;

const ReviewItem = ({review, reviewRestaurant, loading}) => {
  const date = new Date(review.date).toLocaleDateString()
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
  }, [review.star]);
  return (
    <ReviewItemBlock>
      <Vertic>
      <Horizon>
      <Image src={LogoImage} alt="review image" />
      <Context>
        <Title>
          <Name to="/">{reviewRestaurant ? reviewRestaurant.name : '-'}</Name>
          <Star>{stars}</Star>
          <StarNum> {review.star}</StarNum>
        </Title>
      <ReviewContent>{review.content}</ReviewContent>
      <ReviewDate>{date}</ReviewDate>
      </Context>
      </Horizon>
      </Vertic>
    </ReviewItemBlock>
  )
}

export default ReviewItem;