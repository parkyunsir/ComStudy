import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import auth, {authSaga} from './auth';
import loading from './loading';
import student, {studentSaga} from './student';

const rootReducer = combineReducers({
  auth,
  loading,
  student,
});

export function* rootSaga() {
  yield all([authSaga(), studentSaga()]);
}

export default rootReducer;