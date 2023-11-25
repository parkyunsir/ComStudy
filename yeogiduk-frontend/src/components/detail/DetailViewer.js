import React, {useEffect} from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Menu from './Menu';
import Review from './Review';
import ReviewWrite from './ReviewWrite';

const DetailBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const WhiteBox = styled.div`
  margin-bottom: 3rem;
`;

const Name = styled.div``;

const Type = styled.div``;

const Location = styled.div``;

const Time = styled.div``;

const Intro = styled.div``;

const DetailViewer = ({restaurant, rtype, reviews, menus}) => {
  useEffect(() => {}, [reviews]);
  return (
    <DetailBlock>
      <WhiteBox>
        <Name>{restaurant?.name}</Name>
        <Type>{rtype?.title}</Type>
        <Location>{restaurant?.loc}</Location>
        <Time>{restaurant?.startTime}-{restaurant?.endTime}</Time>
        <Intro>{restaurant?.intro}</Intro>
      </WhiteBox>
      <WhiteBox>
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
      <WhiteBox>
        <ReviewWrite rstId={restaurant?.rstId} />
      </WhiteBox>
      <WhiteBox>
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
  )
}

export default DetailViewer;

//<ReviewWrite restaurant={restaurant} />