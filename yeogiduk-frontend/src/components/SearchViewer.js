import React from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import Restaurant from './list/Restaurant';


const GrayBackGround = styled.div`
  background: #f1f3f5;
  height:54.7rem;;
  padding-top:1rem;
`;

const SearchViewerBlock = styled(Responsive)`
  margin-top: 5.5rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Word = styled.div`
  font-size: 25px;
  margin-bottom: 1rem;
`;

const Context = styled.div`
  overflow-y:scroll;
  height: 44rem;
`;

const SearchViewer = ({word, restaurants}) => {
  return (
    <GrayBackGround>
    <SearchViewerBlock>
      <Word>'{word}' 검색 결과 ({restaurants? restaurants.length : '-'})개</Word>
      
        <Context>
          {restaurants && (
            <div>
              {restaurants.map(restaurant => (
                <Restaurant restaurant={restaurant} />
              ))}
            </div>
          )}
        </Context>

    </SearchViewerBlock>
    </GrayBackGround>
  );
}

export default SearchViewer;