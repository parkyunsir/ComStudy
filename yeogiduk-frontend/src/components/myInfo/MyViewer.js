import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import LogoImage from '../../lib/image/logo.svg';
import RestaurantItem from './RestaurantItem';
import ReviewContainer from '../../containers/myInfo/ReviewContainer';

const GrayBackGround = styled.div`
  background: #f1f3f5;
  
`;

const MyViewerBlock = styled(Responsive)`
  margin-top: 3rem;
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
  padding-left:1rem;
  padding-right:1rem;
  padding-top:0rem;
  padding-bottom:0.5rem;
  margin-top:1rem;

  
`;

const Picture = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
  align-items: center;
  margin:auto; //사진 중앙 정렬 코드
`;

const MyEmail = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  padding-bottom:1rem;
`;

const Horizon = styled.div`
  display: flex;
  overflow-x:auto;
`;

const MyPageText = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  ::-webkit-scrollbar {
    display: none;
}
`;



const MyViewer = ({student, restaurants, reviews}) => {
  var num = 0;
  return (
    <GrayBackGround>
    <MyViewerBlock>
      <WhiteBox>
        <Picture src={LogoImage} alt="my picture"/>
        <MyEmail>{student.email}</MyEmail>
      </WhiteBox>
      <WhiteBox>
        <div className="box">

          <MyPageText>
          <div className="myInfo">내가 찜한 맛집</div>
          
          {restaurants && (
            <Horizon>
              {restaurants.map(restaurant => (
                <RestaurantItem restaurant={restaurant} />
              ))}
            </Horizon> 
          )}
          </MyPageText>
        </div>
        
      </WhiteBox>

      <WhiteBox>
        <div className="box">
        
          <MyPageText>
          <div className="myInfo">
            내가 쓴 리뷰 총 {reviews? reviews.length : '-'}개
          </div>
          </MyPageText>

          {reviews && (
            <div>
              {reviews.map(review => (
                <ReviewContainer review={review} />
              ))}
            </div>
          )}
        </div>
      </WhiteBox>
    </MyViewerBlock>
    </GrayBackGround>
  )
}

export default MyViewer;