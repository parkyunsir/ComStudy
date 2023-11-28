import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import JoinForm from '../containers/auth/JoinForm';
import HeaderContainer from '../containers/common/HeaderContainer';

const JoinPage = () => {
  return (
    <>
      <AuthTemplate>
        <JoinForm type="join" />
      </AuthTemplate>
    </>
  );
};

export default JoinPage;

//<HeaderContainer />