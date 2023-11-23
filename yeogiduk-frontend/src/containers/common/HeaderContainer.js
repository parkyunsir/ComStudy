import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/common/Header';
import {logout} from '../../modules/auth';
import {searchWord} from '../../modules/search';

const HeaderContainer = () => {
  const navigate = useNavigate();
  const {student, word} = useSelector(({auth, search}) => ({
    student: auth.student,
    word: search.word
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const onSubmit = () => {
    dispatch(searchWord({word}));
    navigate('/search');
  };

  useEffect(() => {
    if(student) {
      console.log(student.email);
    }
  });

  return <Header student={student} onLogout={onLogout} onSubmit={onSubmit} word={word} />;
};

export default HeaderContainer;