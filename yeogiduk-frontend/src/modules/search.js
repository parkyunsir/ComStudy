import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as restaurantAPI from '../lib/api/restaurant';

const [SEARCHWORD, SEARCHWORD_SUCCESS, SEARCHWORD_FAILURE] = createRequestActionTypes('search/SEARCHWORD');

export const searchWord = createAction(SEARCHWORD, word => word);

const searchWordSaga = createRequestSaga(SEARCHWORD, restaurantAPI.search);

export function* searchSaga() {
  yield takeLatest(SEARCHWORD, searchWordSaga);
}

const initialState = {
  word: null,
  restaurants: null,
  error: null
};

const search = handleActions(
  {
    [SEARCHWORD_SUCCESS]: (state, {payload: restaurants}) => ({
      ...state,
      restaurants
    }),
    [SEARCHWORD_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    })
  },
  initialState
)

export default search;