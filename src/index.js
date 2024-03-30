import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { allReducers } from "./store/index";
import { createStore } from "redux";
const store = createStore(allReducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);