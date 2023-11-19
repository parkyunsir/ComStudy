import client from './client';

// 로그인
export const login = ({email, password}) =>
  client.post('/student/login', {email, password});

// 회원가입
export const join = ({email, password}) =>
  client.post('/student/join', {email, password});

// 로그아웃
export const logout = () => client.post('/student/logout');