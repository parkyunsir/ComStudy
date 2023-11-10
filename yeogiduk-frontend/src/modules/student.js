import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as studentAPI from '../lib/api/student';

const INITIALIZE_FORM = 'student/INITIALIZE_FORM';

const [JOIN, JOIN_SUCCESS, JOIN_FAILURE] = createRequestActionTypes(
  'student/JOIN',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'student/LOGIN',
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const join = createAction(JOIN, ({email, password}) => ({
  email,
  password,
}));
export const login = createAction(LOGIN, ({email, password}) => ({
  email,
  password,
}));

// 사가 생성
const joinSaga = createRequestSaga(JOIN, studentAPI.join);
const loginSaga = createRequestSaga(LOGIN, studentAPI.login);
export function* authSaga() {
  yield takeLatest(JOIN, joinSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  join: {
    email: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    email: '',
    password: '',
  },
  student: null,
  studentError: null,
};

const student = handleActions(
  {
    [INITIALIZE_FORM]: (state, {payload: form}) => ({
      ...state,
      [form]: initialState[form],
      studentError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [JOIN_SUCCESS]: (state, {payload: student}) => ({
      ...state,
      studentError: null,
      student,
    }),
    // 회원가입 실패
    [JOIN_FAILURE]: (state, {payload: error}) => ({
      ...state,
      studentError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, {payload: student}) => ({
      ...state,
      studentError: null,
      student,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, {payload: error}) => ({
      ...state,
      studentError: error,
    }),
  },
  initialState,
);

export default student;