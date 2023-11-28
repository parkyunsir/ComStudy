import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import Restaurant from './list/Restaurant';

const TestBlock = styled(Responsive)`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Article = styled.div`
  margin-bottom: 50px;  
`;

const Question = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Answer = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #45a049;
  }
`;

const Error = styled.div`
  color: red;
  margin-top: 10px;
`;

const Result = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AnswerLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const TestMood = ({handleChange, handleSubmit, error, restaurant}) => {
  return (
    <TestBlock className="TestBlock">
      <form onSubmit={handleSubmit}>
        <Article className="Article">
          <Question className="Question">덕우야 지금 기분이 어때?</Question>
          <AnswerLabel>
            <Answer type="radio" name="mood" value="good" onChange={handleChange} />
            기분 엄청 좋아!
          </AnswerLabel>
          <AnswerLabel>
            <Answer type="radio" name="mood" value="angry" onChange={handleChange} />
            화가 나!
          </AnswerLabel>
          <AnswerLabel>
            <Answer type="radio" name="mood" value="sad" onChange={handleChange} />
            우울해!
          </AnswerLabel>
        </Article>
        <Article>
          <Question>오늘 나의 모습을 되돌아 보자!</Question>
          <AnswerLabel>
            <Answer type="radio" name="today" value="full" onChange={handleChange} />
            풀집중! 열공!
          </AnswerLabel>
          <AnswerLabel>
            <Answer type="radio" name="today" value="rest" onChange={handleChange} />
            오늘은 좀 쉬어가기! 이런 날도 있는 거지~
          </AnswerLabel>        </Article>
        <Article>
          <Question>이 중에 덕우의 취향은 어떤 거야?</Question>
          <AnswerLabel>
            <Answer type="radio" name="food" value="bab" onChange={handleChange} />
            한국인은 밥심! 탄수화물을 먹어야지 밥이야!
          </AnswerLabel>
          <AnswerLabel>
            <Answer type="radio" name="food" value="meon" onChange={handleChange} />
            밥은 무슨 밥! 오늘은 면 좀 빨아보자!
          </AnswerLabel>
          <AnswerLabel>
            <Answer type="radio" name="food" value="cafe" onChange={handleChange} />
            나는 그냥 카페나 갈래~
          </AnswerLabel>
          <AnswerLabel>
            <Answer type="radio" name="food" value="simple" onChange={handleChange} />
            간단하게 먹고 싶어
          </AnswerLabel>        </Article>
        <Button className="Button">제출</Button>
        {error && <Error className="Error">{error}</Error>}
      </form>
      {restaurant && 
        <Result className="Result">
          <Title className="Title">테스트 결과</Title>
          <Restaurant restaurant={restaurant} />
        </Result>
      }
    </TestBlock>
  )
}

export default TestMood;