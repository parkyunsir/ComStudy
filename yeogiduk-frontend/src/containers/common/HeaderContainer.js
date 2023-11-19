import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../components/common/Header';
import {logout} from '../../modules/student';

const HeaderContainer = () => {
  const {student} = useSelector(({student}) => ({student: student.student}));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  }
  return <Header student={student} onLogout={onLogout} />;
};

export default HeaderContainer;