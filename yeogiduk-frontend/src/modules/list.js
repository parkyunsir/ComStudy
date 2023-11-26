import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as listAPI from '../lib/api/list';

const [ALL, ALL_SUCCESS, ALL_FAILURE] = createRequestActionTypes('list/ALL');
const [RANKSTAR, RANKSTAR_SUCCESS, RANKSTAR_FAILURE] = createRequestActionTypes('list/RANKSTAR');
const [RANKLIKE, RANKLIKE_SUCCESS, RANKLIKE_FAILURE] = createRequestActionTypes('list/RANKLIKE');
const [RANKREVIEW, RANKREVIEW_SUCCESS, RANKREVIEW_FAILURE] = createRequestActionTypes('list/RANKREVIEW');
const [SORTLIST, SORTLIST_SUCCESS, SORTLIST_FAILURE] = createRequestActionTypes('list/SORTLIST');
const [TYPELIST, TYPELIST_SUCCESS, TYPELIST_FAILURE] = createRequestActionTypes('list/TYPELIST');

export const all = createAction(ALL);
export const rankStar = createAction(RANKSTAR);
export const rankLike = createAction(RANKLIKE);
export const rankReview = createAction(RANKREVIEW);
export const sortList = createAction(SORTLIST, ({sort, typeId}) => ({sort, typeId}));
export const typeList = createAction(TYPELIST);

const allSaga = createRequestSaga(ALL, listAPI.allRestaurant);
const rankStarSaga = createRequestSaga(RANKSTAR, listAPI.listRankStar);
const rankLikeSaga = createRequestSaga(RANKLIKE, listAPI.listRankLike);
const rankReviewSaga = createRequestSaga(RANKREVIEW, listAPI.listRankReview);
const sortListSaga = createRequestSaga(SORTLIST, listAPI.sortRankType);
const typeListSaga = createRequestSaga(TYPELIST, listAPI.listType);

export function* listSaga() {
  yield takeLatest(ALL, allSaga);
  yield takeLatest(RANKSTAR, rankStarSaga);
  yield takeLatest(RANKLIKE, rankLikeSaga);
  yield takeLatest(RANKREVIEW, rankReviewSaga);
  yield takeLatest(SORTLIST, sortListSaga);
  yield takeLatest(TYPELIST, typeListSaga);
}

const initialState = {
  restaurants: null,
  starRestaurants: null,
  likeRestaurants: null,
  reviewRestaurants: null,
  sortRestaurants: null,
  types: null,
  error: null
};

const list = handleActions(
  {
    [ALL_SUCCESS]: (state, {payload: restaurants}) => ({
      ...state,
      restaurants
    }),
    [ALL_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [RANKSTAR_SUCCESS]: (state, {payload: starRestaurants}) => ({
      ...state,
      starRestaurants
    }),
    [RANKSTAR_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [RANKLIKE_SUCCESS]: (state, {payload: likeRestaurants}) => ({
      ...state,
      likeRestaurants
    }),
    [RANKLIKE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [RANKREVIEW_SUCCESS]: (state, {payload: reviewRestaurants}) => ({
      ...state,
      reviewRestaurants
    }),
    [RANKREVIEW_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [SORTLIST_SUCCESS]: (state, {payload: sortRestaurants}) => ({
      ...state,
      sortRestaurants
    }),
    [SORTLIST_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [TYPELIST_SUCCESS]: (state, {payload: types}) => ({
      ...state,
      types
    }),
    [TYPELIST_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
  },
  initialState
)

export default list;