import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as restaurantAPI from '../lib/api/restaurant';

const [SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE] = createRequestActionTypes('list/SEARCH');

export const search = createAction(SEARCH, word => word);

const searchSaga = createRequestSaga(SEARCH, restaurantAPI.search);

export function* listSaga() {
  yield takeLatest(SEARCH, searchSaga);
}

const initialState = {
  restaurants: null,
  error: null
};

const list = handleActions(
  {
    [SEARCH_SUCCESS]: (state, {payload: restaurants}) => ({
      ...state,
      restaurants
    }),
    [SEARCH_FAILURE]: (state, {payload: error}) => ({
      ...state,
      error
    })
  },
  initialState
)

export default list;