import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/common/Header';
import {logout} from '../../modules/auth';
import {searchWord} from '../../modules/search';

const HeaderContainer = () => {
  const [success, setSuccess] = useState(0);
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
    dispatch(searchWord(word));
    setSuccess(1);
  };

  useEffect(() => {
    if(student) {
      console.log(student.email);
    }
    if(success === 1) {
      navigate(`/search?word=${word}`);
      setSuccess(0);
    }
  }, [student, success, word, navigate]);

  return <Header student={student} onLogout={onLogout} onSubmit={onSubmit} word={word} />;
};

export default HeaderContainer;