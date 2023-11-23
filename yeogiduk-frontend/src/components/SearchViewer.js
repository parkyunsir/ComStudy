import React from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import RestaurantContainer from '../containers/RestaurantContainer';

const SearchViewerBlock = styled(Responsive)`
  margin-top: 5.5rem;
`;

const Word = styled.div`
  font-size: 25px;
`;

const WhiteBox = styled.div`
  background: white;
  .box {
    
  }
`;

const SearchViewer = ({word, restaurants}) => {
  return (
    <SearchViewerBlock>
      <Word>'{word}' 검색 결과</Word>
      <WhiteBox>
        <div className="box">
          {restaurants && (
            <div>
              {restaurants.map(restaurant => (
                <RestaurantContainer restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
      </WhiteBox>
    </SearchViewerBlock>
  );
}

export default SearchViewer;