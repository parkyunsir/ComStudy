import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, join} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
//import {check} from '../../modules/student';
import {useNavigate} from 'react-router-dom';

const JoinForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {form, auth, authError, student} = useSelector(({auth, student}) => ({
    form: auth.join,
    auth: auth.auth,
    authError: auth.authError,
    student: student.student
  }));
  
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form: 'join',
        key: name,
        value
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const {email, password, passwordConfirm} = form;
    // 하나라도 비어 있다면
    if([email, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    // 비밀번호가 일치하지 않는다면
    if(password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      changeField({form: 'join', key: 'password', value: ''});
      changeField({form: 'join', key: 'passwordConfirm', value: ''})
      return;
    }
    dispatch(join({email, password}));
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('join'));
  }, [dispatch]);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if(authError) {
      // 계정명이 이미 존재할 때
      if(authError.response.status === 400) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      // 기타 이유
      setError('회원가입 실패');
      return;
    }
    if(auth) {
      console.log('회원가입 성공');
      console.log(auth);
      //dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if(student) {
      navigate('/'); // 홈 화면으로 이동
      try {
        localStorage.setItem('student', JSON.stringify(student));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, student]);

  return (
    <AuthForm
      type="join"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default JoinForm;