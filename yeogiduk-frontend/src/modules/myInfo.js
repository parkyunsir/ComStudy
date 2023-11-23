import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as myInfoAPI from '../lib/api/myInfo';

const [RESTAURANTS, RESTAURANTS_SUCCESS, RESTAURANTS_FAILURE] = createRequestActionTypes('myInfo/RESTAURANTS');
const [REVIEWS, REVIEWS_SUCCESS, REVIEWS_FAILURE] = createRequestActionTypes('myInfo/REVIEWS');

export const restaurants = createAction(RESTAURANTS, email => email);
export const reviews = createAction(REVIEWS, email => email);

const restaurantsSaga = createRequestSaga(RESTAURANTS, myInfoAPI.myLikes);
const reviewsSaga = createRequestSaga(REVIEWS, myInfoAPI.myReviews);

export function* myInfoSaga() {
  yield takeLatest(RESTAURANTS, restaurantsSaga);
  yield takeLatest(REVIEWS, reviewsSaga);
}

const initialState = {
  restaurantList: null,
  reviewList: null,
  error: null
};

const myInfo = handleActions(
  {
    [RESTAURANTS_SUCCESS]: (state, {payload: restaurantList}) => ({
      ...state,
      restaurantList,
    }),
    [RESTAURANTS_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error,
    }),
    [REVIEWS_SUCCESS]: (state, {payload: reviewList}) => ({
      ...state,
      reviewList,
    }),
    [REVIEWS_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error,
    })
  },
  initialState,
);

export default myInfo;