import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ##495057;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  margin-top: 2rem;
  width: 540px;
  height: 60px;
  overflow: visible;
  fill: rgba(255,255,255,1);
	border-color: rgba(112,112,112,1);
  border-radius: 10px;
  font-size: 23px;
  font-weight: bold;
  font-style: normal;
  font-family: Pretendard;
`;

const Button = styled.button`
  margin-top: 2rem;
  background: rgba(207,80,111,1);
  border-radius: 50px;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  &:hover {
    background: rgba(207,45,111,1);
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

// 에러를 보여줌
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const LoginBoxHeader = styled.div`
  margin-top: 1rem;
  width: 417px;
  white-space: nowrap;
  text-align: left;
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  color: rgba(54,54,54,1);
`;

const LoginBoxText = styled.div`
	width: 444px;
	white-space: nowrap;
	text-align: left;
	font-family: Pretendard;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: rgba(54,54,54,1);
`;

const FindPassword = styled(Link)`
  width: 189px;
  white-space: nowrap;
  cursor: pointer;
  text-align: left;
  font-family: Pretendard;
  font-styled: normal;
  font-weight: bold;
  font-size: 20px;
  color: rgba(207, 80, 111, 1);
`;

const StudentForm = ({type, form, onChange, onSubmit, error}) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <LoginBoxHeader>로그인이 필요합니다!</LoginBoxHeader>
      <LoginBoxText>본 서비스는 덕성여자대학교 학생들만 이용할 수 있습니다</LoginBoxText>
      <form onSubmit={onSubmit}>
        <StyledInput 
          autoComplete="username" 
          name="username" 
          placeholder="덕성여자대학교 이메일"
          onChange={onChange}
          value={form.username} 
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {type === 'login' ? (
          <FindPassword to="/">비밀번호를 잊으셨나요?</FindPassword>
        ) : (
          <></>
        )}
        <Button>
          {text}
        </Button>
      </form>
    </AuthFormBlock>
  );
};

export default StudentForm;