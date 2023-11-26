import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as reviewAPI from '../lib/api/review';

const [POSTREVIEW, POSTREVIEW_SUCCESS, POSTREVIEW_FAILURE] = createRequestActionTypes('review/POSTREVIEW');
const [GETIMAGE, GETIMAGE_SUCCESS, GETIMAGE_FAILURE] = createRequestActionTypes('review/GETIMAGE');

export const postReview = createAction(POSTREVIEW, ({rstId, email, content, star, images}) => ({
  rstId,
  email,
  content,
  star,
  images
}));
export const getImage = createAction(GETIMAGE, viewId => viewId);

const postReviewSaga = createRequestSaga(POSTREVIEW, reviewAPI.postReview);
const getImageSaga = createRequestSaga(GETIMAGE, reviewAPI.getReviewImages);

export function* reviewSaga() {
  yield takeLatest(POSTREVIEW, postReviewSaga);
  yield takeLatest(GETIMAGE, getImageSaga);
}

const initialState = {
  review: null,
  images: null,
  error: null
};

const review = handleActions(
  {
    [POSTREVIEW_SUCCESS]: (state, {payload: review}) => ({
      ...state,
      review
    }),
    [POSTREVIEW_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
    [GETIMAGE_SUCCESS]: (state, {payload: images}) => ({
      ...state,
      images
    }),
    [GETIMAGE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    }),
  }
  ,initialState
)

export default review;