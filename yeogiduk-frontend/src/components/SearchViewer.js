import React from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import Restaurant from './list/Restaurant';


const GrayBackGround = styled.div`
  background: #f1f3f5;
  height:35rem;
  padding-top:1rem;
`;

const SearchViewerBlock = styled(Responsive)`
  margin-top: 5.5rem;
`;

const Word = styled.div`
  font-size: 25px;
  margin-bottom: 1rem;
`;

const SearchViewer = ({word, restaurants}) => {
  return (
    <GrayBackGround>
    <SearchViewerBlock>
      <Word>'{word}' 검색 결과</Word>
      
        <div className="box">
          {restaurants && (
            <div>
              {restaurants.map(restaurant => (
                <Restaurant restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>

    </SearchViewerBlock>
    </GrayBackGround>
  );
}

export default SearchViewer;