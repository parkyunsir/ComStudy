import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import TestMoodContainer from '../containers/TestMoodContainer';
import SubHeader from '../components/common/SubHeader';

const MoodPage = () => {
  return (
    <>
      <HeaderContainer />
      <SubHeader />
      <TestMoodContainer />
    </>
  );
};

export default MoodPage;