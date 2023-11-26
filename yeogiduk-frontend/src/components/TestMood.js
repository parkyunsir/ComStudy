import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import Restaurant from './list/Restaurant';

const TestBlock = styled(Responsive)``;

const Article = styled.div``;

const Question = styled.div``;

const Answer = styled.input``;

const Button = styled.button``;

const Error = styled.div``;

const Result = styled.div``;

const Title = styled.div``;

const TestMood = ({handleChange, handleSubmit, error, restaurant}) => {
  return (
    <TestBlock>
      <form onSubmit={handleSubmit}>
        <Article>
          <Question>덕우야 지금 기분이 어때?</Question>
          <Answer type="radio" name="mood" value="good" onChange={handleChange} />기분 엄청 좋아!
          <Answer type="radio" name="mood" value="angry" onChange={handleChange} />화가 나!
          <Answer type="radio" name="mood" value="sad" onChange={handleChange} />우울해!
        </Article>
        <Article>
          <Question>오늘 나의 모습을 되돌아 보자!</Question>
          <Answer type="radio" name="today" value="full" onChange={handleChange} />풀집중! 열공!
          <Answer type="radio" name="today" value="rest" onChange={handleChange} />오늘은 좀 쉬어가기! 이런 날도 있는 거지~
        </Article>
        <Article>
          <Question>이 중에 덕우의 취향은 어떤 거야?</Question>
          <Answer type="radio" name="food" value="bab" onChange={handleChange} />한국인은 밥심! 탄수화물을 먹어야지 밥이야!
          <Answer type="radio" name="food" value="meon" onChange={handleChange} />밥은 무슨 밥! 오늘은 면 좀 빨아보자!
          <Answer type="radio" name="food" value="cafe" onChange={handleChange} />나는 그냥 카페나 갈래~
          <Answer type="radio" name="food" value="simple" onChange={handleChange} />간단하게 먹고 싶어
        </Article>
        <Button>제출</Button>
        {error && <Error>{error}</Error>}
      </form>
      {restaurant && 
        <Result>
          <Title>테스트 결과</Title>
          <Restaurant restaurant={restaurant} />
        </Result>
      }
    </TestBlock>
  )
}

export default TestMood;