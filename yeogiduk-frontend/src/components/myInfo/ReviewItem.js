import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import LogoImage from '../../lib/image/logo.svg';
import { restaurantDetail } from '../../lib/api/restaurant';

const ReviewItemBlock = styled.div``;

const Horizon = styled.div`
  display: flex;
  align-items: flex-start; 
`;

const Vertic = styled.div`
  flex-direction: column;
  margin-top:1rem;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right:1rem;
`;

const Context = styled.div`
`;

const Title = styled.div`
`;

const Name = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: black;
`;

const Star = styled.div`
  color: rgba(207, 80, 111, 1);
`;

const StarNum = styled.div`
  margin-top:0.3rem;
`;

const ReviewContent = styled.div`
  height: 100%;
  //글자제한
  text-overflow: ellipsis;
  margin-bottom:0.5rem;
  font-size:18px;
`;

const ReviewDate = styled.div`
  color: rgba(54,54,54,1);
  
`;


const ReviewItem = ({review}) => {
  const [name, setName] = useState(null);
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
    console.log(review);
  }, [review.star, review]);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await restaurantDetail(review.rstId);
        const fetchedName = response.data.name;
        setName(fetchedName);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    fetchName();
  }, [review.rstId]);

  const [image, setImage] = useState(null);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/image/show/one/${review.viewId}`);
        const text = await response.json();
        const fetchedImage = text.savedFileName;
        console.log(fetchedImage);
        setImage(fetchedImage);
      } catch (error) {
        //console.error('Error fetching image:', error);
      }
    };
    fetchImage();
  }, [review.viewId]);

  return (
    <ReviewItemBlock>
      <Vertic>
      <Horizon>
        {image? (
          <Image src={`/images_review/${image}`} alt="review image" />
        ) : (
        <Image src={LogoImage} alt="basic image" />
        )}
      <Context>
        <Title>
          <Name to={`/restaurant/${review.rstId}`}>{name ? name : '-'}</Name>
          <Horizon>
          <Star>{stars}</Star>
          <StarNum>&nbsp;&nbsp;{review.star}</StarNum>
          </Horizon>
        </Title>
      <ReviewContent>{review.content}</ReviewContent>
      <ReviewDate>{date}</ReviewDate>
      </Context>
      </Horizon>
      <hr/>
      </Vertic>
    </ReviewItemBlock>
  )
}

export default ReviewItem;

//<Name to="/">{restaurant ? restaurant.name : '-'}</Name>