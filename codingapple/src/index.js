import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 변수 선언
const weight = 100;

// reducer
function reducer(state = weight, action) {
  // state 수정
  if (action.type === '증가') {
    state++;
    return state;
  } else if (action.type === '감소') {
    state--;
    return state;
  } else {
    return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
