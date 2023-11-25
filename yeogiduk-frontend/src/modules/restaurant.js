import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as restaurantAPI from '../lib/api/restaurant';

const [DETAIL, DETAIL_SUCCESS, DETAIL_FAILURE] = createRequestActionTypes('restaurant/DETAIL');
const [RTYPE, RTYPE_SUCCESS, RTYPE_FAILURE] = createRequestActionTypes('restaurant/RTYPE');
const [REVIEWS, REVIEWS_SUCCESS, REVIEWS_FAILURE] = createRequestActionTypes('restaurant/REVIEWS');
const [LIKENUM, LIKENUM_SUCCESS, LIKENUM_FAILURE] = createRequestActionTypes('restaurant/LIKENUM');
const [MENU, MENU_SUCCESS, MENU_FAILURE] = createRequestActionTypes('restaurant/MENU');
const [GETONEIMAGE, GETONEIMAGE_SUCCESS, GETONEIMAGE_FAILURE] = createRequestActionTypes('restaurant/GETONEIMAGE');
const [CHECKLIKE, CHECKLIKE_SUCCESS, CHECKLIKE_FAILURE] = createRequestActionTypes('restaurant/CHECKLIKE');
const [ADDLIKE, ADDLIKE_SUCCESS, ADDLIKE_FAILURE] = createRequestActionTypes('restaurant/ADDLIKE');

export const restDetail = createAction(DETAIL, rstId => rstId);
export const restRtype = createAction(RTYPE, rstId => rstId);
export const restReviews = createAction(REVIEWS, rstId => rstId);
export const restLikenum = createAction(LIKENUM, rstId => rstId);
export const restMenu = createAction(MENU, rstId => rstId);
export const getOneImage = createAction(GETONEIMAGE, viewId => viewId);
export const checkLike = createAction(CHECKLIKE, ({email, rstId}) => ({email, rstId}));
export const addLike = createAction(ADDLIKE, ({id, email, rstId}) => ({id, email, rstId}));

const detailSaga = createRequestSaga(DETAIL, restaurantAPI.restaurantDetail);
const rtypeSaga = createRequestSaga(RTYPE, restaurantAPI.rtype);
const reviewsSaga = createRequestSaga(REVIEWS, restaurantAPI.restaurantReviews);
const likenumSaga = createRequestSaga(LIKENUM, restaurantAPI.likeNum);
const menuSaga = createRequestSaga(MENU, restaurantAPI.menu);
const getOneImageSaga = createRequestSaga(GETONEIMAGE, restaurantAPI.getImage);
const checkLikeSaga = createRequestSaga(CHECKLIKE, restaurantAPI.checkLike);
const addLikeSaga = createRequestSaga(ADDLIKE, restaurantAPI.addLike);

export function* restaurantSaga() {
  yield takeLatest(DETAIL, detailSaga);
  yield takeLatest(RTYPE, rtypeSaga);
  yield takeLatest(REVIEWS, reviewsSaga);
  yield takeLatest(LIKENUM, likenumSaga);
  yield takeLatest(MENU, menuSaga);
  yield takeLatest(GETONEIMAGE, getOneImageSaga);
  yield takeLatest(CHECKLIKE, checkLikeSaga);
  yield takeLatest(ADDLIKE, addLikeSaga);
}

const initialState = {
  detail: null,
  rtype: null,
  reviews: null,
  likenum: null,
  menus: null,
  image: null,
  like: null,
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
    }),
    [MENU_SUCCESS]: (state, {payload: menus}) => ({
      ...state,
      menus
    }),
    [MENU_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [GETONEIMAGE_SUCCESS]: (state, {payload: image}) => ({
      ...state,
      image
    }),
    [GETONEIMAGE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [CHECKLIKE_SUCCESS]: (state, {payload: like}) => ({
      ...state,
      like
    }),
    [CHECKLIKE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),/*
    [ADDLIKE_SUCCESS]: (state, {payload: like}) => ({
      ...state,
      like
    }),
    [ADDLIKE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),*/
  },
  initialState
)

export default restaurant;