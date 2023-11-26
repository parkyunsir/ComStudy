import React ,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import LogoImage from '../../lib/image/logo.svg';

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
  margin-top: 0.5rem;
`;

const Image = styled.img`
  margin-top: 1rem;
  width: 100px;
  height: 100px;  
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-top:1rem;
  text-align:center;
  text-decoration: none;
  color: black;
`;


//이미지와 이름을 세로로 배치하기

const RestaurantItem = ({restaurant}) => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate(`/restaurant/${restaurant.rstId}`);
  };
  const [image, setImage] = useState(null);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/image/show/one/${restaurant.rstId}`);
        const text = await response.json();
        const fetchedImage = text.savedFileName;
        console.log(fetchedImage);
        setImage(fetchedImage);
      } catch (error) {
        //console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [restaurant.rstId]);
  return (
    <RestaurantItemList>
      <RestaurantItemBlock>
        {image? (
          <Image src={`/images_review/${image}`} alt="review image" />
        ) : (
        <Image src={LogoImage} alt="basic image" />
        )}
        <Name onClick={onDetail}>{restaurant.name}</Name>
      </RestaurantItemBlock>
    </RestaurantItemList>
  )
}

export default RestaurantItem;