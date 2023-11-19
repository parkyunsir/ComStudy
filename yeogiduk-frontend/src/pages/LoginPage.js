import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import HeaderContainer from '../containers/common/HeaderContainer';

const LoginPage = () => {
  return (
    <>
      <HeaderContainer />
      <AuthTemplate type="login">
        <LoginForm type="login"/>
      </AuthTemplate>
    </>
  );
};

export default LoginPage;