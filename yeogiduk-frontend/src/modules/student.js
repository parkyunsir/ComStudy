import {createAction, handleActions} from 'redux-actions';
import {takeLatest, call} from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
//import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';

const TEMP_SET_STUDENT = 'student/TEMP_SET_STUDENT'; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
/*const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'student/CHECK',
);*/
const LOGOUT = 'student/LOGOUT';

export const tempSetStudent = createAction(TEMP_SET_STUDENT, student => student);
//export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

//const checkSaga = createRequestSaga(CHECK, authAPI.check);

/*function checkFailureSaga() {
  try {
    localStorage.removeItem('student'); // localStorage에서 user 제거
  } catch(e) {
    console.log('localStorage is not working');
  }
}*/

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout API 호출
    localStorage.removeItem('student'); // localStorage에서 user 제거
  } catch(e) {
    console.log(e);
  }
}

export function* studentSaga() {
  //yield takeLatest(CHECK, checkSaga);
  //yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  student: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_STUDENT]: (state, {payload: student}) => ({
      ...state,
      student,
    }),
    /*[CHECK_SUCCESS]: (state, {payload: student}) => ({
      ...state,
      student,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, {payload: error}) => ({
      ...state,
      student: null,
      checkError: error,
    }),*/
    [LOGOUT]: state => ({
      ...state,
      student: null
    })
  },
  initialState,
);