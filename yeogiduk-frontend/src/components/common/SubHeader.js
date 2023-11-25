import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import {Link} from 'react-router-dom';

const SubBlock = styled(Responsive)`
  margin-top: 4rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  display: flex;
  justify-content: center;
`;

const SubLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: rgba(207,80,111,1);
  margin-left: 3rem;
  margin-right: 3rem;
`;

const SubHeader = () => {
  return (
    <SubBlock>
      <SubLink to="/recommend">룰렛 돌리기</SubLink>
      <SubLink to="/testmood">기분 테스트하기</SubLink>
    </SubBlock>
  )
}

export default SubHeader;