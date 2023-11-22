import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import LogoImage from '../../lib/image/logo.svg';
import RestaurantItem from './RestaurantItem';
import ReviewContainer from '../../containers/myInfo/ReviewContainer';

const MyViewerBlock = styled(Responsive)`
  margin-top: 1rem;
  background: #f1f3f5;
`;

const WhiteBox = styled.div`
  background: white;
  .box {
    margin: 1rem;
  }
  .myInfo {
    font-weight: bold;
    font-size: 20px;
  }
`;

const Picture = styled.img`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyEmail = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyViewer = ({student, restaurants, reviews}) => {
  var num = 0;
  return (
    <MyViewerBlock>
      <WhiteBox>
        <Picture src={LogoImage} alt="my picture"/>
        <MyEmail>{student.email}</MyEmail>
      </WhiteBox>
      <WhiteBox>
        <div className="box">
          <div className="myInfo">내가 찜한 맛집</div>
          {restaurants && (
            <div>
              {restaurants.map(restaurant => (
                <RestaurantItem restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
      </WhiteBox>
      <WhiteBox>
        <div className="box">
          <div className="myInfo">내가 쓴 리뷰 총 {num}개</div>
          {reviews && (
            <div>
              {reviews.map(review => (
                <ReviewContainer review={review} />
              ), num++)}
            </div>
          )}
        </div>
      </WhiteBox>
    </MyViewerBlock>
  )
}

export default MyViewer;