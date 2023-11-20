import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../components/common/Header';
import {logout} from '../../modules/auth';

const HeaderContainer = () => {
  const {student} = useSelector(({auth}) => ({student: auth.student}));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  }
  useEffect(() => {
    if(student) {
      console.log(student.email);
    }
  });

  return <Header student={student} onLogout={onLogout} />;
};

export default HeaderContainer;