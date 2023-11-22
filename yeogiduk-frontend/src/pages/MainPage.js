import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MainBanner from '../components/main/MainBanner';
import MainList from '../components/main/MainList';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <MainBanner />     
      <MainList />
      
    </>
  );
};

export default MainPage;