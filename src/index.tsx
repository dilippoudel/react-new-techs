import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import makeRootReducer from "./redux/reducer/combineReducer";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import App from "./App";

import rootSaga from './redux/saga/index';
import { searchType, AppState } from "./redux/types/actions-types";


const sagaMiddleware = createSagaMiddleware();

const initialState: AppState = {
  countryReducer: {
      searchKeyword: "",
      pageSize:20,
      currentPage:1,
      countries:[],
      loading: false,
      column: '',
      deirection: '',
  }
}

const store = createStore(
  makeRootReducer(),
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
