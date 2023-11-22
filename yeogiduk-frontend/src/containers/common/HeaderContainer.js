import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/common/Header';
import {logout} from '../../modules/auth';
import {search} from '../../modules/search';

const HeaderContainer = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState(null);
  const {student} = useSelector(({auth, search}) => ({
    student: auth.student,
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  }

  const onSubmit = () => {
    setWord(word);
    dispatch(search(word));
  }

  useEffect(() => {
    if(student) {
      console.log(student.email);
    }
  });

  useEffect(() => {
    if(word) {
      const searchWord = word;
      setWord(null);
      navigate('/search');
      localStorage.setItem('word', searchWord);
    }
  }, [navigate, word])

  return <Header student={student} onLogout={onLogout} onSubmit={onSubmit} word={word} />;
};

export default HeaderContainer;