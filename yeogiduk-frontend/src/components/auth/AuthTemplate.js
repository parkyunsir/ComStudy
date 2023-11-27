import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import LogoImage from '../../lib/image/logo_image.png';

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #f1f3f5;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 540px;
  background: white;
  border-radius: 20px;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-family: Prentedard;
  font-styled: normal;
  font-weight: bold;
  font-size: 20px;
  color: rgba(54, 54, 54, 1);
  a {
    color: rgba(207, 80, 111, 1);
    text-decoration: none;
    &: hover {
      color: #343a40;
    }
  }
`;

const Logo = styled.img`
  margin-right: 30rem;
  margin-bottom: 2rem;
  text-align: left;
  white-space: nowrap;
`;

const StudentTemplate = ({children, type}) => {
  return (
    <AuthTemplateBlock>
      <Logo src={LogoImage} alt="yeogiduk logo" />
      <WhiteBox>
        {children}
      </WhiteBox>
      <Footer>
        여기덕이 처음이신가요? 
        {type === 'login' ? (
          <Link to="/join"> 회원가입</Link>
        ) : (
          <Link to="/login"> 로그인</Link>
        )}
      </Footer>
    </AuthTemplateBlock>
  );
};

export default StudentTemplate;