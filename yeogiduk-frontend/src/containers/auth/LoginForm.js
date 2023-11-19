import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {changeField, initializeForm, login} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
//import {check} from '../../modules/student';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {form, auth, authError, student} = useSelector(({auth, student}) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    student: student.student
  }));
  
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const {email, password} = form;
    dispatch(login({email, password}));
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if(authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if(auth) {
      console.log('로그인 성공');
      //dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if(student) {
      navigate('/');
      try {
        localStorage.setItem('student', JSON.stringify(student));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, student]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;