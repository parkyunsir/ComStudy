import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as restaurantAPI from '../lib/api/restaurant';

const [DETAIL, DETAIL_SUCCESS, DETAIL_FAILURE] = createRequestActionTypes('restaurant/DETAIL');
const [RTYPE, RTYPE_SUCCESS, RTYPE_FAILURE] = createRequestActionTypes('restaurant/RTYPE');
const [REVIEW, REVIEW_SUCCESS, REVIEW_FAILURE] = createRequestActionTypes('restaurant/REVIEW');

export const detail = createAction(DETAIL, rstId => rstId);
export const rtype = createAction(RTYPE, typeId => typeId);
export const review = createAction(REVIEW, rstId => rstId);

const detailSaga = createRequestSaga(DETAIL, restaurantAPI.restaurantDetail);
const rtypeSaga = createRequestSaga(RTYPE, restaurantAPI.rtype);
const reviewSaga = createRequestSaga(REVIEW, restaurantAPI.restaurantReviews);

export function* restaurantSaga() {
  yield takeLatest(DETAIL, detailSaga);
  yield takeLatest(RTYPE, rtypeSaga);
  yield takeLatest(REVIEW, reviewSaga);
}

const initialState = {
  detail: null,
  rtype: null,
  review: null,
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
    [REVIEW_SUCCESS]: (state, {payload: review}) => ({
      ...state,
      review
    }),
    [REVIEW_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    })
  },
  initialState
)

export default restaurant;