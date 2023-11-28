import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import {Link} from 'react-router-dom';
import {IoSearchOutline} from 'react-icons/io5';
import LogoImage from '../../lib/image/logo_image.png';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  z-index: 2;
`;

// Responsive 컴포넌트 속성에 스타일을 추가해서 새로운 컴포넌트 생성
const Wrapper = styled(Responsive)`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around; // 자식 엘리먼트 사이의 여백을 최대로 설정
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

// 헤더가 fixed로 되어있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled(Link)`
  font-weight: 800;
  margin-right: 1rem;
  text-decoration: none;
  color: black;
`;

const Logo = styled.img`
  text-align: left;
  white-space: nowrap;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 30vw; /* 또는 다른 적절한 값을 설정 */
`;

const StyledInput = styled.input`
  flex: 1;
  border: 0.1em solid #bbb;
  border-radius: 0.8em;
  padding: 0.4em 1.5em;
  font-size: 0.85em;
  width: 100%;
`;

const SearchIcon = styled(IoSearchOutline)`
  position: absolute;
  top: 50%;
  right: 4.5em; /* 또는 다른 적절한 값 */
  transform: translateY(-50%);
  font-size: 20px; 
  color: #363636;
`;

const SearchButton = styled(Button)`
  margin-left: 1em;
`;

const SubMenu = styled.div`
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  background: #FBFBFB;
  display: flex;
  justify-content: center;
  .link {
    font-weight: bold;
    text-decoration: none;
    color: black;
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

const Header = ({student, onLogout, onSubmit, word}) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            <Logo src={LogoImage} alt="yeogiduk logo" />
          </Link>
          <form className="search" onSubmit={onSubmit}>
            <SearchContainer>
              <StyledInput name="word" value={word} placeholder="덕우야! 먹고 싶은 메뉴나 식당 이름을 검색해봐!" required/>
              <SearchIcon />
              <SearchButton>검색</SearchButton>
            </SearchContainer>
          </form>
          {student ? (
            <div className="right">
              <UserInfo to="/mypage">마이페이지</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
        <SubMenu>
          <Link to="/list" className="link">식당 목록</Link>
          <Link to="/map" className="link">맛집 지도</Link>
          <Link to="/recommend" className="link">오늘의 추천</Link>
        </SubMenu>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;