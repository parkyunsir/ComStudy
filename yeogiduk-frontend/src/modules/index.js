import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import auth, {authSaga} from './auth';
import loading from './loading';
import myInfo, {myInfoSaga} from './myInfo';
import restaurant, {restaurantSaga} from './restaurant';
import list, {listSaga} from './search';

const rootReducer = combineReducers({
  auth,
  loading,
  myInfo,
  restaurant,
  list
});

export function* rootSaga() {
  yield all([authSaga(), myInfoSaga(), restaurantSaga(), listSaga()]);
}

export default rootReducer;