import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [JOIN, JOIN_SUCCESS, JOIN_FAILURE] = createRequestActionTypes(
  'auth/JOIN',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
);
const LOGOUT = 'auth/LOGOUT';
const TEMP_SET_STUDENT = 'student/TEMP_SET_STUDENT';

export const changeField = createAction(
  CHANGE_FIELD,
  ({form, key, value}) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
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
export const logout = createAction(LOGOUT);
export const tempSetStudent = createAction(TEMP_SET_STUDENT, student => student);

// 사가 생성
const joinSaga = createRequestSaga(JOIN, authAPI.join);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
function logoutSaga() {
  try {
    localStorage.removeItem('student'); // localStorage에서 user 제거
    console.log('제거');
  } catch(e) {
    console.log(e);
  }
}
export function* authSaga() {
  yield takeLatest(JOIN, joinSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
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
  auth: null,
  authError: null,
  student: null
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, {payload: {form, key, value}}) => 
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다.
      }),
    [INITIALIZE_FORM]: (state, {payload: form}) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [JOIN_SUCCESS]: (state, {payload: student}) => ({
      ...state,
      authError: null,
      auth,
      student
    }),
    // 회원가입 실패
    [JOIN_FAILURE]: (state, {payload: error}) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, {payload: student}) => ({
      ...state,
      authError: null,
      auth,
      student
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, {payload: error}) => ({
      ...state,
      authError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      student: null
    }),
    [TEMP_SET_STUDENT]: (state, {payload: student}) => ({
      ...state,
      student,
    }),
  },
  initialState,
);

export default auth;