import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from '../../node_modules/react-router-dom/dist/index';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {rootSaga} from './modules';
import {tempSetStudent} from './modules/student';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadStudent() {
  try {
    const student = localStorage.getItem('student');
    if(!student) return; // 로그인 상태가 아니라면 아무것도 않마

    store.dispatch(tempSetStudent(student));
    //store.dispatch(check());
  } catch(e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadStudent();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
