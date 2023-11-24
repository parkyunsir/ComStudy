import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as restaurantAPI from '../lib/api/restaurant';

const [DETAIL, DETAIL_SUCCESS, DETAIL_FAILURE] = createRequestActionTypes('restaurant/DETAIL');
const [RTYPE, RTYPE_SUCCESS, RTYPE_FAILURE] = createRequestActionTypes('restaurant/RTYPE');
const [REVIEWS, REVIEWS_SUCCESS, REVIEWS_FAILURE] = createRequestActionTypes('restaurant/REVIEWS');
const [LIKENUM, LIKENUM_SUCCESS, LIKENUM_FAILURE] = createRequestActionTypes('restaurant/LIKENUM');

export const restDetail = createAction(DETAIL, rstId => rstId);
export const restRtype = createAction(RTYPE, typeId => typeId);
export const restReviews = createAction(REVIEWS, rstId => rstId);
export const restLikenum = createAction(LIKENUM, rstId => rstId);

const detailSaga = createRequestSaga(DETAIL, restaurantAPI.restaurantDetail);
const rtypeSaga = createRequestSaga(RTYPE, restaurantAPI.rtype);
const reviewsSaga = createRequestSaga(REVIEWS, restaurantAPI.restaurantReviews);
const likenumSaga = createRequestSaga(LIKENUM, restaurantAPI.likeNum);

export function* restaurantSaga() {
  yield takeLatest(DETAIL, detailSaga);
  yield takeLatest(RTYPE, rtypeSaga);
  yield takeLatest(REVIEWS, reviewsSaga);
  yield takeLatest(LIKENUM, likenumSaga);
}

const initialState = {
  detail: null,
  rtype: null,
  reviews: null,
  likenum: null,
  error: null
};

const restaurant = handleActions(
  {
    [DETAIL_SUCCESS]: (state, {payload: detail}) => ({
      ...state,
      detail
    }),
    [DETAIL_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [RTYPE_SUCCESS]: (state, {payload: rtype}) => ({
      ...state,
      rtype
    }),
    [RTYPE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [REVIEWS_SUCCESS]: (state, {payload: reviews}) => ({
      ...state,
      reviews
    }),
    [REVIEWS_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [LIKENUM_SUCCESS]: (state, {payload: likenum}) => ({
      ...state,
      likenum
    }),
    [LIKENUM_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    })
  },
  initialState
)

export default restaurant;